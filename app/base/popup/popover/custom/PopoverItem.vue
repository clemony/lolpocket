<script setup lang="ts">
const { base = 'btn', class: className, hover = 'btn', on = 'btn', size = '8', variant = 'ghost' } = defineProps<{
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
    :class="cn(buttonVariants({ base, on, hover, size, variant }), 'rounded-md flex-nowrap text-nowrap truncate w-full max-w-full overflow-hidden justify-start text-2 px-2 [&_svg]:size-4.5', className)">
    <slot />
  </Button>
</template>