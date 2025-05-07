<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button class="btn rounded-md btn-sm shadow-sm size-6  btn-square" :class="cn('relative', props.class)">
    <icon name="qlementine-icons:shuffle-16" class="size-3.5 shrink-0" />
  </button>
</template>

<style scoped>

</style>