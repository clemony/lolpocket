import { itemRecipe } from "~~/shared/constants/items/itemRecipe"
import { mapToItem } from "~~/shared/constants/items/mapToItem"
import {
  bootIndex,
  rankToItem,
  supportItemIndex
} from "~~/shared/constants/items/rankToItem"
import { unpurchasableItems } from "~~/shared/constants/items/unpurchasableItems"

export function generateItemSet(map?: MapKey, position?: PositionKey) {
  const count = position === "support" ? 4 : position === "bot" ? 6 : 5

  const no = new Set(unpurchasableItems)
  const supp = new Set(supportItemIndex)

  const mapItems = new Set(mapToItem[map as MapKey])
  const legendary = new Set(
    rankToItem.Legendary?.filter((i) => mapItems.has(i))
  )

  const boot = new Set(bootIndex.filter((i) => mapItems.has(i)))

  const slots = legendary
    .values()
    .toArray()
    .filter((i) => !no.has(i))
    .filter((i) => !boot.has(i))
    .filter((i) => !supp.has(i))

  const boots = boot
    .values()
    .toArray()
    .filter((i) => !no.has(i))
    .filter((i) => itemRecipe[i]?.includes(1001))

  const bootItem = getRandom(boots)
  const items = sampleUnique(slots, count)

  return typeof bootItem === "number"
    ? [
        bootItem,
        position === "support" && getRandom(supportItemIndex),
        ...items
      ].filter(Boolean)
    : items
}
