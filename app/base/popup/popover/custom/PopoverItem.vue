<script setup lang="ts">
const { active = 'btn', base = 'btn', class: className, hover = 'ghost', size = '8', variant = 'ghost' } = defineProps<{
  active?: ButtonVariants['active']
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
    :class="cn(buttonVariants({ base, active, hover, size, variant }), 'rounded-md flex-nowrap text-nowrap truncate w-full max-w-full overflow-hidden justify-start text-2 px-2 [&_svg]:size-4.5', className)">
    <slot />
  </Button>
</template>