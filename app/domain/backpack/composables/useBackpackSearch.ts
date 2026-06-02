import type { AvatarProps, GetModelValue, InputMenuItem } from "@nuxt/ui"

export interface SearchSuggestionItem {
  count?: number
  label: string
  value: string
  icon?: string
  avatar?: AvatarProps
}

export interface InputSearchReturn {
  items: SearchSuggestionItem[]
  searchTerm: ShallowRef<string | undefined>
  toggleSearch: (value?: boolean) => void
  searchVisible: Ref<boolean>
  toggle: () => void
  applySuggestion: (item: SearchSuggestionItem) => void
  clear: () => void
  focused: ComputedRef<boolean>
}
export const useBackpackSearch = () => {
  const { pockets } = storeToRefs(pocketStore())
  const { settings } = storeToRefs(user())
  const searchTerm = ref<string>("")
  const modelValue = ref<GetModelValue<InputMenuItem, string, false> | null>()
  const searchVisible = ref<boolean>(false)
  const toggleSearch = useToggle(searchVisible)

  const source = computed(() => ({
    ...settings.value?.folders,
    ...pockets.value
  }))
  const results = useSearch(source, searchTerm, {
    keys: ["label", "tag", "champions", "role"]
  })

  type PocketArrayKey<Value> = {
    [Key in keyof Pocket]-?: NonNullable<Pocket[Key]> extends Value[]
      ? Key
      : never
  }[keyof Pocket]

  type PocketStringArrayKey = PocketArrayKey<string>

  function toggle() {
    toggleSearch(false)
  }
  function mapPocketValues(
    key: PocketStringArrayKey,
    options: {
      label: (value: string) => string
      avatar?: (value: string) => AvatarProps
      icon?: (value: string) => string
    }
  ): SearchSuggestionItem[] {
    const counts = pockets.value
      .flatMap((p) => p[key] ?? [])
      .filter((value): value is string => Boolean(value))
      .reduce<Record<string, SearchSuggestionItem>>((acc, value) => {
        acc[value] ??= {
          count: 0,
          label: options.label(value),
          avatar: options.avatar?.(value),
          icon: options.icon?.(value),
          value
        }
        acc[value].count = (acc[value].count ?? 0) + 1

        return acc
      }, {})

    return Object.values(counts).sort(
      (a, b) =>
        (b.count ?? 0) - (a.count ?? 0) || a.label.localeCompare(b.label)
    )
  }

  const tagKeys = computed<SearchSuggestionItem[]>(() =>
    mapPocketValues("tags", {
      label: (tag) => tag
    })
  )

  const championKeys = computed<SearchSuggestionItem[]>(() =>
    mapPocketValues("champions", {
      label: (champion) => champNameByKey(champion) ?? champion,
      avatar: (champion) => ({
        src: `/img/champion/${champIdByKey(champion)}.webp`,
        size: "2xs"
      })
    })
  )
  const positionKeys = computed<SearchSuggestionItem[]>(() =>
    mapPocketValues("positions", {
      label: (position) => position,
      icon: (position) => `i-lp-${position}`
    })
  )

  /*   const roleKeys = computed<SearchSuggestionItem[]>(() =>
    mapPocketValues("_role", {
      label: (role) => role,
      icon: (role) => `i-lp-${role}`
    })
  ) */

  function applySuggestion(item: SearchSuggestionItem) {
    modelValue.value = item.value
  }

  const items = computed<
    {
      label: string
      ui?: Record<string, string>
    }[]
  >(() => {
    return [
      tagKeys.value.length
        ? {
            label: "Tags",
            type: "label"
          }
        : {},
      ...tagKeys.value.slice(0, 8),
      positionKeys.value.length
        ? {
            label: "Position",
            type: "label"
          }
        : {},
      ...positionKeys.value,
      championKeys.value.length
        ? {
            label: "Champion",
            type: "label"
          }
        : {},
      ...championKeys.value.slice(0, 8)
    ].filter((l) => l.label !== undefined)
  })

  return {
    searchTerm,
    modelValue,
    results,
    items,
    toggle,
    clear: () => (searchTerm.value = ""),
    applySuggestion
  }
}
