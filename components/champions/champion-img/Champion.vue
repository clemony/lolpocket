<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  champion: Champion
  pocket?: pocket
  class?: HTMLAttributes['class']
}>()
/*
      v-tippy="{content: `${champion.name}`, hideOnClick: true,   delay: [100, 0]}" */
</script>

<template>
  <Motion
    as-child :layout="true"
    :initial="{
      scale: 0.8,
      opacity: 0,
    }"
    :animate="{ scale: 1, opacity: 1 }"
    :exit="{
      scale: [1.6, 0.8],
      opacity: 0,
    }"
    :transition="{
      type: 'ease-in-out' }">
    <label :class=" cn('shadow-sm btn relative rounded-lg **:select-none p-0', props.class)">
      <slot />

      <div
        class="size-full overflow-hidden rounded-lg ">
        <Image
          :key="props.champion.name"

          :image="`/img/champion/${champion.id}.webp`"
          :alt="`${props.champion.name} Image`"
          class="size-full scale-115" />
      </div>
    </label>
  </Motion>
</template>

<style scoped></style>
