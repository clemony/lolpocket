export async function fetchThread(thread_id: string) {
  const { comments, authors } = await $fetch("/supabase/fetch/thread", {
    body: { thread_id },
    method: "POST",
  })
  console.log("📎 - fetchThread - comments:", comments)
  console.log("📎 - fetchThread - authors:", authors)

  const accs = useAccountsStore()

  for (const acc of Object.values(authors)) {
    accs.setAccount(acc as Account)
  }
  if (!comments || !Array.isArray(comments)) return

  const threadStore = useThreadStore()
  threadStore.setThreadComments(thread_id, comments)
}
