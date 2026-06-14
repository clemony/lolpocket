import { bootIndex } from "~~/shared/constants/items/collection/bootItems"
import { roleItems } from "~~/shared/constants/items/collection/roleItems"
interface QuestItemSet {
  quest?: number
  src?: string
  icon?: string
  set?: number[]
}

export function useItemDisplaySet(
  pocket: Pocket,
  position: Ref<string | null | undefined>
): ComputedRef<QuestItemSet> {
  const posAndSr = computed(() =>
    ["all", 11].includes(pocket._map) && position.value === "bot"
      ? true
      : ["all", 11].includes(pocket._map)
        ? "sr"
        : false
  )

  const num = computed(() => (posAndSr.value === true ? 7 : 6))
  const fill = (i?: number[] | undefined | null) => {
    const newArray = Array.from({ length: num.value }).fill(0) as number[]
    return !i ? newArray : i
  }
  const set = computed<number[]>(() => {
    if (!pocket.items?.length) return fill()
    if (pocket._items)
      return pocket.items.find((set) => set.id === pocket._items)
        ?.items as number[]
    else if (pocket.items[0]?.items?.length) return pocket.items[0]?.items
    return fill()
  })

  function roleItemId() {
    const item = roleItems[position.value as keyof typeof roleItems]
    return Array.isArray(item) ? (item[0] ?? 0) : (item ?? 0)
  }

  const botQuest = computed<QuestItemSet | undefined>(() => {
    if (posAndSr.value !== true) return
    const boot = new Set(bootIndex)
    const boots = set.value
      ? set.value.filter((set) => boot.has(set))[0]
      : undefined

    const items = set.value.filter((set) => !boot.has(set))
    items.length = 6
    return {
      quest: boots || roleItemId() || 0,
      src: boots ? `/img/item/${boots}.webp` : "/img/role/bot.webp",
      icon: "i-lp-bot",
      set: items
    }
  })

  return computed<QuestItemSet>(() => {
    if (posAndSr.value === true) {
      if (botQuest.value) return botQuest.value
    }
    const items = set.value
    items.length = 6
    if (posAndSr.value === "sr")
      return {
        quest: roleItemId() ?? 0,
        icon: `i-lp-${position.value || "all"}`,
        src: "", //position.value ? `/img/role/${position.value}.webp` : "",
        set: items
      }
    return {
      quest: 0,
      src: "",
      icon: `i-lp-${pocket._map || 0}`,
      set: items
    }
  })
}
