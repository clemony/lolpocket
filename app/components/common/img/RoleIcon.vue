<script setup lang="ts">
import type { ChampionPosition } from '#shared/appdata'
import { championPositions } from '#shared/appdata'

const { class: className, position: pos } = defineProps<{
  class?: HTMLAttributes['class']
  position: ChampionPosition | string | null
}>()
console.log('🌱 - p:', pos)

const position = computed(() => {
  if (typeof pos !== 'string')
    return pos

  return championPositions.find(p => p.name === String(pos))
})
</script>

<template>
  <component
    :is="`i-lol-${position?.name.toLowerCase()}`"
    :class="cn('size-4  dst shrink-0', className)" />
</template>