<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text?: string
  }>(),
  {
    text: 'No data.',
  },
)
</script>

<template>
  <transition-slide class="pointer-events-none relative size-full">
    <div
      v-bind="$attrs"
      class="
        rounded-box absolute top-0 left-0 grid size-full place-items-center
        bg-black/40
      ">
      <div class="badge badge-xl text-sm opacity-90 shadow-lg">
        {{ props.text }}
      </div>
    </div>
  </transition-slide>
</template>
