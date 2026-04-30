import * as v from "valibot"

// Items
export const itemSetSchema = v.object({
  id: v.pipe(v.string(), v.uuid("item set uuid malformed")),
  name: v.fallback(v.string(), ""),
  items: v.fallback(MinMaxArray(v.number(), 0, 20), [])
})

// Runes
export const runesPrimarySchema = v.object({
  path: v.fallback(v.string(), ""),
  runes: v.fallback(FixedArray(v.number(), 3), [0, 0, 0])
})

export const runesSecondarySchema = v.object({
  path: v.fallback(v.string(), ""),
  runes: v.fallback(FixedArray(v.number(), 2), [0, 0])
})

// Spells (always 2 slots)
export const spellSetSchema = v.object({
  id: v.pipe(v.string(), v.uuid("spell set uuid malformed")),
  d: v.fallback(v.number(), 0),
  f: v.fallback(v.number(), 0)
})

// Rune Set

export const runeSetSchema = v.object({
  id: v.pipe(v.string(), v.uuid("rune set uuid malformed")),
  keystone: v.nullable(v.number()),
  primary: runesPrimarySchema,
  secondary: runesSecondarySchema,
  shards: v.fallback(FixedArray(v.number(), 3), [0, 0, 0])
})

// --- Pocket Schema ---
export const pocketSchema = v.object({
  key: v.pipe(v.string(), v.uuid("pocket uuid malformed")),
  name: v.optional(v.string()),
  ouuid: v.fallback(
    v.pipe(v.string(), v.uuid("original author uuid malformed")),
    "mysterious pocket"
  ),
  uuid: v.pipe(v.string(), v.uuid("author uuid malformed")),

  //
  guide: v.nullable(v.array(v.string())),
  icon: v.fallback(v.string("icon not a string"), ""),

  // main set
  _champion: v.nullish(v.string("champion key not a string")),
  _items: v.nullish(v.pipe(v.string(), v.uuid("item set uuid malformed"))),
  _role: v.fallback(v.string("role missing"), "All"),
  _runes: v.nullish(v.pipe(v.string(), v.uuid("rune set uuid malformed"))),
  _spells: v.nullish(v.pipe(v.string(), v.uuid("spell set uuid malformed"))),

  // arrays
  champions: v.nullish(v.array(v.string())),
  items: v.nullish(v.array(itemSetSchema)),
  roles: v.nullish(v.array(v.string())),
  runes: v.nullish(v.array(runeSetSchema)),
  spells: v.nullish(v.array(spellSetSchema)),

  //
  comments: v.fallback(v.boolean(), false),
  likes: v.fallback(v.number(), 1),
  public: v.fallback(v.boolean(), false),
  tags: v.nullish(v.array(v.string())),

  //
  created: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
  updated: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
  archived_at: v.optional(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
  trashed_at: v.optional(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
  location: v.fallback(v.string(), "pockets"),
  order: v.fallback(v.number(), 0)
})

export type RuneSet = v.InferOutput<typeof runeSetSchema>

export type ItemSet = v.InferOutput<typeof itemSetSchema>
export type SpellSet = v.InferOutput<typeof spellSetSchema>
export type RunesPrimary = v.InferOutput<typeof runesPrimarySchema>
export type RunesSecondary = v.InferOutput<typeof runesSecondarySchema>
export type Pocket = v.InferOutput<typeof pocketSchema>
