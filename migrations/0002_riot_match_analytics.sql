CREATE TABLE IF NOT EXISTS riot_matches (
  match_id TEXT PRIMARY KEY,
  region_id TEXT NOT NULL,
  queue_id INTEGER NOT NULL,
  map_id INTEGER NOT NULL,
  patch_key TEXT NOT NULL,
  game_end_at INTEGER NOT NULL,
  game_duration_sec INTEGER NOT NULL,
  team_summary_json TEXT NOT NULL,
  created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS riot_match_participants (
  match_id TEXT NOT NULL,
  puuid TEXT NOT NULL,
  game_end_at INTEGER NOT NULL,
  queue_id INTEGER NOT NULL,
  patch_key TEXT NOT NULL,
  team_id INTEGER NOT NULL,
  role TEXT NOT NULL,
  champion_id INTEGER NOT NULL,
  win INTEGER NOT NULL,
  feature_json TEXT NOT NULL,
  timeline_feature_json TEXT,
  mvp_score REAL,
  mvp_rank INTEGER,
  mvp_award TEXT,
  PRIMARY KEY (match_id, puuid),
  FOREIGN KEY (match_id) REFERENCES riot_matches(match_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS riot_match_cursors (
  puuid TEXT NOT NULL,
  region_id TEXT NOT NULL,
  queue_id INTEGER NOT NULL DEFAULT 0,
  newest_timestamp INTEGER,
  older_cursor INTEGER NOT NULL DEFAULT 0,
  newest_sync_at INTEGER,
  older_sync_at INTEGER,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (puuid, region_id, queue_id)
);

CREATE INDEX IF NOT EXISTS idx_riot_match_participants_puuid_end
  ON riot_match_participants(puuid, game_end_at DESC);

CREATE INDEX IF NOT EXISTS idx_riot_match_participants_champion_patch
  ON riot_match_participants(champion_id, patch_key);

PRAGMA optimize;
