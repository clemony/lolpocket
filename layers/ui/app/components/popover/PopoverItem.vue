<script setup lang="ts">
const {
  variant = 'ghost',

  class: className,

  size = '8',
} = defineProps<{

  class?: HTMLAttributes['class']

  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}>()
</script>

<template>
  <Button
    as="button"
    :class="
      cn(

        `
          w-full max-w-full flex-nowrap justify-start truncate overflow-hidden
          rounded-md px-2 text-sm text-nowrap [&_svg]:size-4.5
        `,
        className,
      )
    ">
    <slot />
  </Button>
</template>
