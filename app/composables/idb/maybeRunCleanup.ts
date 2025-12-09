const CLEANUP_KEY = "lolpocket-idb-cleanup-last-run"
const CLEANUP_INTERVAL_MS = 1000 * 60 * 60 * 24 // 24h
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30 // 30 days

function maybeRunCleanup() {
  const now = Date.now()
  const lastRun = Number(localStorage.getItem(CLEANUP_KEY) || 0)

  if (now - lastRun < CLEANUP_INTERVAL_MS) return

  localStorage.setItem(CLEANUP_KEY, String(now))
  void runCleanup() // fire and forget
}

async function runCleanup() {
  const cutoff = Date.now() - MAX_AGE_MS

  // Example: delete matchData older than 30 days AND not accessed recently
  /*   await matchDB.matchData
    .where("playedAt")
    .below(cutoff)
    .and((m) => m.lastAccessedAt < cutoff)
    .and((m) => !m.participantIds.includes(as().account.puuid))
    .delete()

  await matchDB.matchTimeline
    .where("playedAt")
    .below(cutoff)
    .and((m) => m.lastAccessedAt < cutoff)
    .and((m) => !m.participantIds.includes(as().account.puuid))
    .delete() */
}
