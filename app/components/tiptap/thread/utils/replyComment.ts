export function handleReply({ content, parentId }: { parentId: string, content: Doc }) {
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
  addReply(as().comments, parentId, reply)
}

function addReply(list: CommentItem[], parentId: string, reply: CommentItem) {
  for (const comment of list) {
    if (comment.id === parentId) {
      comment.replies ??= []
      comment.replies.push(reply)
      return
    }
    if (comment.replies?.length)
      addReply(comment.replies, parentId, reply)
  }
}
