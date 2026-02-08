<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    tip?: string
  }>(),
  {
    tip: "Clear",
  }
)
</script>

<template>
  <button
    v-tippy="props.tip"
    class="btn btn-square size-6 rounded-md shadow-sm btn-sm">
    <icon class="size-5.5 shrink-0" name="x-sm" />
  </button>
</template>
