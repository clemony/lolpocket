<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    tip?: string;
  }>(),
  {
    tip: "Clear",
  },
);
</script>

<template>
  <button
    v-tippy="props.tip"
    class="btn btn-square size-6 rounded-md shadow-sm btn-sm"
  >
    <icon name="x-sm" class="size-5.5 shrink-0" />
  </button>
</template>

<style scoped></style>
