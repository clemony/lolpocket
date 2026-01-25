export async function updateComment(
  content: Doc,
  thread_id: UUID | string,
  comment_id: UUID | string
) {
  const toast = useToast()
  const body = {
    comment_id,
    content,
  }
  const { data, error } = await $fetch<CommentReturn>(
    '/api/supabase/update/comment',
    {
      body,
      headers: useRequestHeaders(['cookie']),
      method: 'POST',
    }
  )
  if (error) {
    sendErrorToast()
  }
  else {
    ts().setComment(thread_id, data)
    toast.add({
      title: 'Comment Updated',
      // color: "ghost",
      description: `Successfully updated your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))}`,
      icon: 'chat',
    })
  }
}
