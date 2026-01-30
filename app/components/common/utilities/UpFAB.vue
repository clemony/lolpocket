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
    v-tooltip="'Top'"
    data-theme="neutral mini-tip line"
    :data-placement="placement"
    hover="neutral"
    size="c-14"
    variant="floating"
    :class="cn('duration-0!', className)"
    @click="scrollTop()"
  >
    <icon class="transition-opacity duration-200" name="arrow-up" />
  </Button>
</template>
