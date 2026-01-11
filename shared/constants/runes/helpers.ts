import { pathIndex, runeIndex } from "#shared"
import { shardObject } from "~~/shared/records/shards"

export const runeById = (id: number) => runeIndex.find((r) => r.id === id)

export const runeNameById = (id: number) =>
  runeIndex.find((r) => r.id === id)?.name

export const shardById = (id: number) =>
  shardObject.flatMap((s) => s.shards).find((s) => s.id === id)

export const pathColorByName = (name: string) =>
  pathIndex.find((p) => p.name === name)?.color

export const pathNameById = (id: number) =>
  pathIndex.find((p) => p.id === id)?.name
