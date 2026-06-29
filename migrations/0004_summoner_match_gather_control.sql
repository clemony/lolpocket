CREATE TABLE IF NOT EXISTS summoner_match_gather_control (
  id TEXT PRIMARY KEY,
  lock_owner TEXT,
  locked_until INTEGER NOT NULL DEFAULT 0,
  riot_backoff_until INTEGER NOT NULL DEFAULT 0,
  last_status TEXT NOT NULL DEFAULT 'idle'
    CHECK (
      last_status IN (
        'idle',
        'running',
        'success',
        'empty',
        'error',
        'locked',
        'rate_limited',
        'no_seeds'
      )
    ),
  last_error TEXT,
  updated_at INTEGER NOT NULL DEFAULT (unixepoch() * 1000)
);

CREATE INDEX IF NOT EXISTS idx_summoner_match_gather_control_locked_until
  ON summoner_match_gather_control(locked_until);

INSERT OR IGNORE INTO summoner_match_gather_control (id)
VALUES ('riot:match-analytics:gather-na:na1');

PRAGMA optimize;
