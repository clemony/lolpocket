<script lang="ts" setup>
import { navigationMenuTriggerStyle } from '../navmenuvariantindex'

const {
  class: className,
  shape,
  size,
  variant,
} = defineProps<{
  class?: HTMLAttributes['class']
  shape?: Shape
  variant?: any
  size?: ButtonVariants['size']
}>()
</script>

<template>
  <Button
    :variant
    :shape
    :size
    :class="
      cn(
        navigationMenuTriggerStyle(),
        'flex size-full flex-col items-start justify-center py-2',
        className,
      )
    ">
    <slot />
  </Button>
</template>
