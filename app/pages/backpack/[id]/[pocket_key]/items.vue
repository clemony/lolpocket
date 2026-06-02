<script setup lang="ts">
import { dashboardResizeHandle } from "#build/ui"
import type { DragEndEvent } from "@dnd-kit/dom"
import { Feedback } from "@dnd-kit/dom"
import { isSortable } from "@dnd-kit/dom/sortable"
import { DragDropProvider, DragOverlay } from "@dnd-kit/vue"
const props = defineProps<{
  pocket: Pocket
}>()

definePageMeta({
  title: "items",
  order: 2,
  search: false
})

const route = useRoute()
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))

const itemStore = storeToRefs(is())
const items = computed(() => itemStore.filtered.value)
const tabs = ref("items")

const tabValues = [
  {
    name: "items",
    icon: "bow",
    value: "items"
  },

  {
    name: "calculator",
    icon: "calc",
    value: "calculator"
  }
]

function onDragEnd(event: DragEndEvent) {
  /*  if (event.canceled) return

  const { source } = event.operation

  if (isSortable(source)) {
    const { initialIndex, index, initialGroup, group } = source

    if (initialGroup === group && initialGroup === "item-list")
      items = items
    else {
      // Cross-group transfer
      const sourceItems = [...items[initialGroup]]
      const [removed] = sourceItems.splice(initialIndex, 1)
      const targetItems = [...items[group]]
      targetItems.splice(index, 0, removed)
      items = { ...items, [initialGroup]: sourceItems, [group]: targetItems }
    }
  } */
}
</script>

<template>
  <div class="contents">
    <DragDropProvider
      :plugins="
        (defaults) => [
          ...defaults,
          Feedback.configure({
            dropAnimation: {
              duration: 170,
              easing: 'cubic-bezier(0.2, 0, 0, 1)'
            }
          })
        ]
      "
      @drag-end="onDragEnd($event)">
      <UDashboardPanel v-if="pocket" resizable :ui="{ body: 'px-0!' }">
        <template #header>
          <ItemsHeader />
        </template>
        <template #body>
          <ItemSets :pocket="pocket" />
        </template>
        <template #resize-handle>
          <UDashboardResizeHandle :ui="{ base: 'w-16' }">
            <USeparator color="tertiary" orientation="vertical" />
          </UDashboardResizeHandle>
        </template>
      </UDashboardPanel>
      <UDashboardPanel resizable :ui="{ body: 'px-0!' }">
        <template #header>
          <PocketItemFilters />
        </template>
        <template #body>
          <LazyDraggableItemList :items="computed(() => items)" />
        </template>
      </UDashboardPanel>
      <DragOverlay tag="div" class="absolute">
        <template #default="{ source }">
          <NuxtImg
            :src="`/img/item/${source.data.id}.webp`"
            width="70"
            height="70"
            class="rounded-lg" />
        </template>
      </DragOverlay>
    </DragDropProvider>
  </div>
</template>
