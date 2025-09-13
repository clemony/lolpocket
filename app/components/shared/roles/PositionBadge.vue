<script lang="ts" setup>
import { championPositions } from '#shared/appdata'

const { class: className, position: pos } = defineProps<{
  class?: HTMLAttributes['class']
  position: string
}>()

const position = computed (() => championPositions.find(p => p.name == pos))
</script>

<template>
  <label
    :class="cn('group/btn h-9 inset-shadow-sm inset-shadow-white/20 flex rounded-lg shadow-xs drop-shadow-xs badge badge-lg !h-6.5 px-2.5  gap-3  **:text-white text-white *:dst  !font-medium items-center w-min cursor-pointer', className)"
    :style=" {
      backgroundColor: position.color,
      borderColor: position.color }">
    <slot name="1" />
    <component
      :is="`i-lol-${position.name}`"
      :class="cn('size-3.5  dst shrink-0')" />
    <slot>
      {{ position.name }}
    </slot>
  </label>
</template>