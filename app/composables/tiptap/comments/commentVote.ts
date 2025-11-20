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
  await $fetch("/supabase/update/vote", {
    body,
    headers: useRequestHeaders(["cookie"]),
    method: "POST",
  })
}
