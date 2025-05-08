<script lang="ts" setup>
const { lore } = defineProps<{
lore: string
}>()
</script>

<template>
  <div class="">
    {{lore}}
  </div>
</template>