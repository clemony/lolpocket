export function newPocket(): Pocket {
  return {
    // data
    key: crypto.randomUUID(),
    name: generateName(),
    ouuid: as().account.uuid,
    uuid: as().account.uuid,

    // info
    guide: [],
    icon: '',

    //
    _champion: null,
    _items: null,
    _role: 'All',
    _runes: null,
    _spells: null,

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

    // time
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
  }
}
