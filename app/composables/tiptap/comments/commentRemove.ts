import { toast } from "~/composables/utils/useToast"

export async function removeComment(
  comment: CommentData,
  removed: "mod" | "user"
) {
  const data = await $fetch<CommentData>(
    "/api/supabase/update/comment.remove",
    {
      body: { comment, removed },
      headers: useRequestHeaders(["cookie"]),
      method: "POST",
    }
  )
  if (!data) {
    sendErrorToast()
  } else {
    ts().setComment(data.thread_id, data)
    console.log("📎 - removeComment - data:", data)
    toast({
      title: "Comment Removed",
      description: `Your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))} has been removed.`,
    })
  }
}
