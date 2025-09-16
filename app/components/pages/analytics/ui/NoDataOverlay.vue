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
  <transition-slide class="pointer-events-none size-full relative">
    <div
      v-bind="$attrs"
      class="absolute top-0 left-0 size-full bg-black/40 rounded-box grid place-items-center">
      <div class="badge badge-xl text-xs shadow-lg opacity-90">
        {{ props.text }}
      </div>
    </div>
  </transition-slide>
</template>
