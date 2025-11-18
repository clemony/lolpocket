<script setup lang="ts">
const {
  base = 'btn',
  class: className,
  hover = 'btn',
  on = 'btn',
  size = '8',
  variant = 'ghost',
} = defineProps<{
  on?: ButtonVariants['on']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
  base?: ButtonVariants['base']
}>()
</script>

<template>
  <Button
    as="button"
    :class="
      cn(
        buttonVariants({ base, on, hover, size, variant }),
        `
          w-full max-w-full flex-nowrap justify-start truncate overflow-hidden
          rounded-md px-2 text-2 text-nowrap [&_svg]:size-4.5
        `,
        className,
      )
    ">
    <slot />
  </Button>
</template>
