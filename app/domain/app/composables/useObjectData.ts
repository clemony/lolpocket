import type { AcceptableValue } from "reka-ui"
import type { MaybeRefOrGetter, Ref } from "vue"
import type { SidebarSearchEntry } from "~/domain/app/utils/searchEntries"
import { asItem } from "~/types/typeAssert"
import { championIndex } from "~~/shared/constants/champions/championIndex"
import { championToTitle } from "~~/shared/constants/champions/championToTitle"
import { itemRankColor } from "~~/shared/constants/items/collection/itemRankColor"
import { itemRank } from "~~/shared/constants/items/index/itemToRank"
import { spellIndex } from "~~/shared/constants/misc/spell-index"
import { runeToPath } from "~~/shared/constants/runes/runeToPath"

export type ObjectSize<T extends string = string> = "sm" | "md" | "lg"
export interface ObjectDataMap {
  ability: Ability
  champion: Champion
  item: Item
  rune: Rune
  spell: Spell
}

export type ObjectDataType = keyof ObjectDataMap
type ObjectDataId = string | number
type MaybeObjectDataType = ObjectDataType | null | undefined

export type ObjectDataFor<TType extends MaybeObjectDataType> =
  TType extends ObjectDataType ? ObjectDataMap[TType] : never

type Page = SidebarSearchEntry
// EXTENSION
export interface XObjectDataMap extends ObjectDataMap {
  champion: Champion
  page: Page
}
export type XObjectDataType = keyof XObjectDataMap
export type XMaybeObjectDataType = XObjectDataType | null | undefined
export type XObjectDataFor<TTType extends XMaybeObjectDataType> =
  TTType extends XObjectDataType ? XObjectDataMap[TTType] : never

// ----------- //*

interface UseObjectDataOptions<TType extends MaybeObjectDataType> {
  id: MaybeRefOrGetter<AcceptableValue>
  type: MaybeRefOrGetter<TType>
  map?: MaybeRefOrGetter<number | undefined>
}

type CdnObjectDataType = Exclude<ObjectDataType, "spell">

const objectDataDirectories: Record<CdnObjectDataType, string> = {
  ability: "abilities",
  champion: "champions",
  item: "items",
  rune: "runes",
}

function normalizeId(id: AcceptableValue): ObjectDataId | undefined {
  if (id === null || typeof id === "object") return undefined
  if (typeof id === "bigint") return id.toString()
  if (typeof id === "string" && isNumber(id)) return Number.parseInt(id)
  return id
}

function resolveChampionCdnId(id: ObjectDataId) {
  if (typeof id === "number") {
    return championIndex.find((entry) => entry.id === id)?.key
  }

  return championIndex.find((entry) => entry.id === Number(id))?.key ?? id
}

export function resolveObjectDataPath(
  type: MaybeObjectDataType,
  id: ObjectDataId | undefined
) {
  if (!type || id === undefined || id === "") return null
  if (type === "spell") return null

  const resolvedId = type === "champion" ? resolveChampionCdnId(id) : id
  if (!resolvedId) return null

  return `/cdn/${objectDataDirectories[type]}/${resolvedId}.json`
}

export function resolveStaticObjectData<TType extends MaybeObjectDataType>(
  type: TType,
  id: ObjectDataId | undefined
): ObjectDataFor<TType> | undefined {
  if (id === undefined || id === "") return undefined
  if (type === "spell")
    return spellIndex[Number(id)] as ObjectDataFor<TType> | undefined
}

export function useObjectData<TType extends MaybeObjectDataType>(
  opt: UseObjectDataOptions<TType>
) {
  const sourceId = computed(() => normalizeId(toValue(opt.id)))
  const overrideId = shallowRef<ObjectDataId>()
  const idRef = computed(() => overrideId.value ?? sourceId.value)
  const typeRef = computed(() => toValue(opt.type))
  const path = computed(() => resolveObjectDataPath(typeRef.value, idRef.value))
  const objectKey = computed(
    () => `${typeRef.value ?? "empty"}:${idRef.value ?? ""}`
  )

  const { clear, data, execute, status } = useFetch<ObjectDataFor<TType>>(
    () => path.value ?? "",
    {
      server: false,
      lazy: true,
      immediate: false,
      key: () => path.value ?? objectKey.value,
      watch: false,
      dedupe: "cancel",
    }
  )
  const objectData = data as Ref<ObjectDataFor<TType> | undefined>

  const subtitle = computed(() => {
    if (!data.value) return
    if (typeRef.value === "champion")
      return championToTitle[(data.value as Champion).key]
    else if (typeRef.value === "item") return itemRank[idRef.value as number]
    else if (typeRef.value === "rune")
      return pathNameById(Number(runeToPath[idRef.value as number]))
  })

  const color = computed(() => {
    if (typeRef.value === "item")
      return (data.value as Item).rank
        ? itemRankColor[String((data.value as Item).rank)]
        : undefined
    else if (typeRef.value === "rune")
      return pathColorByName(
        String(pathNameById(Number(runeToPath[idRef.value as number])))
      )
  })

  const size = computed<ObjectSize>(() => {
    if (typeRef.value === "item")
      return computed<ObjectSize>(() => {
        const flags: string[] = []
        if (asItem(data.value)?.buildsInto) flags.push("buildsInto")
        if (asItem(data.value)?.passives) flags.push("passives")
        if (asItem(data.value)?.active?.[0]) flags.push("actives")
        if (asItem(data.value)?.buildsFrom) flags.push("buildsFrom")
        return flags.length ? "lg" : "md"
      }).value
    return "md" as ObjectSize
  })

  function updateObject(newId: AcceptableValue) {
    overrideId.value = normalizeId(newId)
  }

  async function loadObject() {
    clear()
    const staticObject = resolveStaticObjectData(typeRef.value, idRef.value)
    if (staticObject) {
      objectData.value = staticObject
      status.value = "success"
      return
    }

    if (!path.value) return

    await execute()
  }

  watch(sourceId, () => {
    overrideId.value = undefined
  })

  watch(objectKey, () => loadObject(), { immediate: true })

  return {
    idRef,
    data,
    size,
    execute: loadObject,
    status,
    updateObject,
    typeRef,
    subtitle,
    color,
  }
}

export type ObjectDataReturn<
  TType extends MaybeObjectDataType = ObjectDataType,
> = ReturnType<typeof useObjectData<TType>>
