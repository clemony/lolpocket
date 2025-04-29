<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  img?: string
  type?: string
  class?: HTMLAttributes['class']
}>()

const image = computed(() => {
  const img
        = props.type == 'rune'
          ? 'img/runes/RunesIcon.webp'
          : props.img
            ? props.img
            : ''
  return img
})
</script>

<template>
  <div
    :class="
      cn(
        /* b4 */ 'backdrop-blur-xs',
                 /* border */
                 'border border-b-b3 border-l-b3/60 border-r-b3 border-t-b3/60',
                 /* shadow */
                 'shadow-[0_3px_10px_rgb(0,0,0,0.2),inset_-1px_-1px_0px_1px_#00000008]',

                 /*  struct */
                 'grid size-14 shrink-0 place-items-center overflow-hidden rounded-full p-3.5 transition-all duration-300 has-checked:scale-105',
                 props.class,
      )
    "
    :style="{
      backgroundImage:
        'url(/img/ui/green-dust-and-scratches.png), linear-gradient(135deg,var(--b1) / 0.4) 50%, oklch(var(--b2)) 100%',
    }"
  >
    <img
      v-if="props.type == 'rune' || props.type == 'keystone'"
      :src="image"
      :class="
        cn(
          'size-full rounded-full opacity-40 brightness-95 drop-shadow-md grayscale peer-checked:opacity-100! peer-checked:grayscale-0!',
          { 'opacity-100 grayscale-0!': props.type == 'keystone' },
        )
      "
    />
    <slot />
  </div>
</template>

<style scoped></style>
