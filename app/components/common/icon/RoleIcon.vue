<script setup lang="ts">
const { class: className, position: pos } = defineProps<{
  class?: HTMLAttributes["class"]
  position: MapPosition | string | null
}>()

const position = computed(() => {
  if (typeof pos !== "string") return pos

  return mapPositions.find((p) => p.label === String(pos))
})
</script>

<template>
  <Icon
    :name="`i-role-${position?.label.toLowerCase()}`"
    :class="cn('size-4 shrink-0 dst', className)" />
</template>
