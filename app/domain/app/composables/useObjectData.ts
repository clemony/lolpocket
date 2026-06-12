import type { AcceptableValue } from "reka-ui"
import type { MaybeRefOrGetter } from "vue"
import { championIndex } from "~~/shared/constants/champions/championIndex"

interface ObjectDataMap {
  ability: Ability
  champion: Champion
  item: Item
  rune: Rune
}

export type ObjectDataType = keyof ObjectDataMap
type ObjectDataId = string | number
type Onnfdi = ValuesOf<ObjectDataMap>
interface UseObjectDataOptions<TType extends ObjectDataType> {
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
  type: ObjectDataType,
  id: ObjectDataId | undefined
) {
  if (id === undefined || id === "") return null

  const resolvedId = type === "champion" ? resolveChampionCdnId(id) : id
  if (!resolvedId) return null

  return `/cdn/${objectDataDirectories[type]}/${resolvedId}.json`
}

export function useObjectData<TType extends ObjectDataType>(
  opt: UseObjectDataOptions<TType>
) {
  const sourceId = computed(() => normalizeId(toValue(opt.id)))
  const overrideId = shallowRef<ObjectDataId>()
  const idRef = computed(() => overrideId.value ?? sourceId.value)
  const typeRef = computed(() => toValue(opt.type))
  const path = computed(() => resolveObjectDataPath(typeRef.value, idRef.value))

  const { clear, data, execute, status } = useFetch<ObjectDataMap[TType]>(
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
  }
}

export type ObjectDataReturn<TType extends ObjectDataType = ObjectDataType> =
  ReturnType<typeof useObjectData<TType>>
