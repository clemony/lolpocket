<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  image?: string
  class?: HTMLAttributes['class']
  imgClass?: HTMLAttributes['class']
}>()

const image = computed (() => {
  return props.image
})
</script>

<template>
  <label
    :class="cn('relative grid  shrink-0 place-items-center  size-full shadow-sm  rounded-full', props.class)"
  >
    <slot />
    <div
      class="size-full rounded-full  shrink-0  overflow-hidden "
      :style="{
        backgroundImage: `url(${image})`,
        backgroundSize: image == '/img/champion/centered/-1.webp' ? '100%' : '450%',
        backgroundPosition: 'center 20%' }"
    >
    </div>

  </label>
</template>

<style scoped></style>
