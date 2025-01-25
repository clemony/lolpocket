import { hexoid } from 'hexoid'

export default function newRuneSet(key?) {
  const shard = createDefaultShard() as Shard
  const toID = hexoid()
  const newSet = {
    key: toID(),
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
    pocket.runes[0].runeSets.push(newSet)
  }
  else {
    return newSet
  }
}
