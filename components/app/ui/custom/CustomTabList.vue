<script lang="ts" setup>
const props = defineProps<{
  modelValue: any
}>()
</script>

<template>
  <TabsList
    class="relative w-fit border border-b3/60 flex !rounded-field place-items-center items-center mt-4 mb-4 bg-b2/50 inset-shadow-xs shadow-warm-soft w-fit btn-lg ">
    <slot />
  </TabsList>
</template>