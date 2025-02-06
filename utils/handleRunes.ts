import { hexoid } from 'hexoid'

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
    const toID = hexoid()
  const newSet = {
    name: `${generateRandomName()} Set`,
    key: toID(),
    primary: {
      path: 'empty',
      keystone: createDefaultRune(),
      runes: {
        1: createDefaultRune(),
        2: createDefaultRune(),
        3: createDefaultRune(),
      },
    },

    secondary: {
      path: 'empty',
      runes: {
        1: createDefaultRune(),
        2: createDefaultRune(),
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
      pocket.runes.default = newSet.key
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

export function deleteRuneSet(pocket, index) {
  const runeSets = pocket.runes[0].runeSets
  const find = runeSets.findIndex(set => set.index == index)
  runeSets.splice(index, 1)
}

export function getShardClass(shard: Shard) {
  const gray = ['[&_svg]:text-b3 border-b3']
  const green = ['has-checked:shadow-[0_3px_20px_#a3be8c,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-resolve border-resolve']
  const blue = ['has-checked:shadow-[0_3px_20px_#A4C1C4,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-inspiration border-inspiration']
  const yellow = ['has-checked:shadow-[0_3px_20px_#ebcb8b,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-precision border-precision']
  const purple = ['has-checked:shadow-[0_3px_20px_#b48dad,inset_-1px_-1px_0px_1px_#00000008] [&_svg]:text-sorcery border-sorcery']

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
