<script lang="ts" setup>
import type { UseSidebar } from "~/domain/app/types/layout.types"
import { itemEntry } from "~/domain/app/utils/searchEntries"
import { mapToItem } from "~~/shared/constants/items/index/mapToItem"

const { item, map } = defineProps<{
  item: Item
  map?: number
}>()

const sidebar = inject<UseSidebar>("sidebar")

const filteredFrom = computedOnce<ItemComponent[]>(() => {
  if (!item?.buildsFrom) return []

  return item.buildsFrom.filter((i) =>
    typeof map === "number" ? mapToItem[map]?.includes(i.id) : true
  )
})
</script>

<template>
  <div
    class="relative mx-auto mt-5 flex w-[calc(100%-2px)] flex-col gap-1 rounded-3xl bg-nc/6! px-0.5 pt-3 pb-2 font-medium text-n5 ring ring-n3/80">
    <div
      class="absolute -top-2.5 left-2.5 z-4 text-2xs font-semibold text-nc/50">
      RECIPE
    </div>
    <div
      v-if="filteredFrom?.length"
      class="relative flex h-fit items-center gap-3 self-center">
      <template v-for="(fromItem, i) in filteredFrom" :key="i">
        <LazyUAvatar
          :src="`/img/item/${fromItem.id}.webp`"
          :alt="fromItem.name"
          size="xl"
          as="button"
          :ui="{
            root: 'pointer-events-none mb-1 rounded-full bg-n2! ring ring-n3/80 hover:ring-n5',
          }"
          :label="`${fromItem.name}  ${fromItem.gold}g`"
          @click="sidebar?.openPopover(itemEntry(fromItem.id))" />

        <LazyIcon
          v-if="item.buildsFrom?.length && i !== item.buildsFrom?.length - 1"
          class="size-3 text-nc/70 **:stroke-[14%]!"
          name="i-add" />
      </template>
    </div>
    <div
      v-if="item.gold?.base"
      class="flex items-center justify-center gap-1 px-3">
      <LazyIcon class="size-2.75 text-nc/70 **:stroke-[13%]!" name="i-add" />
      <LazyIcon
        class="size-3.5 stroke-pc/30 stroke-4 text-vanguard/90"
        name="i-lp-gold"
        alt="coin" />

      <span class="text-xs font-medium text-nc/60">{{ item.gold.base }}</span>
    </div>
  </div>
</template>
