<script setup lang="ts">
  const ts = useTempStore()
  import { useScroll } from '@vueuse/core'

  const as = useAccountStore()
  const props = defineProps<{
    pocket: pocket
  }>()

  const pocket = ref(props.pocket)

  const sortItemsAZ = ref(0)
  const sortPrice = ref(0)
  const isOpen = ref(false)

  const search = ref()
  const handleSearch = computed(() => {
    ts.itemSearchResult = search.value // Update Pinia store's searchFilter
  })

  const likeText = computed(() => {
    if (as.favoriteItems.length) {
      return 'Show favorite items'
    }
    if (as.favoriteItems.length) {
      return 'No favorite items'
    }
  })
  const isFilterOpen = ref(false)
  const toggleFilter = useToggle(isFilterOpen)
</script>

<template>
  <ResizablePanelGroup
    direction="horizontal"
    class="mt-18">
    <ResizablePanel>
      <ItemsHeader />
      <ItemSets :pocket="pocket" />
    </ResizablePanel>
    <ResizableHandle
      with-handle
      class="bg-transparent bg-gradient-to-b from-transparent via-b3/60 via-20% to-transparent to-180%" />
    <ResizablePanel class="">
      <PocketHeaderMenu :pocket="pocket" />
      <PocketItemList :pocket="pocket" />
    </ResizablePanel>
  </ResizablePanelGroup>
</template>

<style></style>
