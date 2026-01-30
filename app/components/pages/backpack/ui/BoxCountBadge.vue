<script lang="ts" setup>
const { name } = defineProps<{
  name: string
}>()
console.log('🌱 - name:', name)

const box = computed(() =>
  name === 'pockets'
    ? ps().pockets.length
    : name === 'archive'
      ? ps().archive.length
      : name === 'archive'
        ? ps().trash.length
        : null
)
console.log('🌱 - box:', box)
</script>

<template>
  <span v-if="box" :class="cn('text-bc/70 ml-auto')">
    {{ box || 0 }}
  </span>
</template>
