import type { Editor } from "@tiptap/vue-3"
import { toast } from "~/base/popup/toast/use-toast"
import { renderCommentHTML } from "~/composables/tiptap"

export async function updateComment(
  content: Doc,
  thread_id: UUID | string,
  comment_id: UUID | string
) {
  const body = {
    comment_id,
    content,
    html: renderCommentHTML(content),
  }
  const { data, error } = await $fetch<CommentReturn>(
    "/api/supabase/comment/comment_update",
    {
      body,
      headers: useRequestHeaders(["cookie"]),
      method: "POST",
    }
  )
  if (error) {
    sendErrorToast()
  } else {
    const update = ts().threads[thread_id as UUID].find(
      (c) => c.id === comment_id
    )
    Object.assign(update, data)
    toast({
      title: "Comment Updated",
      color: "ghost",
      description: `Successfully updated your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))}`,
      icon: "chat",
    })
  }
}
