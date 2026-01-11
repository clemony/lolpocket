import { abilityIdToName } from "~~/shared/constants/champions/ability-id-to-name"

export const championById = (id: number) =>
  championIndex.find((c) => c.id === id)

export const championByKey = (key: string) =>
  championIndex.find((c) => c.key === key)

export const champIdByKey = (key: string) =>
  championIndex.find((c) => c.key === key)?.id

export const champIdByName = (name: string) =>
  championIndex.find((c) => c.name === name)?.id

export const champKeyById = (id: number) =>
  championIndex.find((c) => c.id === id)?.key

export const champKeyByName = (name: string) =>
  championIndex.find((c) => c.name === name)?.key

export const champNameById = (id: number) =>
  championIndex.find((c) => c.id === id)?.name

export const champNameByKey = (key: string) =>
  championIndex.find((c) => c.key === key)?.name

// abilities

export const abilityNameById = (id: string) => abilityIdToName[id]
