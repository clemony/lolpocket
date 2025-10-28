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
    as="button"
    v-bind="{ ...props, ...$attrs }"
    :class="cn('rounded-md flex-nowrap text-nowrap truncate w-full max-w-full overflow-hidden justify-start h-8.5 text-2 px-2 [&_svg]:size-4.5', props.class)">
    <slot />
  </Button>
</template>