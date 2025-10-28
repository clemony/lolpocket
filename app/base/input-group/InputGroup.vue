<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
<<<<<<< HEAD
  size?: InputGroupVariants['size']
  variant?: InputGroupVariants['variant']
  hover?: InputGroupVariants['hover']
=======
>>>>>>> refs/remotes/origin/main
}>()
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :class="cn(
<<<<<<< HEAD

      inputGroupVariants({ size, variant, hover }),
=======
      'group/input-group border-b3 inset-shadow-black/4   hover:ring hover:ring-bc/50 transition-all duration-200 relative flex w-full items-center rounded-field border inset-shadow-xs transition-[color,box-shadow] outline-none',
      'h-10 min-w-0 has-[>textarea]:h-auto',

      // Variants based on alignment.
      'has-[>[data-align=inline-start]]:[&>input]:pl-2',
      'has-[>[data-align=inline-end]]:[&>input]:pr-2',
      'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
      'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

      // Focus state.
      'has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot=input-group-control]:focus-visible]:ring-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-2 has-[[data-slot=input-group-control]:focus-visible]:ring-offset-background',

>>>>>>> refs/remotes/origin/main
      props.class,
    )">
    <slot />
  </div>
</template>
