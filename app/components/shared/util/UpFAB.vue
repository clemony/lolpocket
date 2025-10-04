<script setup lang="ts">
const { class: className, placement = 'left', theme = 'base' } = defineProps<{
  class?: HTMLAttributes['class']
  placement?: Side
  theme?: string
}>()

const { scrollTop } = useScrollInject()
</script>

<template>
  <Button
    v-tippy="{ content: 'Top', theme, placement, arrow: false }"
    size="xl"
    shape="circle"
    variant="outline"
    :class="cn('fab z-10 bg-b1/80 bottom-24 right-24 *:opacity-40 hover:*:opacity-100 !cursor-pointer !pointer-events-auto !size-16 backdrop-blur shadow-sm shadow-black/4', className)"
    @click="scrollTop()">
    <icon
      name="arrow-up"
      class="transition-opacity duration-200" />
  </Button>
</template>