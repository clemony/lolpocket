<script lang="ts" setup>
const { name } = defineProps<{
  name: string
}>()
console.log("🌱 - name:", name)

const box = computed(() => name === "backpack")
console.log("🌱 - box:", box)
</script>

<template>
  <span v-if="box" :class="cn('ml-auto text-pc/70')">
    {{ box || 0 }}
  </span>
</template>
