import { patchIndex } from 'appdata/index/index'
import { hexoid } from 'hexoid'
import * as v from 'valibot'
import { toast } from 'vue-sonner'
import { getDeepDefaults } from '../types/schema.helpers'
import { pType } from './pType'

const toID = hexoid()

// --- Pocket Factory ---

export function newRuneSet(): RuneSet {
  return {
    id: toID(),
    keystone: null,
    primary: {
      path: '',
      runes: [null, null, null],
    },
    secondary: {
      path: '',
      runes: [null, null],
    },
    shards: [
      { name: '', slot: 0 },
      { name: '', slot: 0 },
      { name: '', slot: 0 },
    ],
  }
}

export function newItemSet(): ItemSet {
  const a = getDeepDefaults(ItemSetSchema)
  a.id = toID()
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
  a.id = toID()
  return a
}

export function addSpellSet(pocket: Pocket | string) {
  const set = ref<SpellSet[]>([])
  set.value = pType(pocket).spells
  const a = getDeepDefaults(SpellSetSchema)
  a.id = toID()
  set.value.push(a)
}

export function addRuneSet(pocket: Pocket | string) {
  const set = ref<RuneSet[]>([])
  set.value = pType(pocket).runes
  const a = newRuneSet()
  a.id = toID()
  set.value.push(a)
}

export function newPocket(): Pocket {
  return {
    key: toID(),
    name: generateName(),
    icon: '',
    roles: ['all'],
    champions: [],
    items: [newItemSet()],
    runes: [newRuneSet()],
    spells: [newSpellSet()],
    main: { champion: '', items: '', runes: '', role: 'All', spells: '' },
    created: new Date(),
    updated: patchIndex[0],
    tags: [],
    location: { pinned: false, folder: '', trashed: null },
    notes: [],
  }
}

export async function generatePocket() {
  ps().pockets.push(newPocket())
}