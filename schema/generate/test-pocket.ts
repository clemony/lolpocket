import { patchIndex } from '#shared/appdata/index/index'


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
    roles: ['all'],
    runes: [newRuneSet()],
    spells: [newSpellSet()],
    tags: [],
    updated: patchIndex[0],
  }
}