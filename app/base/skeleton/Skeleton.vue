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
        'skeleton size-full bg-blend-screen rounded-lg bg-b3 border-b3 inset-shadow-5 inset-shadow-xs border  !opacity-40 ',
        props.class,
      )
    "
    :style="{
      backgroundSize: '400%',
    }">
    <slot />
  </div>
</template>
