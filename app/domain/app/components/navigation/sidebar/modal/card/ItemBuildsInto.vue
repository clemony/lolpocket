<script lang="ts" setup>
import type { UseSidebar } from "~/domain/app/types/layout.types"
import { itemEntry } from "~/domain/app/utils/searchEntries"
import { mapToItem } from "~~/shared/constants/items/index/mapToItem"

const { item, map } = defineProps<{
  item: Item
  map?: number
}>()

const sidebar = inject<UseSidebar>("sidebar")
const filteredInto = computed<ItemComponent[]>(() => {
  if (!item?.buildsInto) return []

  return item.buildsInto.filter((i) =>
    typeof map === "number" ? mapToItem[map]?.includes(i.id) : true
  )
})
</script>

<template>
  <div
    class="group relative mx-auto mt-5 grid w-[calc(100%-2px)] max-w-full grid-cols-[repeat(auto-fill,minmax(32px,1fr))] grid-rows-[repeat(auto-fill,minmax(32px,1fr))] items-center justify-start gap-1 rounded-3xl bg-nc/6! p-3 font-medium text-n5 ring ring-n3/80">
    <div
      class="absolute -top-2.5 left-2.5 z-4 text-2xs font-semibold text-nc/50">
      BUILDS INTO
    </div>

    <button
      v-for="(buildItem, i) in filteredInto"
      :key="i"
      @click="sidebar?.openPopover(itemEntry(buildItem.id))">
      <LazyAvatar
        :id="buildItem.id"
        as="button"
        size="lg"
        draggable="false"
        :tooltip="{
          arrow: true,
        }"
        :label="`${buildItem.name} ‑ ${buildItem.gold}g`"
        :src="`/img/item/${buildItem.id}.webp`"
        :alt="buildItem.name"
        :ui="{
          root: 'pointer-events-none rounded-full! bg-n2 ring ring-nc/10 select-none hover:ring-offset-1 hover:ring-offset-nc/30',
        }"
        @click.stop.prevent />
    </button>
  </div>
</template>
