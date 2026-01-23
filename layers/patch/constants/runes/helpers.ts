

export const runeById = (id: number) => runeIndex.find(r => r.id === id)

export function runeNameById(id: number) {
  return runeIndex.find(r => r.id === id)?.name
}

export function shardById(id: number) {
  return shardObject.flatMap(s => s.shards).find(s => s.id === id)
}

export function pathColorByName(name: string) {
  return pathIndex.find(p => p.name === name)?.color
}

export function pathNameById(id: number) {
  return pathIndex.find(p => p.id === id)?.name
}
