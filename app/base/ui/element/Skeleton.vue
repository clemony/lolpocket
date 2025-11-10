<script setup lang="ts">
interface SkeletonProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SkeletonProps>()
</script>

<template>
  <div
    :class="
      cn(
        `
          inset-shadow-5 size-full skeleton rounded-lg border border-b3 bg-b3
          !opacity-40 bg-blend-screen inset-shadow-xs
        `,
        props.class,
      )
    "
    :style="{
      backgroundSize: '400%',
    }">
    <slot />
  </div>
</template>
