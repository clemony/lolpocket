<script setup lang="ts">
interface InputGroupButtonProps {
  variant?: ButtonVariants['variant']
  class?: HTMLAttributes['class']
  size?: InputGroupButtonVariants['size']
}

const props = withDefaults(defineProps<InputGroupButtonProps>(), {
  variant: 'ghost',
})
</script>

<template>
  <Button
    :data-size="props.size"
    :variant="props.variant"
    :class="
      cn(
        inputGroupButtonVariants({ size: props.size }),
        props.class,
      )
    ">
    <slot />
  </Button>
</template>
