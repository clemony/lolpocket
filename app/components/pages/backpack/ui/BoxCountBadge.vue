<script lang="ts" setup>
const { name } = defineProps<{
  name: string
}>()
console.log("🌱 - name:", name)

const box = computed(() =>
  name === "pockets"
    ? usePockets().pockets.length
    : name === "archive"
      ? usePockets().archive.length
      : name === "archive"
        ? usePockets().trash.length
        : null
)
console.log("🌱 - box:", box)
</script>

<template>
  <span v-if="box" :class="cn('ml-auto text-pc/70')">
    {{ box || 0 }}
  </span>
</template>
