<script lang="ts" setup>
import { runePaths } from 'appdata/records/runes'
import { motion, stagger } from 'motion-v'

const name = ref('')
const tooltip = ref('')
</script>

<template>
  <div class=" max-w-400 w-full px-10 flex flex-col justify-center gap-4">
    <div class="flex h-14 -mt-14 items-center gap-3">
      <h1 class="dst">
        {{ name }}
      </h1>
      <p class="font-medium">
        {{ tooltip }}
      </p>
    </div>
    <motion.div
      class="flex items-center  max-h-160 justify-center gap-1.5"
      :transition="{

        delayChildren: stagger(0.1),
      }">
      <motion.div
        v-for="path in runePaths"
        :key="path.name"
        :style="{
          background: `url('/img/paths/cards/${path.name.toLowerCase()}.webp')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
        }"
        class="rounded-lg cursor-pointer flex  items-center justify-center my-auto bg-center grow basis-1  max-h-140 aspect-2/3 shadow-sm drop-shadow-sm bg-black relative after:absolute overflow-hidden after:size-full after:bg-black/70 after:opacity-0 hover:after:opacity-100 hover:*:opacity-100 *:opacity-0 after:transition-all after:duration-400 after:z-1"
        @hover-start="() => {
          name = path.name
          tooltip = path.tooltip
        }"
        @hover-end="() => {
          name = ''
          tooltip = ''
        }">
        <i-lol-runes class="z-2 !text-white/20 !size-20" />
      </motion.div>
    </motion.div>
  </div>
</template>