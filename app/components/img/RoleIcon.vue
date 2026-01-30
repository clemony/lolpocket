<script setup lang="ts">
const { class: className, position: pos } = defineProps<{
  class?: HTMLAttributes['class']
  position: MapPosition | string | null
}>()
console.log('🌱 - p:', pos)

const position = computed(() => {
  if (typeof pos !== 'string') return pos

  return mapPositions.find(p => p.name === String(pos))
})
</script>

<template>
  <Icon
    :name="`role:${position?.name.toLowerCase()}`"
    :class="cn('size-4 shrink-0 dst', className)"
  />
</template>
