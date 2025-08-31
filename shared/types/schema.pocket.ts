import { hexoid } from 'hexoid'
import * as v from 'valibot'
import { FixedArray, getDeepDefaults, MinMaxArray } from './schema.helpers'

const toID = hexoid()

// Location
export const PocketLocationSchema = v.object({
  pinned: v.fallback(v.boolean(), false),
  folder: v.fallback(v.string(), ''), // normalized instead of nullable
  trashed: v.pipe(v.string(), v.transform(s => new Date(s))),
})

// Items
export const ItemSetSchema = v.object({
  name: v.fallback(v.string(), ''),
  items: v.fallback(MinMaxArray(v.nullable(v.number()), 0, 20), []),
})

// Runes
export const RunesPrimarySchema = v.object({
  path: v.fallback(v.string(), ''),
  runes: v.fallback(FixedArray(v.nullable(v.number()), 3), []),
})

export const RunesSecondarySchema = v.object({
  path: v.fallback(v.string(), ''),
  runes: v.fallback(FixedArray(v.nullable(v.number()), 2), []),
})

export const ShardSchema = v.fallback(
  FixedArray(
    v.object({
      name: v.fallback(v.string(), ''),
      slot: v.fallback(v.number(), 0),
    }),
    3,
  ),
  [],
)

// Spells (always 2 slots)
export const SpellSetSchema = v.fallback(
  v.strictTuple([v.nullable(v.string()), v.nullable(v.string())]),
  [null, null],
)

// --- Types ---
export type PocketLocation = v.InferOutput<typeof PocketLocationSchema>
export type ItemSet = v.InferOutput<typeof ItemSetSchema>
export type SpellSet = v.InferOutput<typeof SpellSetSchema>
export type RunesPrimary = v.InferOutput<typeof RunesPrimarySchema>
export type RunesSecondary = v.InferOutput<typeof RunesSecondarySchema>
export type ShardSet = v.InferOutput<typeof ShardSchema>

// Rune Set

export const RuneSetSchema = v.object({
  keystone: v.nullable(v.number()),
  primary: RunesPrimarySchema,
  secondary: RunesSecondarySchema,
  shards: ShardSchema,
})

export type RuneSet = v.InferOutput<typeof RuneSetSchema>

// --- Pocket Schema ---
export const PocketSchema = v.object({
  key: v.string(),
  name: v.string(),
  icon: v.string(),
  roles: v.array(v.string()),
  champions: v.array(v.string()),
  items: v.array(ItemSetSchema),
  runes: v.array(RuneSetSchema),
  spells: v.array(SpellSetSchema),
  created: v.pipe(v.string(), v.transform(s => new Date(s))),
  updated: v.number(),
  tags: v.array(v.string()),
  location: PocketLocationSchema,
  notes: v.array(v.string()),
})

// --- Type ---
export type Pocket = v.InferOutput<typeof PocketSchema>

// Card
export const CardSchema = v.nullable(v.object({
  key: v.string(),
  champion: v.string(),
  items: MinMaxArray(v.fallback(v.array(ItemSetSchema), []), 0, 4),
  runes: RuneSetSchema,

  // Style
  splash: v.nullable(v.string()),
  align: v.nullable(v.string()),
  color: v.fallback(v.string(), '#FFFFFF'),
  filter: v.fallback(v.union([v.literal('color'), v.literal('grayscale')]), 'grayscale'),
  font: v.strictTuple([
    v.fallback(v.string(), 'var(--font-serif)'),
    v.fallback(v.string(), 'var(--font-sans)'),
  ]),

}))

// --- Type ---
export type Card = v.InferOutput<typeof CardSchema>
