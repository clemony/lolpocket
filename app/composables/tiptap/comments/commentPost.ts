import { toast } from "~/composables/utils/useToast"

export async function postComment(
  content: Doc,
  thread_id: UUID | string,
  parent_id?: UUID | string
) {
  const body = {
    parent_id,
    thread_id,
    content,
  }
  const { data, error } = await $fetch<CommentReturn>(
    "/api/supabase/comment/post",
    {
      body,
      headers: useRequestHeaders(["cookie"]),
      method: "POST",
    }
  )

  if (error) {
    sendErrorToast()
  } else {
    ts().setComment(thread_id, data)

    toast({
      title: "Comment Posted",
      color: "ghost",
      description: `Successfully posted your comment on ${capitalize(String(useRoute().meta?.title || useRoute().name))}`,
      icon: "chat",
    })
  }
}
