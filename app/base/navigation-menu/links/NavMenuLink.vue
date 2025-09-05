<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '/base/navigation-menu/navmenuvariantindex'

const { class: className, variant, size, shape } = defineProps<{
  class?: HTMLAttributes['class']
  shape?: Shape
  variant?: any
  size?: Size
}>()
</script>

<template>
  <Button
    :variant
    :shape
    :size
    :class="cn(navigationMenuTriggerStyle(), 'flex flex-col justify-center size-full items-start py-2', className)">
    <slot />
  </Button>
</template>