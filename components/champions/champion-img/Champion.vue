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
    as="label" :layout="true" :class=" cn('shadow-sm btnrelative rounded-lg **:select-none p-0', props.class)"
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
      type: 'spring' }">
    <slot />

    <div
      class="size-full overflow-hidden rounded-lg ">
      <Image
        :key="props.champion.name"

        :image="`/img/champion/${champion.id}.webp`"
        :alt="`${props.champion.name} Image`"
        class="size-full scale-115" />
    </div>
  </Motion>
</template>

<style scoped></style>
