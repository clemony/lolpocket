export function postComment(editor, newComment) {
  const id = crypto.randomUUID()
  as().comments.push({
    authorPuuid: as().account.puuid,
    id,
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
  toast({
    title: 'Comment Posted!',
    description: `Successfully posted your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))}`,
  })
  const router = useRouter()
  router.replace({ hash: `#${id}` })
}