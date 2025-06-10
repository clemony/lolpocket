// date

export function createDateObject() {
  const now = new Date()
  const patch = useDataStore().currentPatch

  const date = now.toLocaleDateString("en-US", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  })
  const time = now
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .replace(/^0/, "") // remove leading zero if present
  return { date, time, patch }
}

// item

export async function newItemSet(pocketKey?: string) {
  const newSet = {
    name: generateName(),
    items: [],
  }

  if (pocketKey) {
    const pocket = getPocket(pocketKey)
    if (pocket) {
      pocket.items.push(newSet)
    }
  }

  return newSet
}

// shard

export function createDefaultShard(): ShardIndex {
  return {
    slot: 0,
    name: null,
  }
}

// runeset

export function newRuneSet(pocketKey?: string) {
  const newSet: RuneSet = {
    keystone: null,
    0: {
      path: "Precision",
      runes: {
        1: null,
        2: null,
        3: null,
      },
    },
    1: {
      path: "Inspiration",
      runes: {
        1: null,
        2: null,
        3: null,
      },
    },
    shards: {
      1: null,
      2: null,
      3: null,
    },
  }
  if (pocketKey) {
    const pocket = getPocket(pocketKey)
    if (pocket) {
      pocket.runes.push(newSet)
    }
  }
  return newSet
}

// spell

export function createDefaultSpell(): Spell {
  return {
    name: null,
    id: 0,
    description: null,
    cd: 0,
    recharge: 0,
    charges: 0,
  }
}

export function newSpellSet(key?) {
  const newSet: SpellSet = [null, null]

  if (key) {
    const pocket = getPocket(key)
    pocket.spells.push(newSet)
  } else {
    return newSet
  }
}
