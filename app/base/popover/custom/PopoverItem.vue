<script setup lang="ts">
interface Props {
  active?: any
  class?: HTMLAttributes['class']
  hover?: any
  shape?: any
  size?: any
  variant?: any
}

const props = withDefaults(defineProps<Props>(), {
  size: 'sm',
  variant: 'ghost'
})
</script>

<template>
  <Button
    v-bind="{ ...props, ...$attrs }"
    :class="cn('rounded-md w-full justify-start px-2', props.class)">
    <slot />
  </Button>
</template>