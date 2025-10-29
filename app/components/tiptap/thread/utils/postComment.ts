export function postComment(editor, newComment) {
  as().comments.push({
    authorPuuid: as().account.puuid,
    id: crypto.randomUUID(),
    authorIcon: as().account.icon,
    authorName: as().account.name,
    authorTag: as().account.tag,
    content: newComment,
    createdAt: new Date().toISOString(),
    downvotes: [],
    editedAt: null,
    replies: [],
    upvotes: [as().account.puuid],
  })
  editor.commands.clearContent()
  editor.commands.blur()
}