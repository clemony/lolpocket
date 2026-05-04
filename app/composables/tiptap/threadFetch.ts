export async function fetchThread(thread_id: string) {
  const { authors, comments } = await $fetch<ThreadReturn>(
    "/api/supabase/fetch/thread",
    {
      method: "POST",
      body: { thread_id }
    }
  )

  const accs = publicUsers()

  for (const acc of Object.values(authors)) {
    accs.setAccount(acc as Account)
  }
  if (!comments || !Array.isArray(comments)) return

  const threadStore = threads()
  threadStore.setThreadComments(thread_id, comments)
}
