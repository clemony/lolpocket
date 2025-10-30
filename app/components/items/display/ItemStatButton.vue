<script setup lang="ts">
import { statIndex } from '@appdata'

const { active, class: className, clear, size = '8', stat } = defineProps<{
  class?: HTMLAttributes['class']
  stat: StatIndex | string
  active?: boolean
  size?: ButtonVariants['size']
  clear?: boolean
}>()

const statValue = computed <StatIndex>(() => {
  console.log('🌱 - stat:', stat)
  if (typeof stat !== 'string')
    return stat

  return statIndex[stat]
})
</script>

<template>
  <Button
    v-if="statValue"
    :variant="active ? 'base' : 'btn'"
    :size
    hover="btn"
    :style="{
      backgroundColor: active ? statValue?.color : '',
    }"
    :class="cn('w-fit font-medium px-3 text-bc/90 capitalize shadow-xs dxs', { '  order-first text-white': active, 'pr-2': active && clear }, className)">
    {{ statValue.name }}
    <icon
      v-if="clear"
      name="x"
      class="size-4 text-white **:stroke-[2.6] " />
  </Button>
</template>