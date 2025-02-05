export default function newRuneSet(key?) {
  const newSet = {
    name: `${generateRandomName()} Set`,
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
      pocket.runes.default = newSet
    }
  }
  else {
    return newSet
  }
}
