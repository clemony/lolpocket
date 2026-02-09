export async function removeComment(
  comment: CommentData,
  removed: 'mod' | 'user'
) {
  const toast = useToast()
  const data = await $fetch<CommentData>(
    '/api/supabase/update/comment.remove',
    {
      headers: useRequestHeaders(['cookie']),
      method: 'POST',
      body: { comment, removed },
    }
  )
  if (!data) {
    sendErrorToast()
  }
  else {
    if (!data.thread_id) {
      sendErrorToast()
      return
    }
    ts().setComment(data.thread_id, data)
    console.log('📎 - removeComment - data:', data)
    toast.add({
      title: 'Comment Removed',
      description: `Your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))} has been removed.`,
    })
  }
}
