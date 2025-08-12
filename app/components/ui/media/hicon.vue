<script setup lang="ts">
const { class: className, name, iconScale } = defineProps<{
  class?: HTMLAttributes['class']
  name?: string
  iconScale?: number
}>()

const svg = /i-/
const img = /https:/
const classes = 'shrink-0 size-full'
</script>

<template>
  <component
    :is="name"
    v-if="name.match(svg)"
    :style="{
      objectFit: 'cover',
      scale: iconScale,
    }"
    :class="cn('', classes, className)" />
  <Img
    v-else-if="name.match(img)"
    :img="name"
    alt="icon"
    :class="cn('shrink-0', classes, className)" />
  <icon
    v-else
    :name="name"
    :class="cn('', classes, className)"
    :style="{
      objectFit: 'cover',
      scale: iconScale,
    }" />
</template>