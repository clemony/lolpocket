import { sha256 } from 'ohash'
import * as v from 'valibot'

function hash(obj: any) {
  return sha256(JSON.stringify(obj ?? {}))
}

export function useSupabaseSync<
  T extends object,
  S extends v.BaseSchema<any, T, any>,
>(
  source: () => T,
  endpoint: string,
  getBody: (userId: string, value: T) => any,
  schema: S, // S is a BaseSchema that outputs T
) {
  const user = useSupabaseUser()
  console.log('🌱 - useSupabaseSync - user:', user)
  const session = useSupabaseSession()

  let snapshotHash: string | null = null
  console.log('🌱 - useSupabaseSync - snapshotHash:', snapshotHash)

  onMounted(() => {
    const parsed = v.safeParse(schema, source())
    snapshotHash = hash(parsed.output)
  })

  async function syncIfDirty() {
    if (!user.value)
      return

    const parsed = v.safeParse(schema, source())

    const currentHash = hash(parsed.output)

    if (currentHash === snapshotHash)
      return

    if (!session.value)
      throw new Error('No active session')

    if (!parsed.success) {
      console.warn('Validation failed, using schema defaults')
    }

    const validated = parsed.success ? parsed.output : v.getDefaults(schema) as T

    await $fetch(endpoint, {
      method: 'POST',
      headers: { Authorization: `Bearer ${session.value.access_token}` },
      body: getBody(user.value.id, validated),
    })

    snapshotHash = currentHash
  }

  onBeforeRouteLeave(async () => {
    await syncIfDirty()
    console.log('synced')
  })

  return { syncIfDirty }
}