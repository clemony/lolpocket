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
    class="size-full z-auto pt-22 min-h-screen">
    <div class="flex w-full z-auto gap-16">
      <div class="w-2/5 z-auto">
        <ItemsHeader />
        <div class=" sticky z-2 -top-44 self-start w-full">
          <div class="max-h-[calc(100vh-5.5rem)] pr-2 overflow-x-visible scrollbar-none overflow-y-auto">
            <ItemSets :pocket="pocket" />
          </div>
        </div>
      </div>
      <div
        class=" w-3/5 flex flex-col z-auto ">
        <PocketItemFilters />
        <LazyDraggableItemList />
      </div>
    </div>
  </div>
</template>
