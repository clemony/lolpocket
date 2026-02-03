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
    :side="placement"
  >
    <UButton
      icon="arrow-up"
      size="xl"
      square
      variant="solid"
      :class="cn('rounded-full', className)"
      @click="scrollTop()"
    />
  </Tooltip>
</template>
