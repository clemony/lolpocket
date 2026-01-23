const CLEANUP_KEY = 'lolpocket-idb-cleanup-last-run'
const CLEANUP_INTERVAL_MS = 1000 * 60 * 60 * 24
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30

export function maybeRunCleanup(accountPuuid?: string) {
  const now = Date.now()
  const lastRun = Number(localStorage.getItem(CLEANUP_KEY) || 0)

  if (now - lastRun < CLEANUP_INTERVAL_MS)
    return

  localStorage.setItem(CLEANUP_KEY, String(now))
  void runCleanup(accountPuuid)
}

async function runCleanup(accountPuuid?: string) {
  const cutoff = Date.now() - MAX_AGE_MS

  // ---- matchData ----
  await lpdb.matchData
    .where('lastAccessedAt')
    .below(cutoff)
    .and(m => !accountPuuid || !m.participantIds.includes(accountPuuid))
    .delete()

  // ---- matchTimeline ----
  const oldTimelines = await lpdb.matchTimeline
    .where('lastAccessedAt')
    .below(cutoff)
    .toArray()

  const timelineDeletes = oldTimelines
    .filter(
      t =>
        !accountPuuid
        || !Object.values(t.players).some(p => p.puuid === accountPuuid)
    )
    .map(t => t.matchId)

  if (timelineDeletes.length) {
    await lpdb.matchTimeline.bulkDelete(timelineDeletes)
  }
}
