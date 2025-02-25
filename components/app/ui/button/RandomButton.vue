<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button variant="ghost" size="icon" class=" btn size-6 btn-xs aspect-square  group" :class="cn('relative', props.class)">
    <icon name="qlementine-icons:shuffle-16" class="size-3.5 shrink-0" />
  </button>
</template>

<style scoped>

</style>