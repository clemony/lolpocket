import { patchIndex } from 'appdata/index/index'
import { hexoid } from 'hexoid'
import * as v from 'valibot'
import { toast } from 'vue-sonner'
import { getDeepDefaults } from '../types/schema.helpers'

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

export function newPocket(): Pocket {
  return {
    key: toID(),
    name: generateName(),
    icon: '',
    roles: ['all'],
    champions: [],
    items: [newItemSet()],
    runes: [newRuneSet()],
    spells: [[null, null]],
    main: { champion: '', items: '', runes: '', role: 'All', spells: [] },
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