<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { stats } = storeToRefs(sChampion())
console.log("🥸 - stats:", stats)
</script>

<template>
  <UPageSection title="Match" :class="cn('', className)" />
</template>
