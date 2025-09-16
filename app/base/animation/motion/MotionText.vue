<script setup>
import { computed, ref } from 'vue'

const animationKey = ref(0)
const isContinuous = ref(false)

const words = ['Beautiful', 'Smooth', 'Motion', 'Animations']
const text = 'Powered by Motion-Vue'
const characters = computed(() => text.split(''))

function triggerAnimation() {
  animationKey.value++
}

function toggleContinuous() {
  isContinuous.value = !isContinuous.value
}
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
    <div class="max-w-4xl mx-auto text-center space-y-8 mt-22">
      <!-- Main animated text -->
      <Motion
        :initial="{ opacity: 0, scale: 0.5, x: -100 }"
        :animate="{ opacity: 1, scale: 1, x: 0 }"
        :transition="{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }"
        class="text-6xl font-bold mb-8">
        Welcome
      </Motion>

      <!-- Staggered word animation -->
      <div class="flex flex-wrap justify-center gap-4 text-xsxl text-gray-300">
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
      </div>

      <!-- Character-by-character animation -->
      <div class="text-xl text-blue-400 font-mono">
        <Motion
          v-for="(char, index) in characters"
          :key="`${char}-${index}`"
          :initial="{ opacity: 0, scale: 0, x: -20, rotateZ: -180 }"
          :animate="{ opacity: 1, scale: 1, x: 0, rotateZ: 0 }"
          :transition="{
            duration: 0.4,
            delay: index * 0.05,
            type: 'spring',
            stiffness: 200,
          }"
          class="inline-block">
          {{ char === " " ? "\u00A0" : char }}
        </Motion>
      </div>

      <!-- Interactive controls -->
      <div class="flex gap-4 justify-center mt-12">
        <Motion
          :while-hover="{ scale: 1.05 }"
          :while-tap="{ scale: 0.95 }"
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 2 }">
          <button
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            @click="triggerAnimation">
            Replay Animation
          </button>
        </Motion>

        <Motion
          :while-hover="{ scale: 1.05, rotate: 5 }"
          :while-tap="{ scale: 0.95 }"
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ delay: 2.2 }">
          <button
            class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
            @click="toggleContinuous">
            {{ isContinuous ? "Stop" : "Continuous" }}
          </button>
        </Motion>
      </div>

      <!-- Floating elements -->
      <Motion
        v-for="i in 5"
        :key="`float-${i}`"
        :initial="{ opacity: 0, scale: 0 }"
        :animate="{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          x: [0, Math.random() * 200 - 100],
          y: [0, Math.random() * 200 - 100],
        }"
        :transition="{
          duration: 3,
          delay: i * 0.5,
          repeat: isContinuous ? Infinity : 0,
          repeatDelay: 2,
        }"
        class="absolute w-2 h-2 bg-blue-400 rounded-full"
        :style="{
          left: `${20 + i * 15}%`,
          top: `${30 + i * 10}%`,
        }" />
    </div>
  </div>
</template>

<style scoped>
.absolute {
  position: absolute;
}
</style>
