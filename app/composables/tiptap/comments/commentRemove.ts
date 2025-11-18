import { toast } from '~/composables/utils/useToast'

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
}

function removeComment(list: CommentSchema[], id: string) {
  for (const comment of list) {
    if (comment.id === id && comment.author_id === as().account.puuid) {
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
