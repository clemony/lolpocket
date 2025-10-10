<script setup lang="ts">
import { SplitterPanel as ResizablePanel } from 'reka-ui'

const props = defineProps<{
  pocket: Pocket
}>()

definePageMeta({
  name: 'pocket-items',
  title: 'items',
  order: 2,
  path: '/pocket/:pocket_key/items',
  search: 'hidden',
})

const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value

const tabs = ref('items')

const tabValues = [
  {
    name: 'items',
    icon: 'bow',
    value: 'items',
  },

  {
    name: 'calculator',
    icon: 'calc',
    value: 'calculator',
  },
]
</script>

<template>
  <div
    class="w-full">
    <div
      class="bg-b1 flex  relative overflow-y-auto">
      <ItemSets :pocket="pocket" />
    </div>
    <div
      class="relative  flex flex-col z-0 justify-end">
      <PocketItemFilters />
      <LazyDraggableItemList />
    </div>
  </div>
</template>
