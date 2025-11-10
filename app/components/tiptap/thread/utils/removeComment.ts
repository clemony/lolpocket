import { toast } from '~/base/notification/toast/use-toast'

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

function removeComment(list: CommentSchema[], id: string) {
  for (const comment of list) {
    if (comment.id === id && comment.author_id === as().account.puuid) {
      as().removedComments.push({
        author_id: comment.author_id,
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
        created: comment.created,
        downvotes: comment.downvotes,
        updated: comment.updated,
        removed: true,
        upvotes: comment.upvotes,
      }

      Object.assign(comment, removedComment)
      toast({
        title: 'Comment Removed',
        description: `Your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))} has been removed.`,
      })
      return true
    }
    /* @fixme sb call */
   /*  if (comment.replies?.length) {
      const found = removeComment(comment.replies, id)
      if (found)
        return true
    } */
  }
  return false
}