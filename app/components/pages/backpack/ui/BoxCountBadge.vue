<script lang="ts" setup>
const { name } = defineProps<{
  name: string
}>()
console.log('🌱 - name:', name)

const box = computed(() =>
  name == 'pockets'
    ? ps().pockets.filter(p => p.location.folder == '').length
    : name == 'archive'
      ? ps().pockets.filter(p => p.location.folder == 'archive').length
      : name == 'archive'
        ? ps().pockets.filter(p => p.location.folder == 'trash').length
        : null
)
console.log('🌱 - box:', box)
</script>

<template>
  <span
    v-if="box"
    :class="cn('ml-auto text-bc/70')">
    {{ box || 0 }}
  </span>
</template>
