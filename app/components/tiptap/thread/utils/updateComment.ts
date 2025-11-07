import { toast } from '~/base/notification/toast/use-toast'

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
async function updateComment(list: CommentItem[], id: string, content: Doc) {
  for (const comment of list) {
    const user = await useSupabaseUser() as unknown as ExtendedPayload
    if (comment.id === id/*  && (comment.authorPuuid === as().account?.puuid || user?.app_metadata?.user_role === 'admin') */) {
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