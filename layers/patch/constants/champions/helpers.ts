

export function championById(id: number) {
  return championIndex.find(c => c.id === id)
}

export function championByKey(key: string) {
  return championIndex.find(c => c.key === key)
}

export function champIdByKey(key: string) {
  return championIndex.find(c => c.key === key)?.id
}

export function champIdByName(name: string) {
  return championIndex.find(c => c.name === name)?.id
}

export function champKeyById(id: number) {
  return championIndex.find(c => c.id === id)?.key
}

export function champKeyByName(name: string) {
  return championIndex.find(c => c.name === name)?.key
}

export function champNameById(id: number) {
  return championIndex.find(c => c.id === id)?.name
}

export function champNameByKey(key: string) {
  return championIndex.find(c => c.key === key)?.name
}

// abilities

export const abilityNameById = (id: string) => abilityIdToName[id]
