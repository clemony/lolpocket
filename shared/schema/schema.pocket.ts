import type { JSONContent } from '@tiptap/core'
import * as v from 'valibot'
import { patchIndex } from '../indexes'
import { FixedArray, getDeepDefaults, MinMaxArray } from './utils/helpers'
import { pType } from './utils/pType'

/* export interface UserPockets {
  all: Pocket[]
  archived: string[]
  pinned: string[]
} */

// Location
export const PocketLocationSchema = v.object({
  folder: v.fallback(v.string(), ''), // normalized instead of nullable
  pinned: v.fallback(v.boolean(), false),
  trashed: v.optional(
    v.pipe(
      v.string(),
      v.transform((s) => {
        const d = new Date(s)
        if (Number.isNaN(d.getTime()))
          throw new Error('Invalid trashed date')
        return d
      })
    )
  ),
})

// Items
export const ItemSetSchema = v.object({
  id: v.fallback(v.string(), ''),
  name: v.fallback(v.string(), ''),
  items: v.fallback(MinMaxArray(v.number(), 0, 20), []),
})

// Runes
export const RunesPrimarySchema = v.object({
  path: v.fallback(v.string(), ''),
  runes: v.fallback(FixedArray(v.number(), 3), [0, 0, 0]),
})

export const RunesSecondarySchema = v.object({
  path: v.fallback(v.string(), ''),
  runes: v.fallback(FixedArray(v.number(), 2), [0, 0]),
})

// Spells (always 2 slots)
export const SpellSetSchema = v.object({
  id: v.fallback(v.string(), ''),
  d: v.fallback(v.number(), 0),
  f: v.fallback(v.number(), 0),
})

// --- Types ---
export type PocketLocation = v.InferOutput<typeof PocketLocationSchema>
export type ItemSet = v.InferOutput<typeof ItemSetSchema>
export type SpellSet = v.InferOutput<typeof SpellSetSchema>
export type RunesPrimary = v.InferOutput<typeof RunesPrimarySchema>
export type RunesSecondary = v.InferOutput<typeof RunesSecondarySchema>
/* export type ShardSet = v.InferOutput<typeof ShardSchema> */

// Rune Set

export const RuneSetSchema = v.object({
  id: v.fallback(v.string(), ''),
  keystone: v.nullable(v.number()),
  primary: RunesPrimarySchema,
  secondary: RunesSecondarySchema,
  shards: v.fallback(FixedArray(v.number(), 3), [0, 0, 0]),
})

export type RuneSet = v.InferOutput<typeof RuneSetSchema>

// Main Set

const MainSchema = v.object({
  champion: v.fallback(v.string(), ''),
  items: v.fallback(v.string(), ''),
  role: v.fallback(v.string(), 'All'),
  runes: v.fallback(v.string(), ''),
  spells: v.fallback(v.string(), ''),
})

// --- Pocket Schema ---
export const PocketSchema = v.object({
  key: v.optional(v.string()),
  name: v.optional(v.string()),
  ouuid: v.fallback(v.string(), 'mysterious pocket'),
  uuid: v.fallback(v.string(), 'missing uuid'),

  //
  guide: v.optional(v.array(v.string())),
  icon: v.optional(v.string()),
  main: v.optional(MainSchema),

  //
  champions: v.optional(v.array(v.string())),
  items: v.optional(v.array(ItemSetSchema)),
  roles: v.optional(v.array(v.string())),
  runes: v.optional(v.array(RuneSetSchema)),
  spells: v.optional(v.array(SpellSetSchema)),

  //
  comments: v.fallback(v.boolean(), false),
  likes: v.fallback(v.number(), 1),
  public: v.fallback(v.boolean(), false),
  tags: v.optional(v.array(v.string())),
  thread: v.nullable(v.string()),

  //
  created: v.optional(v.string()),
  updated: v.optional(v.string()),
})

// --- Type ---
export type Pocket = v.InferOutput<typeof PocketSchema>

// --- Pocket Factory ---

export function newRuneSet(): RuneSet {
  return {
    id: crypto.randomUUID(),
    keystone: null,
    primary: {
      path: '',
      runes: [0, 0, 0],
    },
    secondary: {
      path: '',
      runes: [0, 0],
    },
    shards: [0, 0, 0],
  }
}

export async function generatePocket(pockets: Pocket[]) {
  pockets.push(newPocket())
}

export function newItemSet(): ItemSet {
  const a = getDeepDefaults(ItemSetSchema)
  a.id = crypto.randomUUID()
  a.name = generateName()
  return a
}

export function resetRuneSet(set: RuneSet): RuneSet {
  const id = set.id
  const a = getDeepDefaults(RuneSetSchema)
  a.id = id
  return a
}

export function newSpellSet(): SpellSet {
  const a = getDeepDefaults(SpellSetSchema)
  a.id = crypto.randomUUID()
  return a
}

export function addSpellSet(pocket: Pocket | string) {
  let set = <SpellSet[]>[]
  set = pType(pocket).spells
  const a = getDeepDefaults(SpellSetSchema)
  a.id = crypto.randomUUID()
  set.push(a)
}

export function addRuneSet(pocket: Pocket | string) {
  const p = pType(pocket)
  if (p.runes.length >= 10)
    return 'Max amount of rune sets reached!'

  let set = <RuneSet[]>[]
  set = p.runes
  const a = newRuneSet()
  a.id = crypto.randomUUID()
  set.push(a)
}

export function newPocket(): Pocket {
  return {
    // data
    key: crypto.randomUUID(),
    name: generateName(),
    ouuid: as().account.puuid,
    uuid: as().account.puuid,

    // info
    guide: [],
    icon: '',
    main: { champion: '', items: '', role: 'All', runes: '', spells: '' },

    // sets
    champions: [],
    items: [newItemSet()],
    roles: ['all'],
    runes: [newRuneSet()],
    spells: [newSpellSet()],

    // social
    comments: false,
    likes: 0,
    public: false,
    tags: [],
    thread: null,

    // time
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  }
}
// protected: false,
