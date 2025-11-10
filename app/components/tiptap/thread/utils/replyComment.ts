import { toast } from '~/base/notification/toast/use-toast'

export function handleReply({ clearEditor, content, parentId }: { parentId: string, content: Doc, clearEditor: () => boolean }) {
  // Replace with actual save call (e.g. Supabase insert)
/*   const reply: CommentData = {
    author_id: as().account.puuid,
    id: crypto.randomUUID(),
    authorIcon: as().account.icon,
    authorName: as().account.name,
    authorTag: as().account.tag,
    content,
    created: new Date().toISOString(),
    downvotes: [],
    updated: null,
    parent_id,
    replies: [],
    upvotes: [as().account.puuid],
  }
  addReply(as().comments, parentId, reply, clearEditor) */
}

function addReply(list: CommentData[], parentId: string, reply: CommentData, clearEditor: () => boolean) {
  // @todo probably trash?
  /* for (const comment of list) {
    if (comment.id === parentId) {
      comment.replies ??= []
      comment.replies.push(reply)
      clearEditor()
      toast({
        title: 'Reply posted!',
        description: `Posted your reply to ${comment.authorName} on ${capitalize(String(useRoute().meta?.title || useRoute().name))}.`,
      })
      return
    }
    if (comment.replies?.length)
      addReply(comment.replies, parentId, reply, clearEditor)
  } */
}
