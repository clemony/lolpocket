export async function fetchThread(thread_id: string) {
  const { comments, authors } = await $fetch<ThreadReturn>(
    "/api/supabase/fetch/thread",
    {
      body: { thread_id },
      method: "POST",
    }
  )

  const accs = useAccountsStore()

  for (const acc of Object.values(authors)) {
    accs.setAccount(acc as Account)
  }
  if (!comments || !Array.isArray(comments)) return

  const threadStore = useThreadStore()
  threadStore.setThreadComments(thread_id, comments)
}
