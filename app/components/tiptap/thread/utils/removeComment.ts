/* future
async function handleUpdate({ id, content }: { id: string; content: Doc }) {
  updateComment(as().comments, id, content)

  await supabase
    .from('comments')
    .update({ content })
    .eq('id', id)
} */
export function handleRemoval(id: string) {
  console.log('🌱 - handleRemoval - id:', id)
  removeComment(as().comments, id)
}

function removeComment(list: CommentItem[], id: string) {
  for (const comment of list) {
    if (comment.id === id) {
      as().removedComments.push({
        authorPuuid: comment.authorPuuid,
        id: comment.id,
        content: comment.content,
      })
      const removedComment = {
        authorPuuid: null,
        id: comment.id,
        authorIcon: null,
        authorName: 'deleted',
        authorTag: null,
        content: {
          content: [{
            content: [{
              text: 'Comment removed by user.',
              type: 'text',
            }],
            type: 'paragraph'
          }],
          type: 'doc'
        },
        createdAt: comment.createdAt,
        downvotes: comment.downvotes,
        editedAt: comment.editedAt,
        replies: comment.replies,
        upvotes: comment.upvotes,
      }

      Object.assign(comment, removedComment)
      toast({
        title: 'Comment Removed',
        description: `Your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))} has been removed.`,
      })
      return true
    }
    if (comment.replies?.length) {
      const found = removeComment(comment.replies, id)
      if (found)
        return true
    }
  }
  return false
}