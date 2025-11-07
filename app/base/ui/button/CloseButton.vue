<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    tip?: string
  }>(),
  {
    tip: 'Clear',
  }
)
</script>

<template>
  <button
    v-tippy="props.tip"
    class="btn rounded-md btn-sm size-6 shadow-sm btn-square">
    <icon
      name="x-sm"
      class="size-5.5 shrink-0" />
  </button>
</template>

<style scoped></style>
