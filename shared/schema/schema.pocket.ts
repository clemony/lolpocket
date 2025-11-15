import * as v from "valibot"
import { FixedArray, getDeepDefaults, MinMaxArray } from "./utils/helpers"
import { pType } from "./utils/pType"

// Items
export const ItemSetSchema = v.object({
  id: v.pipe(v.string(), v.uuid("item set uuid malformed")),
  name: v.fallback(v.string(), ""),
  items: v.fallback(MinMaxArray(v.number(), 0, 20), []),
})

// Runes
export const RunesPrimarySchema = v.object({
  path: v.fallback(v.string(), ""),
  runes: v.fallback(FixedArray(v.number(), 3), [0, 0, 0]),
})

export const RunesSecondarySchema = v.object({
  path: v.fallback(v.string(), ""),
  runes: v.fallback(FixedArray(v.number(), 2), [0, 0]),
})

// Spells (always 2 slots)
export const SpellSetSchema = v.object({
  id: v.pipe(v.string(), v.uuid("spell set uuid malformed")),
  d: v.fallback(v.number(), 0),
  f: v.fallback(v.number(), 0),
})

// Rune Set

export const RuneSetSchema = v.object({
  id: v.pipe(v.string(), v.uuid("rune set uuid malformed")),
  keystone: v.nullable(v.number()),
  primary: RunesPrimarySchema,
  secondary: RunesSecondarySchema,
  shards: v.fallback(FixedArray(v.number(), 3), [0, 0, 0]),
})

export type RuneSet = v.InferOutput<typeof RuneSetSchema>

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
  icon: v.nullable(v.string("icon not a string")),

  // main set
  _champion: v.nullish(v.string("champion key not a string")),
  _items: v.fallback(
    v.pipe(v.string(), v.uuid("item set uuid malformed")),
    null
  ),
  _role: v.fallback(v.string("role missing"), "All"),
  _runes: v.fallback(
    v.pipe(v.string(), v.uuid("rune set uuid malformed")),
    null
  ),
  _spells: v.fallback(
    v.pipe(v.string(), v.uuid("spell set uuid malformed")),
    null
  ),

  // arrays
  champions: v.nullish(v.array(v.string())),
  items: v.nullish(v.array(ItemSetSchema)),
  roles: v.nullish(v.array(v.string())),
  runes: v.nullish(v.array(RuneSetSchema)),
  spells: v.nullish(v.array(SpellSetSchema)),

  //
  comments: v.fallback(v.boolean(), false),
  likes: v.fallback(v.number(), 1),
  public: v.fallback(v.boolean(), false),
  tags: v.nullish(v.array(v.string())),

  //
  created: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
  updated: v.pipe(v.string(), v.isoTimestamp("incorrect date format")),
})

// --- Types ---
export type ItemSet = v.InferOutput<typeof ItemSetSchema>
export type SpellSet = v.InferOutput<typeof SpellSetSchema>
export type RunesPrimary = v.InferOutput<typeof RunesPrimarySchema>
export type RunesSecondary = v.InferOutput<typeof RunesSecondarySchema>
export type Pocket = v.InferOutput<typeof pocketSchema>
