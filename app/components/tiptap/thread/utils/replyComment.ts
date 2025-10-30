export function handleReply({ clearEditor, content, parentId }: { parentId: string, content: Doc, clearEditor: () => boolean }) {
  // Replace with actual save call (e.g. Supabase insert)
  const reply: CommentItem = {
    authorPuuid: as().account.puuid,
    id: crypto.randomUUID(),
    authorIcon: as().account.icon,
    authorName: as().account.name,
    authorTag: as().account.tag,
    content,
    createdAt: new Date().toISOString(),
    downvotes: [],
    editedAt: null,
    parentId,
    replies: [],
    upvotes: [as().account.puuid],
  }
  addReply(as().comments, parentId, reply, clearEditor)
}

function addReply(list: CommentItem[], parentId: string, reply: CommentItem, clearEditor: () => boolean) {
  for (const comment of list) {
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
  }
}
