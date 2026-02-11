<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const {
  active,
  class: className,
  clear,
  size = 'sm',
  stat,
} = defineProps<{
  class?: HTMLAttributes['class']
  stat: StatIndex | string
  active?: boolean
  size?: ButtonProps['size']
  clear?: boolean
}>()

const statValue = computed<StatIndex | undefined>(() => {
  console.log('🌱 - stat:', stat)
  if (typeof stat !== 'string') return stat

  return statIndex[stat]
})
</script>

<template>
  <UButton
    v-if="statValue"
    :size
    hover="btn"
    :style="{
      backgroundColor: active ? statValue?.color : '',
    }"
    :class="
      cn(
        'w-fit px-3 font-medium text-pc/90 capitalize shadow-xs dxs',
        { 'order-first text-white': active, 'pr-2': active && clear },
        className,
      )
    ">
    {{ statValue.name }}
    <icon
      v-if="clear"
      class="size-4 text-white **:stroke-[2.6]"
      name="x" />
  </UButton>
</template>
