import { hexoid } from 'hexoid'

/* KEY
1. createDefaultRune
2. createDefaultShard
3. newRuneSet
4. resetRunes
5. deleteRuneSet
6. getShardClass
7. getShardIcon
8. getRunePathName
*/

export function createDefaultRune(): {
  id: number
  key: string
  icon: string
  name: string
  shortDesc: string
  longDesc: string
  tier?: number
  type?: string
  img?: string
  stats?: string
  path?: string
} {
  return {
    name: 'empty',
    id: 0,
    key: '',
    icon: '',
    shortDesc: '',
    longDesc: '',
    tier: 0,
    type: '',
    img: '/img/runes/blankRune.webp',
    stats: '',
    path: 'empty',
  }
}

export function createDefaultShard(): {
  name: string
  slotID: number
  slotName: string
  type: string
  icon: string
  stats: string
  color: string
} {
  return {
    name: 'empty',
    stats: 'h',
    slotID: 0,
    slotName: 'empty',
    type: 'h',
    icon: 'oui:shard',
    color: 'empty',
  }
}

export function newRuneSet(key?) {
  const ds = useDataStore()
  const toID = hexoid()
  const newSet = {
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
      0: createDefaultShard() as Shard,
      1: createDefaultShard() as Shard,
      2: createDefaultShard() as Shard,
    },
  }

  if (key) {
    const pocket = getPocket(key)
    pocket.runes.sets.push(newSet)

    if (pocket.runes.sets.length == 1) {
      pocket.runes.default = newSet
    }
  }
  else {
    return newSet
  }
}

export function resetRunes(pocket, set, number?) {
  const runes1 = [set.value.p1, set.value.p2, set.value.p3]

  const runes2 = [set.value.s1, set.value.s2]

  const runes = !number ? runes1.concat(runes2) : number == 1 ? runes1 : number == 2 ? runes2 : null

  runes.forEach((rune) => {
    rune = createDefaultRune()
  })
}

export function deleteRuneSet(pocket, set) {
  const a = pocket.runes.sets.findIndex(s => s.key == set.key)
  if (a != -1) {
    pocket.runes.sets.splice(a, 1)
  }
}

export function getShardClass(shard: Shard) {
  const gray = ''
  const green = 'has-checked:shadow-[0_3px_20px_#a3be8c,inset_-1px_-1px_0px_1px_#00000008] hover:shadow-[0_3px_20px_#a3be8c,inset_-1px_-1px_0px_1px_#00000008] '
  const blue = 'has-checked:shadow-[0_3px_20px_#A4C1C4,inset_-1px_-1px_0px_1px_#00000008] hover:shadow-[0_3px_20px_#A4C1C4,inset_-1px_-1px_0px_1px_#00000008] n'
  const yellow = 'has-checked:shadow-[0_3px_20px_#ebcb8b,inset_-1px_-1px_0px_1px_#00000008] hover:shadow-[0_3px_20px_#ebcb8b,inset_-1px_-1px_0px_1px_#00000008] '
  const purple = 'has-checked:shadow-[0_3px_20px_#b48dad,inset_-1px_-1px_0px_1px_#00000008] hover:shadow-[0_3px_20px_#b48dad,inset_-1px_-1px_0px_1px_#00000008]  '

  const c
    = shard.name == 'Adaptive Power'
      ? purple
      : shard.name == 'Attack Speed'
        ? yellow
        : shard.name == 'Ability Haste' || shard.name == 'Tenacity and Slow Resist' || shard.name == 'Move Speed'
          ? blue
          : shard.name == 'Scaling Health' || shard.name == 'Health'
            ? green
            : gray
  return c
}

export function getShardIconColor(shard: Shard) {
  const gray = 'text-b3 group-hover:text-b3 '
  const green = 'text-resolve  group-hover:text-resolve'
  const blue = 'text-inspiration  group-hover:text-inspiration '
  const yellow = 'text-precision  group-hover:text-precision'
  const purple = 'text-sorcery  group-hover:text-sorcery'

  const c
    = shard.name == 'Adaptive Power'
      ? purple
      : shard.name == 'Attack Speed'
        ? yellow
        : shard.name == 'Ability Haste' || shard.name == 'Tenacity and Slow Resist' || shard.name == 'Move Speed'
          ? blue
          : shard.name == 'Scaling Health' || shard.name == 'Health'
            ? green
            : gray
  return c
}

