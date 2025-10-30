/* future
async function handleUpdate({ id, content }: { id: string; content: Doc }) {
  updateComment(as().comments, id, content)

  await supabase
    .from('comments')
    .update({ content })
    .eq('id', id)
} */
export function handleUpdate({ id, content }: { id: string, content: Doc }) {
  updateComment(as().comments, id, content)
}

function updateComment(list: CommentItem[], id: string, content: Doc) {
  for (const comment of list) {
    if (comment.id === id) {
      comment.content = content
      comment.editedAt = new Date().toISOString()
      toast({
        title: 'Comment Updated!',
        description: `Successfully updated your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))}.`,
      })
      return true
    }
    if (comment.replies?.length) {
      const found = updateComment(comment.replies, id, content)
      if (found)
        return true
    }
  }
  return false
}