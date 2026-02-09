<script setup lang="ts">
const {
  class: className,
  placement = 'left',
} = defineProps<{
  class?: HTMLAttributes['class']
  placement?: Side
  theme?: string
}>()

const { scrollTop } = useScrollInject()
</script>

<template>
  <Tooltip
    text="Top"
    :side="placement">
    <UButton
      icon="arrow-up"
      size="xl"
      color="p0"
      rounded
      variant="solid"
      :ui="{ base: cn('bg-p0/60 backdrop-blur-md', className) }"
      @click="scrollTop()" />
  </Tooltip>
</template>
