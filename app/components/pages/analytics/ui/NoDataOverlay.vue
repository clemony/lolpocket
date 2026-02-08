<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text?: string
  }>(),
  {
    text: 'No data.',
  }
)
</script>

<template>
  <transition-slide class="pointer-events-none relative size-full">
    <div
      class="absolute top-0 left-0 grid size-full place-items-center rounded-box bg-black/40"
      v-bind="$attrs">
      <div class="badge text-sm badge-xl opacity-90 shadow-lg">
        {{ props.text }}
      </div>
    </div>
  </transition-slide>
</template>
