<script lang="ts" setup>
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
  <div class="flex size-full oveflow-hidden">
    <menu class="overflow-hidden">
      <ItemFilterSidebar />
    </menu>

    <main class="overflow-y-auto grow relative  border-l border-l-b3/80">
      <slot :filtered="filtered" />
    </main>
  </div>

  <!--      <div
          class="text-1  items-center pl-3 pr-7  text-nowrap flex mt-1 "
          v-html="captions" /> -->
</template>
