<script setup>
const words = ['Beautiful', 'Smooth', 'Motion', 'Animations']
</script>

<template>
  <Motion
    v-for="(word, index) in words"
    :key="word"
    :initial="{ opacity: 0, scale: 0.3, x: -50 }"
    :animate="{ opacity: 1, scale: 1, x: 0 }"
    :transition="{
      duration: 0.6,
      delay: index * 0.1,
      ease: 'backOut',
    }"
    class="inline-block">
    {{ word }}
  </Motion>
</template>
