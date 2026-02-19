<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Separator :class="cn('my-px -ml-2 w-full scale-x-120 bg-p2', className)" />
</template>
