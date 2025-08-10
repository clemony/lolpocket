import { useSupabaseClient } from '#imports'
import type {
  RealtimeChannel,
  RealtimePostgresUpdatePayload as RealtimePayload,
} from '@supabase/supabase-js'
import type { Database } from 'db/database.types'
import type { WatchSource } from 'vue'

export function useSupabaseSync<T extends keyof Database['public']['Tables']>(
  source: WatchSource<
    Partial<Database['public']['Tables'][T]['Row']> | null | undefined
  >,
  table: T,
  opts?: {
    onBatchUpdate?: (
      payloads: RealtimePayload<Database['public']['Tables'][T]['Row']>[]
    ) => void
    batchMs
  },
) {
  const client = useSupabaseClient<Database>()
  let channel: RealtimeChannel | null = null

  let queue: RealtimePayload<Database['public']['Tables'][T]['Row']>[] = []
  let timer: ReturnType<typeof setTimeout> | null = null
  const batchMs = opts?.batchMs ?? 30_000

  watch(
    source,
    async (val, _, onCleanup) => {
      if (channel) {
        client.removeChannel(channel)
        channel = null
      }

      if (val == null)
        return

      channel = client
        .channel(`custom-${table}-watch`)
        .on(
          'postgres_changes',
          { event: 'UPDATE', schema: 'public', table: table as string },
          (
            payload: RealtimePayload<Database['public']['Tables'][T]['Row']>,
          ) => {
            queue.push(payload)

            if (timer)
              return

            timer = setTimeout(() => {
              opts?.onBatchUpdate?.([...queue])
              queue = []
              timer = null
            }, batchMs)
          },
        )
        .subscribe()

      onCleanup(() => {
        client.removeChannel(channel!)
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        queue = []
      })
    },
    { immediate: true },
  )
}
