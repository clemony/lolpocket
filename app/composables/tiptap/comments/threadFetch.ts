export async function fetchThread(thread_id: string) {
  const body = {
    thread_id,
  }
  const { data, error } = await $fetch<Return>(
    "/api/supabase/comment/thread_fetch",
    {
      body,
      headers: useRequestHeaders(["cookie"]),
      method: "POST",
    }
  )
  console.log("📎 - fetchThread - data:", data)

  if (!data || !Array.isArray(data)) return

  ts().threads[thread_id] = [...(ts().threads[thread_id] ?? []), ...data]
}
