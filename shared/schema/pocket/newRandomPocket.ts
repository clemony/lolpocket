import { championPositions, skinIndex, spellbook } from '~~/shared'
import { runePaths } from '~~/shared/records/runes'

export function newRandomPocket(): Pocket {
  const itemSet = computed(() => {
    const a = newItemSet()
    const i = ix().items.map(i => i.id)
    a.items = [
      getRandom(i),
      getRandom(i),
      getRandom(i),
      getRandom(i),
      getRandom(i),
      getRandom(i),
    ]
    return a
  }).value

  const runeSet = computed(() => {
    const a = newRuneSet()

    const i1 = getRandomInt(5)
    const i2 = getRandomInt(4)
    const set = [1, 2, 3].filter(n => n !== getRandomInt[3] + 1)

    const path1 = runePaths[i1]
    const path2 = runePaths.filter(p => p.id !== path1.id)[i2]

    a.primary.path = path1.name
    a.keystone = getRandom(path1.slots[0].runes.map(k => k.id))
    a.primary.runes = [
      getRandom(path1.slots[1].runes.map(k => k.id)),
      getRandom(path1.slots[2].runes.map(k => k.id)),
      getRandom(path1.slots[3].runes.map(k => k.id)),
    ]
    a.secondary.path = path2.name
    a.secondary.runes = [
      getRandom(path2.slots[set[0]].runes.map(k => k.id)),
      getRandom(path2.slots[set[1]].runes.map(k => k.id)),
    ]
    return a
  }).value

  const champion = getRandom(ix().champions.map(c => c.key))
  const spellSet = computed(() => {
    const a = newSpellSet()
    const b = getRandom(Object.values(spellbook).map(s => s.id))
    a.d = b
    a.f = getRandom(
      Object.values(spellbook)
        .map(s => s.id)
        .filter(s => s !== b)
    )
    return a
  }).value

  const role = getRandom(championPositions.map(p => p.name))
  const icon = computed(() => {
    const a = skinIndex[getRandomInt(skinIndex.length)]
    const b = a[getRandomInt(a.length)]
    return getSplash(getKeyByValue(skinIndex, a), 'tile', b)
  })
  return {
    guide: [],
    key: crypto.randomUUID(),
    name: generateName(),
    ouuid: as().account.uuid,
    uuid: as().account.uuid,
    icon: '',

    //
    _champion: champion,
    _items: itemSet.id,
    _role: role,
    _runes: runeSet.id,
    _spells: spellSet.id,

    // sets
    champions: [champion],
    items: [itemSet],
    roles: [role],
    runes: [runeSet],
    spells: [spellSet],

    // social
    comments: false,
    likes: 0,
    public: false,
    tags: [],

    // time
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  }
}
