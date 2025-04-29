<script lang="ts" setup>
import type { LabelVariants } from 'components/base/label/lindex'

const props = withDefaults(
  defineProps<{
    variant?: LabelVariants['variant']
    size?: LabelVariants['size']
  }>(),
  {
    size: 'icon',
  },
)
</script>

<template>
  <Label
    :variant="props.variant"
    :size="props.size"
    class="group flex gap-4 pl-12 relative "
  >
    <icon name="fluent-mdl2:plug-disconnected" class="!size-5.5 absolute  group-hover:opacity-0 opacity-90 left-3" />
    <icon name="fluent-mdl2:plug-connected" class="!size-5.5 absolute opacity-0 group-hover:opacity-90 left-3" />
    <slot />
  </Label>
</template>

<style scoped>

</style>
