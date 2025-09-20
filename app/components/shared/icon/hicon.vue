<script setup lang="ts">
const {
  name,
  class: className,
  iconScale,
} = defineProps<{
  class?: HTMLAttributes['class']
  name?: string
  iconScale?: number
}>()

const svg = /i-/
const img = /https:/
const img1 = /\/img\//
const classes = 'shrink-0 size-full'
</script>

<template>
  <component
    :is="name"
    v-if="name.match(svg)"
    role="img"
    :style="{
      objectFit: 'cover',
      scale: iconScale,
    }"
    :class="cn('', classes, className)" />
  <Img
    v-else-if="name.match(img) || name.match(img1)"
    :img="name"
    alt="icon"
    :class="cn('shrink-0', classes, className)" />
  <icon
    v-else
    role="img"
    :name="name"
    :class="cn('', classes, className)"
    :style="{
      objectFit: 'cover',
      scale: iconScale,
    }" />
</template>
