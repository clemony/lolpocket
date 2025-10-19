<script setup lang="ts">
import type { variant } from 'valibot'

interface InputGroupButtonProps {
  class?: HTMLAttributes['class']
  shape?: ButtonVariants['shape']
  size?: InputGroupButtonVariants['size']
  variant?: ButtonVariants['variant']
}

const props = withDefaults(defineProps<InputGroupButtonProps>(), {
  size: 'xs',
  variant: 'ghost',
})
</script>

<template>
  <Button
    :data-size="props.size"
    :variant="props.variant"
    :class=" cn(inputGroupButtonVariants({ size: props.size, variant: props.variant }), props.class)">
    <slot />
  </Button>
</template>
