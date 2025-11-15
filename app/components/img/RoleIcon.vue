<script setup lang="ts">
import type { ChampionPosition } from '~~/shared/references'
import { championPositions } from '~~/shared/references'

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
    :class="cn('size-4 shrink-0 dst', className)" />
</template>
