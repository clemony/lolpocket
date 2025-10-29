export function handleVote({
  id,
  puuid,
  newVote,
  oldVote
}: {
  id: string
  puuid: string
  newVote: number
  oldVote: number
}) {
  updateCommentVote(as().comments, id, puuid, newVote, oldVote)
}

function updateCommentVote(
  list: CommentItem[],
  id: string,
  puuid: string,
  newVote: number,
  oldVote: number
): boolean {
  for (const comment of list) {
    if (comment.id === id) {
      // remove vote
      if (newVote === 0) {
        comment.upvotes = comment.upvotes.filter(v => v !== puuid)
        comment.downvotes = comment.downvotes.filter(v => v !== puuid)
      }
      // remove from old vote if switching
      if (oldVote === 1)
        comment.upvotes = comment.upvotes.filter(v => v !== puuid)
      if (oldVote === -1)
        comment.downvotes = comment.downvotes.filter(v => v !== puuid)

      // Add to new vote
      if (newVote === 1 && !comment.upvotes.includes(puuid))
        comment.upvotes.push(puuid)
      if (newVote === -1 && !comment.downvotes.includes(puuid))
        comment.downvotes.push(puuid)

      return true
    }

    if (comment.replies?.length) {
      const found = updateCommentVote(comment.replies, id, puuid, newVote, oldVote)
      if (found)
        return true
    }
  }

  return false
}