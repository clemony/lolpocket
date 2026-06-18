<script lang="ts" setup>
const { k, v } = defineProps<{
  k: string
  v: StatDetail
}>()
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <slot />
  </div>
</template>
