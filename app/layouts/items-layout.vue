<script lang="ts" setup>
const { data, refresh, error, status, clear } = await useApiData('items-lite')
console.log('💠 - data:', data)
watch(
  () => data.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
</script>

<template>
  <div class="flex size-full">
    <ItemFilterSidebar />
    <slot />
  </div>
</template>