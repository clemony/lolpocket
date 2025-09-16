<script lang="ts" setup>
const { words } = defineProps<{
  words: string
}>()
const items = computed(() => words.split(' '))
</script>

<template>
  <Motion
    v-for="(item, index) in items"
    :key="item"
    :initial="{ opacity: 0, scale: 2, x: 0, filter: 'blur(3px)' }"
    :animate="{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }"
    :transition="{
      duration: 0.6,
      delay: index * 0.1,
      ease: 'backOut',
    }"
    class="inline-block">
    {{ item }}
    <span v-if="index != items.length + 1">&nbsp;</span>
  </Motion>
</template>
