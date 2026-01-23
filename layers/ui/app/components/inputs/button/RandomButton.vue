<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button
    class="btn btn-square btn-sm size-6 rounded-md shadow-sm"
    :class="cn('relative', props.class)">
    <icon
      name="qlementine-icons:shuffle-16"
      class="size-3.5 shrink-0" />
  </button>
</template>

<style scoped></style>
