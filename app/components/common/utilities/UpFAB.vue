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

    size="c"
    variant="base"
    :class="
      cn(
        `
          pointer-events-auto! z-10 size-16! cursor-pointer! bg-b1/80 shadow-sm
          shadow-black/4 backdrop-blur fx-0
          *:opacity-60
          hover:*:opacity-100
        `,
        className,
      )
    "
    @click="scrollTop()">
    <icon
      name="arrow-up"
      class="transition-opacity duration-200" />
  </Button>
</template>
