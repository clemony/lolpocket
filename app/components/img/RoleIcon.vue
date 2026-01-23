<script setup lang="ts">
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
  <Icon
    :name="`role:${position?.name.toLowerCase()}`"
    :class="cn('dst size-4 shrink-0', className)" />
</template>
