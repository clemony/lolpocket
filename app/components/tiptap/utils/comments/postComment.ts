import type { Editor } from "@tiptap/core"
import { toast } from "~/base/notification/toast/use-toast"
import { renderCommentHTML } from "~/components/tiptap/utils/render/renderCommentHTML"

export async function postComment(
  editor: Editor,
  content: Doc,
  thread_id: UUID,
  parent_id?: UUID
) {
  const body = {
    content,
    thread_id,
    parent_id,
    html: renderCommentHTML(content),
  }
  await $fetch("/api/supabase/comment/insert", {
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
    description: `Successfully posted your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))}`,
  })
}
