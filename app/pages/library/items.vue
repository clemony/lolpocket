<script lang="ts" setup>
definePageMeta({
  title: 'Items',
  section: 'library',
})

const is = useItemStore()
const { filtered } = useItemFilter(is.itemFilter)

onMounted(() => {
  const { data } = useNuxtData<ItemIndex[]>('item-index')
  if (data.value) {
    console.log('🔁 Loaded from cache:', data.value)
  }
  else {
    console.log('📡 No cached data found for item-index')
  }
})
</script>

<template>
  <div class="size-full overflow-hidden relative">
    <ItemFilterSidebar />

    <LazyNuxtPage :filtered="filtered" />
  </div>

  <!--      <div
          class="text-1  items-center pl-3 pr-7  text-nowrap flex mt-1 "
          v-html="captions" /> -->
</template>
