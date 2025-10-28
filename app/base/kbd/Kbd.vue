<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
<<<<<<< HEAD
  size?: KbdVariants['size']
  variant?: KbdVariants['variant']
=======
>>>>>>> refs/remotes/origin/main
}>()
</script>

<template>
  <kbd
    :class="cn(
<<<<<<< HEAD
      kbdVariants({ size, variant }),
=======
      '  pointer-events-none inline-flex w-fit min-w-5 items-center justify-center badge !h-6 rounded-md badge-ghost gap-1 border border-b3 bg-b2/64 px-1.5 !text-[0.92rem] text-bc/60 select-none',
      '[&_svg:not([class*=\'size-\'])]:size-3',
      '[[data-slot=tooltip-content]_&]:bg-b1/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-b1/10',
>>>>>>> refs/remotes/origin/main
      props.class,
    )">
    <slot />
  </kbd>
</template>