export function getShardBg(shard: Shard) {
  const gray = 'has-checked:bg-gradient-to-br from-b1/80 to-b1/20 rounded-full hover:bg-gradient-to-br'
  const green = 'has-checked:bg-gradient-to-br from-b1/80 to-resolve/20 rounded-full hover:bg-gradient-to-br'
  const blue = 'has-checked:bg-gradient-to-br from-b1/80 to-inspiration/20 rounded-full hover:bg-gradient-to-br'
  const yellow = 'has-checked:bg-gradient-to-br from-b1/80 to-precision/20 rounded-full hover:bg-gradient-to-br'
  const purple = 'has-checked:bg-gradient-to-br hover:bg-gradient-to-br  from-b1/80 to-sorcery/20 rounded-full'

  const c
    = shard.name == 'Adaptive Power'
      ? purple
      : shard.name == 'Attack Speed'
        ? yellow
        : shard.name == 'Ability Haste' || shard.name == 'Tenacity and Slow Resist' || shard.name == 'Move Speed'
          ? blue
          : shard.name == 'Scaling Health' || shard.name == 'Health'
            ? green
            : gray
  return c
}

export function getShardIcon(shard: Shard) {
  const s
    = shard.name == 'Adaptive Power'
      ? 'mdi:star-four-points'
      : shard.name == 'Attack Speed'
        ? 'mdi:axe'
        : shard.name == 'Ability Haste'
          ? 'ph:hourglass-medium-fill'
          : shard.name == 'Move Speed'
            ? 'mdi:run-fast'
            : shard.name == 'Scaling Health'
              ? 'mdi:heart-plus'
              : shard.name == 'Health'
                ? 'mdi:heart'
                : shard.name == 'Tenacity and Slow Resist'
                  ? 'ph:spiral-light'
                  : 'icomoon-free:diamonds'
  return s
}

export function getRunePathName(runeId: number, runePaths: any[]): string | null {
  for (const path of runePaths) {
    for (const slot of path.slots) {
      if (slot.runes.some(rune => rune.id === runeId)) {
        return path.name // Return the name of the path if the rune is found
      }
    }
  }
  return null // Return null if the rune isn't found in any path
}

export function resetSecondaryPath(runeSet: RuneSet) {
  runeSet.secondary.runes[1] = createDefaultRune()
  runeSet.secondary.runes[2] = createDefaultRune()
  runeSet.secondary.runes[3] = createDefaultRune()
}

export function resetPrimaryPath(runeSet: RuneSet) {
  runeSet.primary.runes[0] = createDefaultRune()
  runeSet.primary.runes[1] = createDefaultRune()
  runeSet.primary.runes[2] = createDefaultRune()
  runeSet.primary.runes[3] = createDefaultRune()
}

export function createDefaultRuneTree() {
  return {
    id: 0,
    key: 'empty',
    icon: '/img/runes/blankRune.webp',
    name: 'empty',
    slots: [
      {
        runes: [
          createDefaultRune(),
          createDefaultRune(),
          createDefaultRune(),
        ],
      },
      {
        runes: [
          createDefaultRune(),
          createDefaultRune(),
          createDefaultRune(),
        ],
      },
      {
        runes: [
          createDefaultRune(),
          createDefaultRune(),
          createDefaultRune(),
        ],
      },
      {
        runes: [
          createDefaultRune(),
          createDefaultRune(),
          createDefaultRune(),
        ],
      },
    ],
  }
}

export function setSpellbookRune() {
  const ds = useDataStore()
  const rs = useRuneStore()
  const a = ds.paths.find(p => p.name.toLowerCase() == 'inspiration')
  rs.hoveredRune = a.slots[0].runes.find(r => r.name == 'Unsealed Spellbook')
}

/*

const a = computed(() => {
  return pathDescriptions.find(path => path.name == selectedPrimary.value)
})

const b = computed(() => {
  return pathDescriptions.find(path => path.name == selectedSecondary.value)
})
 */