CREATE TABLE IF NOT EXISTS riot_ingested_matches (
  match_id TEXT PRIMARY KEY,
  region_id TEXT NOT NULL,
  queue_id INTEGER NOT NULL,
  map_id INTEGER NOT NULL,
  patch_key TEXT NOT NULL,
  game_end_at INTEGER NOT NULL,
  game_duration_sec INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'done')),
  claimed_at INTEGER NOT NULL,
  ingested_at INTEGER
);

CREATE TABLE IF NOT EXISTS riot_champion_tallies (
  region_id TEXT NOT NULL,
  queue_id INTEGER NOT NULL,
  map_id INTEGER NOT NULL,
  patch_key TEXT NOT NULL,
  role TEXT NOT NULL,
  champion_id INTEGER NOT NULL,
  games INTEGER NOT NULL DEFAULT 0,
  wins INTEGER NOT NULL DEFAULT 0,
  losses INTEGER NOT NULL DEFAULT 0,
  remakes INTEGER NOT NULL DEFAULT 0,
  kills REAL NOT NULL DEFAULT 0,
  deaths REAL NOT NULL DEFAULT 0,
  assists REAL NOT NULL DEFAULT 0,
  kda REAL NOT NULL DEFAULT 0,
  gold_earned REAL NOT NULL DEFAULT 0,
  total_cs REAL NOT NULL DEFAULT 0,
  total_damage REAL NOT NULL DEFAULT 0,
  total_damage_taken REAL NOT NULL DEFAULT 0,
  vision_score REAL NOT NULL DEFAULT 0,
  game_duration_sec REAL NOT NULL DEFAULT 0,
  PRIMARY KEY (
    region_id,
    queue_id,
    map_id,
    patch_key,
    role,
    champion_id
  )
);

CREATE TABLE IF NOT EXISTS riot_champion_ally_tallies (
  region_id TEXT NOT NULL,
  queue_id INTEGER NOT NULL,
  map_id INTEGER NOT NULL,
  patch_key TEXT NOT NULL,
  role TEXT NOT NULL,
  champion_id INTEGER NOT NULL,
  ally_champion_id INTEGER NOT NULL,
  games INTEGER NOT NULL DEFAULT 0,
  wins INTEGER NOT NULL DEFAULT 0,
  losses INTEGER NOT NULL DEFAULT 0,
  remakes INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (
    region_id,
    queue_id,
    map_id,
    patch_key,
    role,
    champion_id,
    ally_champion_id
  )
);

CREATE TABLE IF NOT EXISTS riot_champion_enemy_tallies (
  region_id TEXT NOT NULL,
  queue_id INTEGER NOT NULL,
  map_id INTEGER NOT NULL,
  patch_key TEXT NOT NULL,
  role TEXT NOT NULL,
  champion_id INTEGER NOT NULL,
  enemy_champion_id INTEGER NOT NULL,
  games INTEGER NOT NULL DEFAULT 0,
  wins INTEGER NOT NULL DEFAULT 0,
  losses INTEGER NOT NULL DEFAULT 0,
  remakes INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (
    region_id,
    queue_id,
    map_id,
    patch_key,
    role,
    champion_id,
    enemy_champion_id
  )
);

CREATE TABLE IF NOT EXISTS riot_champion_item_tallies (
  region_id TEXT NOT NULL,
  queue_id INTEGER NOT NULL,
  map_id INTEGER NOT NULL,
  patch_key TEXT NOT NULL,
  role TEXT NOT NULL,
  champion_id INTEGER NOT NULL,
  item_id INTEGER NOT NULL,
  games INTEGER NOT NULL DEFAULT 0,
  wins INTEGER NOT NULL DEFAULT 0,
  losses INTEGER NOT NULL DEFAULT 0,
  remakes INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (
    region_id,
    queue_id,
    map_id,
    patch_key,
    role,
    champion_id,
    item_id
  )
);

PRAGMA optimize;
