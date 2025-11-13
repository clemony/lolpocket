<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: "No data.",
  },
);
</script>

<template>
  <transition-slide class="pointer-events-none relative size-full">
    <div
      v-bind="$attrs"
      class="absolute top-0 left-0 grid size-full place-items-center rounded-box bg-black/40"
    >
      <div class="badge badge-xl text-2 opacity-90 shadow-lg">
        {{ props.text }}
      </div>
    </div>
  </transition-slide>
</template>
