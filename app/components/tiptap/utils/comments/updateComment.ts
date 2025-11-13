import type { Editor } from "@tiptap/vue-3"
import { renderCommentHTML } from "tiptap"
import { toast } from "~/base/notification/toast/use-toast"

export async function updateComment(
  editor: Editor,
  content: Doc,
  comment_id: UUID
) {
  const body = {
    content,
    comment_id,
    html: renderCommentHTML(content),
  }
  await $fetch("/api/supabase/comment/update", {
    headers: useRequestHeaders(["cookie"]),
    body,
    method: "POST",
  })
  editor.commands.clearContent()
  editor.commands.blur()
  toast({
    title: "Comment Posted",
    color: "ghost",
    icon: "chat",
    description: `Successfully updated your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))}`,
  })
}
