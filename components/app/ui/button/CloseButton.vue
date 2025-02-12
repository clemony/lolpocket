<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    tip?: string
  }>(),
  {
    tip: 'Clear',
  },
)
</script>

<template>
  <button v-tippy="props.tip" variant="ghost" size="icon" class="btn btn-xs size-6  aspect-square">
    <icon name="x" class="size-3 shrink-0" />
  </button>
</template>

<style scoped>

</style>