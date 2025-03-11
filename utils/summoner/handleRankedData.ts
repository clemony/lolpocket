
export function getRankedWinrate(summoner, queue){
  return (queue.value.win / queue.value.games) * 100
}


  export function getRankedRank(summoner, queue){
    return queue.value.rank
  }

  export function getRankedTier(summoner, queue){
    return queue.rank.tier
  }