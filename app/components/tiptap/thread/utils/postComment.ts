import type { Editor } from '@tiptap/core'
import { toast } from '~/base/notification/toast/use-toast'


export function postComment(editor: Editor, newComment: Doc, parent?: Record<string, UUID>) {

const comment: CommentSchema  = {
    author_id: as().account.uuid,
    id: crypto.randomUUID(),
    parent_id: parent?.parent_id || null,
    thread_id: !parent ? crypto.randomUUID() : parent.thread_id,

    //
    content: newComment,
    //
    upvotes: [as().account.uuid],
    downvotes: [],
    //
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    removed: null,
  }
as().comments.push(comment)
  editor.commands.clearContent()
  editor.commands.blur()
  toast({
    title: 'Comment Posted!',
    description: `Successfully posted your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))}`,
  })
/*   const router = useRouter()
  router.replace({ hash: `#${id}` }) */
}

