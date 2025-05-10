import { hexoid } from 'hexoid'

// date

export function createDateObject() {
  const now = new Date()
  const patch = useDataStore().currentPatch

  const date = now.toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })

  const time = now
    .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    .replace(/^0/, '') // remove leading zero if present

  return { date, time, patch }
}

// item

export function createItem(): ItemIndex {
  return { name: '', id: 0 }
}

export function newItemSet(pocketKey?: string, setName?: string) {
  const toID = hexoid()
  const newSet = {
    name: setName || `${generateMediumString()} Set`,
    key: toID(),
    items: [],
  }

  if (pocketKey) {
    const pocket = getPocket(pocketKey)
    if (pocket) {
      pocket.items.sets.push(newSet)
      if (pocket.items.sets.length === 1) {
        pocket.items.default = newSet
      }
    }
  }

  return newSet
}
// rune

export function createDefaultRune(): RuneIndex {
  return {
    name: 'empty',
    id: 0,
    key: '',
  }
}

// shard

export function createDefaultShard(): ShardIndex {
  return {
    slotID: 0,
    slotName: 'empty',
  }
}

// runeset

export function newRuneSet(pocketKey?: string) {
  const toID = hexoid()

  const newSet: RuneSet = {
    name: `${generateMediumString()} Set`,
    key: toID(),
    primary: {
      path: 'Resolve',
      runes: {
        0: createDefaultRune(),
        1: createDefaultRune(),
        2: createDefaultRune(),
        3: createDefaultRune(),
      },
    },
    secondary: {
      path: 'Inspiration',
      runes: {
        1: createDefaultRune(),
        2: createDefaultRune(),
        3: createDefaultRune(),
      },
    },
    shards: {
      0: createDefaultShard(),
      1: createDefaultShard(),
      2: createDefaultShard(),
    },
  }

  if (pocketKey) {
    const pocket = getPocket(pocketKey)
    if (pocket) {
      pocket.runes.sets.push(newSet)
      if (pocket.runes.sets.length === 1) {
        pocket.runes.default = newSet
      }
    }
  }

  return newSet
}

// spell

export function createDefaultSpell(): Spell {
  return {
    name: null,
    description: null,
    cd: 0,
    recharge: 0,
    charges: 0,
  }
}

// champion

export function createDefaultChampion(): ChampionIndex {
  return {
    id: 0,
    key: '',
    name: '',
  }
}