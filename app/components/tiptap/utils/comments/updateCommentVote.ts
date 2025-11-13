export async function updateCommentVote(
  id: string,
  uuid: string,
  newVote: number
) {
  const body = {
    id,
    uuid,
    newVote,
  }
  await $fetch("/api/supabase/comment/insert", {
    headers: useRequestHeaders(["cookie"]),
    body,
    method: "POST",
  })
}
