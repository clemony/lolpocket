CREATE TABLE IF NOT EXISTS summoner_cache (
  puuid TEXT PRIMARY KEY,
  game_name TEXT NOT NULL,
  tag_line TEXT NOT NULL,
  region TEXT,
  profile_icon_id INTEGER,
  summoner_level INTEGER,
  search_name TEXT NOT NULL,
  search_tag TEXT NOT NULL,
  last_riot_sync_at INTEGER,
  last_seen_at INTEGER,
  updated_at INTEGER NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_summoner_cache_search
  ON summoner_cache(search_name, search_tag);

CREATE INDEX IF NOT EXISTS idx_summoner_cache_region_search
  ON summoner_cache(region, search_name, search_tag);

CREATE INDEX IF NOT EXISTS idx_summoner_cache_last_seen
  ON summoner_cache(last_seen_at);

PRAGMA optimize;
