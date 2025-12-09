import { matchDB } from "~/stores"

function updateBucket(bucket: QueueStats, match: MatchData, player: Player) {
  bucket.games++
  player.win ? bucket.wins++ : bucket.losses++

  bucket.kills += player.stats.kills.value
  bucket.deaths += player.stats.deaths
  bucket.assists += player.stats.assists
  bucket.killParticipation += player.stats.kp

  if (!bucket.matchIds.includes(match.matchId))
    bucket.matchIds.push(match.matchId)

  bucket.gamePatches.push(match.gamePatch)
}

const TRACKED_QUEUES: TrackedQueueId[] = [400, 420, 440]

export const useAddMatches = async (matches: MatchData[]) => {
  if (!matches.length) return

  await matchDB.transaction(
    "rw",
    matchDB.matchData,
    matchDB.playerChampions,
    async () => {
      await matchDB.matchData.bulkPut(matches)

      for (const match of matches) {
        for (const player of match.participants) {
          const key: [string, number] = [player.puuid, player.championId]

          const existing = (await matchDB.playerChampions.get(key)) ?? {
            puuid: player.puuid,
            championId: player.championId,
            championName: champNameById(player.championId),
            overall: {
              games: 0,
              wins: 0,
              losses: 0,
              kills: 0,
              deaths: 0,
              assists: 0,
              killParticipation: 0,
              matchIds: [],
              gamePatches: [],
            },
            queues: {} as Record<QueueKey, QueueStats>,
            lastPlayed: 0,
          }

          if (existing.overall.matchIds.includes(match.matchId)) {
            existing.lastPlayed = Math.max(
              existing.lastPlayed,
              match.gameEndTimestamp
            )
            await matchDB.playerChampions.put(existing)
            continue
          }

          updateBucket(existing.overall, match, player)

          if (TRACKED_QUEUES.includes(match.queueId as TrackedQueueId)) {
            const qKey = String(match.queueId) as QueueKey
            if (!existing.queues[qKey]) {
              existing.queues[qKey] = {
                games: 0,
                wins: 0,
                losses: 0,
                kills: 0,
                deaths: 0,
                assists: 0,
                killParticipation: 0,
                matchIds: [],
                gamePatches: [],
              }
            }
            updateBucket(existing.queues[qKey], match, player)
          }

          existing.lastPlayed = Math.max(
            existing.lastPlayed,
            match.gameEndTimestamp
          )

          await matchDB.playerChampions.put(existing)
        }
      }
    }
  )
}
