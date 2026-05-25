import * as v from "valibot"
import { generateName } from "~/domain/pocket/helpers/generateStrings"
import { pathIndex } from "~~/shared/constants/runes/pathIndex"

// role schema
export const roleSchema = v.fallback(
  v.picklist(
    [
      "assassin",
      "mage",
      "marksman",
      "tank",
      "fighter",
      "specialist",
      "enchanter",
      "all"
    ],
    "Not a valid position!"
  ),
  "all"
)

//Position
export const positionSchema = v.fallback(
  v.picklist(
    ["top", "jungle", "mid", "bot", "support", "all"],
    "Not a valid position!"
  ),
  "all"
)

//Position
export const mapSchema = v.fallback(
  v.picklist([0, 11, 12, 30], "Not a real map!"),
  0
)

// Items
export const itemSetSchema = v.object({
  id: v.pipe(v.string(), v.uuid("item set uuid malformed")),
  name: v.fallback(v.string(), ""),
  items: v.fallback(MinMaxArray(v.number(), 0, 20), []),
  quest: v.optional(v.number(), 0)
})

// Runes

export const pathKey = v.picklist(Object.keys(pathIndex) as unknown as number[])

export const runesPrimarySchema = v.object({
  path: v.fallback(v.number(), 0),
  runes: v.fallback(FixedArray(v.number(), 3), [0, 0, 0])
})

export const runesSecondarySchema = v.object({
  path: v.fallback(v.number(), 0),
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
  okey: v.pipe(v.string(), v.uuid("pocket uuid malformed")),
  label: v.fallback(v.string(), () => generateName()),
  ouuid: v.fallback(
    v.pipe(v.string(), v.uuid("original author uuid malformed")),
    "mysterious pocket"
  ),
  uuid: v.pipe(v.string(), v.uuid("author puuid malformed")),

  //
  guide: v.nullable(v.array(v.string())),
  skin: v.fallback(v.nullable(v.string()), null),

  // main picks
  _champion: v.optional(v.string("champion key not a string")),
  _items: v.optional(v.pipe(v.string(), v.uuid("item set uuid malformed"))),
  _role: roleSchema,
  _runes: v.optional(v.pipe(v.string(), v.uuid("rune set uuid malformed"))),
  _spells: v.optional(v.pipe(v.string(), v.uuid("spell set uuid malformed"))),
  _position: positionSchema,
  _map: mapSchema,

  // arrays
  champions: v.optional(v.array(v.string())),
  items: v.optional(v.array(itemSetSchema)),
  positions: v.optional(v.array(positionSchema)),
  runes: v.optional(v.array(runeSetSchema)),
  spells: v.optional(v.array(spellSetSchema)),

  //
  comments: v.fallback(v.boolean(), false),
  likes: v.fallback(v.number(), 1),
  public: v.fallback(v.boolean(), false),
  tags: v.optional(v.array(v.string())),

  //
  created: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
  updated: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
  archived_at: v.optional(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
  trashed_at: v.optional(
    v.pipe(v.string(), v.isoTimestamp("incorrect date format"))
  ),
  location: v.fallback(v.string(), "all"),
  order: v.fallback(v.number(), 0)
})

export type RuneSet = v.InferOutput<typeof runeSetSchema>

export type ItemSet = v.InferOutput<typeof itemSetSchema>
export type SpellSet = v.InferOutput<typeof spellSetSchema>
export type RunesPrimary = v.InferOutput<typeof runesPrimarySchema>
export type RunesSecondary = v.InferOutput<typeof runesSecondarySchema>
export type Pocket = v.InferOutput<typeof pocketSchema>

export type RoleKey = v.InferOutput<typeof roleSchema>
export type PositionKey = v.InferOutput<typeof positionSchema>
export type MapKey = v.InferOutput<typeof mapSchema>
export type PathKey = v.InferOutput<typeof pathKey>

export type KeyType = RoleKey | PositionKey | MapKey | PathKey

export function asKeyType(key: string | number): KeyType {
  return key as KeyType
}
