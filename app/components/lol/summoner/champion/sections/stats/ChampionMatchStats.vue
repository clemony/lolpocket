<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { stats } = storeToRefs(s_champion())
console.log('🥸 - stats:', stats)
</script>

<template>
  <div :class="cn('', className)" />
</template>
