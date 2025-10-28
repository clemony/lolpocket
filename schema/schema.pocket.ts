import { patchIndex } from '#shared/appdata/index/index'
import * as v from 'valibot'
import { FixedArray, getDeepDefaults, MinMaxArray } from './utils/helpers'
import { pType } from './utils/pType'

<<<<<<< HEAD
/* export interface UserPockets {
  all: Pocket[]
  archived: string[]
  pinned: string[]
} */

=======
>>>>>>> refs/remotes/origin/main
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
  d: v.fallback(v.string(), ''),
  f: v.fallback(v.string(), ''),
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
  author: v.optional(v.array(v.string())),
  comments: v.fallback(v.boolean(), false),
  champions: v.optional(v.array(v.string())),
  created: v.optional(
    v.pipe(
      v.string(),
      v.transform(s => new Date(s))
    )
  ),
  icon: v.optional(v.string()),
  items: v.optional(v.array(ItemSetSchema)),
  likes: v.fallback(v.number(), 1),
  location: PocketLocationSchema,
  main: v.optional(MainSchema), // keep required if always present
  notes: v.optional(v.array(v.string())),
  public: v.fallback(v.boolean(), false),
  roles: v.optional(v.array(v.string())),
  runes: v.optional(v.array(RuneSetSchema)),
  spells: v.optional(v.array(SpellSetSchema)),
  tags: v.optional(v.array(v.string())),
  updated: v.optional(v.number()),
})

// --- Type ---
export type Pocket = v.InferOutput<typeof PocketSchema>

// Card
export const CardSchema = v.nullable(
  v.object({
    key: v.string(),
    champion: v.string(),
    items: MinMaxArray(v.fallback(v.array(ItemSetSchema), []), 0, 4),
    runes: RuneSetSchema,

    // Style
    align: v.nullable(v.string()),
    color: v.fallback(v.string(), '#FFFFFF'),
    filter: v.fallback(
      v.union([v.literal('color'), v.literal('grayscale')]),
      'grayscale'
    ),
    font: v.strictTuple([
      v.fallback(v.string(), 'var(--font-serif)'),
      v.fallback(v.string(), 'var(--font-sans)'),
    ]),
    splash: v.nullable(v.string()),
  })
)

// --- Type ---
export type Card = v.InferOutput<typeof CardSchema>

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
    key: crypto.randomUUID(),
    name: generateName(),
    author: [as().account.puuid],
    champions: [],
    created: new Date(),
    comments: false,
    icon: '',
    items: [newItemSet()],
    likes: 1,
    location: { folder: '', pinned: false },
    main: { champion: '', items: '', role: 'All', runes: '', spells: '' },
    notes: [],
    public: false,
    roles: ['all'],
    runes: [newRuneSet()],
    spells: [newSpellSet()],
    tags: [],
    updated: patchIndex[0],
  }
}

export function newTestPocket(): Pocket{
  // ps().pockets[0].main.items = 'test'
// ps().pockets[0].items[0].id = 'test'
// ps().pockets[0].items[0].items.push(getRandom(ix().items).id)
const itemSet = computed (() => {
const a = newItemSet()
 a.items.fill(getRandom(ix().items.map(i => i.id)))
 a.name = generateName()
 a.id = crypto.randomUUID()
 return a
}).value

  return {
    key: crypto.randomUUID(),
    name: generateName(),
    author: [as().account.puuid],
    champions: [],
    created: new Date(),
    icon: '',
    items: [itemSet],
    likes: 1,
    location: { folder: '', pinned: false },
    main: { champion: '', items: '', role: 'All', runes: '', spells: '' },
    notes: [],
    public: false,
    comments: false,
    roles: ['all'],
    runes: [newRuneSet()],
    spells: [newSpellSet()],
    tags: [],
    updated: patchIndex[0],
  }
}