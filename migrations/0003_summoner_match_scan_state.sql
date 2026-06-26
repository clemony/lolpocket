CREATE TABLE IF NOT EXISTS summoner_match_scan_state (
  puuid TEXT PRIMARY KEY,
  region TEXT NOT NULL DEFAULT 'na1',
  last_scanned_at INTEGER,
  next_scan_after INTEGER,
  last_status TEXT NOT NULL DEFAULT 'empty'
    CHECK (last_status IN ('success', 'empty', 'error')),
  last_error TEXT,
  scan_count INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL DEFAULT (unixepoch() * 1000)
);

CREATE INDEX IF NOT EXISTS idx_summoner_match_scan_state_due
  ON summoner_match_scan_state(region, next_scan_after);

PRAGMA optimize;
