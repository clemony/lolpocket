<script lang="ts" setup>
const { data } = await useFetch('/api/items-lite.json')
const is = useItemStore()

const { filteredItems } = useItemFilter(Object.values(data.value) as ItemLite[], is.itemFilter)
</script>

<template>
  <div class="flex size-full oveflow-hidden">
    <menu class="overflow-hidden">
      <ItemFilterSidebar />
    </menu>
    <main class="overflow-y-auto grow relative  border-l border-l-b3/80">
      <slot :items="filteredItems" />
    </main>
  </div>
</template>