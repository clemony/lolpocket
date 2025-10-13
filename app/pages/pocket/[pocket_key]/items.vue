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
    class="w-full flex gap-10">
    <ItemSets :pocket="pocket" />

    <div
      class="relative w-1/2 flex flex-col z-0 justify-end">
      <PocketItemFilters />
      <LazyDraggableItemList />
    </div>
  </div>
</template>
