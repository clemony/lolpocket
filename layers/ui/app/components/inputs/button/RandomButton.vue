<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <button
    class="btn btn-square size-6 rounded-md shadow-sm btn-sm"
    :class="cn('relative', props.class)">
    <icon class="size-3.5 shrink-0" name="qlementine-icons:shuffle-16" />
  </button>
</template>
