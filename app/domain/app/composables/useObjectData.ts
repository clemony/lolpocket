import type { AcceptableValue } from "reka-ui"
import type { MaybeRefOrGetter } from "vue"
import type { SidebarSearchEntry } from "~/domain/app/utils/searchEntries"
import { championIndex } from "~~/shared/constants/champions/championIndex"
import { championToTitle } from "~~/shared/constants/champions/championToTitle"
import { itemRankColor } from "~~/shared/constants/items/collection/itemRankColor"
import { itemRank } from "~~/shared/constants/items/index/itemToRank"

export interface ObjectDataMap {
  ability: Ability
  champion: Champion
  item: Item
  rune: Rune
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
  spell: Spell
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

const objectDataDirectories: Record<ObjectDataType, string> = {
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

  const resolvedId = type === "champion" ? resolveChampionCdnId(id) : id
  if (!resolvedId) return null

  return `/cdn/${objectDataDirectories[type]}/${resolvedId}.json`
}

export function useObjectData<TType extends MaybeObjectDataType>(
  opt: UseObjectDataOptions<TType>
) {
  const sourceId = computed(() => normalizeId(toValue(opt.id)))
  const overrideId = shallowRef<ObjectDataId>()
  const idRef = computed(() => overrideId.value ?? sourceId.value)
  const typeRef = computed(() => toValue(opt.type))
  const path = computed(() => resolveObjectDataPath(typeRef.value, idRef.value))

  const { clear, data, execute, status } = useFetch<ObjectDataFor<TType>>(
    () => path.value ?? "",
    {
      server: false,
      lazy: true,
      immediate: false,
      key: () => path.value ?? `${typeRef.value}-empty`,
      watch: false,
      dedupe: "cancel",
    }
  )

  const subtitle = computed(() => {
    if (!data.value) return
    if (typeRef.value === "champion")
      return championToTitle[(data.value as Champion).key]
    else if (typeRef.value === "item") return itemRank[idRef.value as number]
  })

  const color = computed(() => {
    if (typeRef.value !== "item") return undefined
    return (data.value as Item).rank
      ? itemRankColor[String((data.value as Item).rank)]
      : undefined
  })

  function updateObject(newId: AcceptableValue) {
    overrideId.value = normalizeId(newId)
  }

  async function loadObject() {
    clear()
    if (!path.value) return

    await execute()
  }

  watch(sourceId, () => {
    overrideId.value = undefined
  })

  watch(path, () => loadObject(), { immediate: true })

  return {
    idRef,
    data,
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
