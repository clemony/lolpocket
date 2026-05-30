<script setup lang="ts">
import { Feedback } from "@dnd-kit/dom"
import { DragDropProvider } from "@dnd-kit/vue"
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

function onDragEnd(e: any) {}
</script>

<template>
  <div class="flex flex-1">
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
      <UDashboardPanel v-if="pocket">
        <template #header>
          <ItemsHeader />
        </template>
        <template #body>
          <ItemSets :pocket="pocket" />
        </template>
      </UDashboardPanel>
      <UDashboardPanel class="z-auto flex w-3/5 flex-col">
        <template #header>
          <PocketItemFilters />
        </template>
        <template #body>
          <LazyDraggableItemList />
        </template>
      </UDashboardPanel>
    </DragDropProvider>
  </div>
</template>
