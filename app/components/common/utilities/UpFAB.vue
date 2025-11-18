<script setup lang="ts">
const {
  class: className,
  placement = 'left',
  theme = 'base',
} = defineProps<{
  class?: HTMLAttributes['class']
  placement?: Side
  theme?: string
}>()

const { scrollTop } = useScrollInject()
</script>

<template>
  <Button
    v-tippy="{ content: 'Top', theme, placement, arrow: false }"

    size="c-14"
    variant="floating"
    :class="
      cn(
        className,
      )
    "
    @click="scrollTop()">
    <icon
      name="arrow-up"
      class="transition-opacity duration-200" />
  </Button>
</template>
