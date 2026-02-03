<script setup lang="ts">
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
  size?: ButtonVariants['size']
  clear?: boolean
}>()

const statValue = computed<StatIndex>(() => {
  console.log('🌱 - stat:', stat)
  if (typeof stat !== 'string') return stat

  return statIndex[stat]
})
</script>

<template>
  <Button
    v-if="statValue"
    :size
    hover="btn"
    :style="{
      backgroundColor: active ? statValue?.color : '',
    }"
    :class="
      cn(
        'text-bc/90 dxs w-fit px-3 font-medium capitalize shadow-xs',
        { 'order-first text-white': active, 'pr-2': active && clear },
        className,
      )
    "
  >
    {{ statValue.name }}
    <icon v-if="clear" class="size-4 text-white **:stroke-[2.6]" name="x" />
  </Button>
</template>
