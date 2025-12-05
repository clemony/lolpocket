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
const classes = 'size-full shrink-0'
const teenyicons = /teenyicons:/
const teeny = computed(() =>
  name.match(teenyicons) ? '!scale-96 **:stroke-[1.3]' : '',
)
</script>

<template>
  <component
    :is="name"
    v-if="name.match(svg)"
    role="img"
    :class="cn('', classes, className)" />
  <Img
    v-else-if="name.match(img) || name.match(img1)"
    :src="name"
    alt="icon"
    :class="cn('', classes, className)" />
  <icon
    v-else
    role="img"
    :name="name"
    :class="cn('', classes, className, teeny)"
    :style="{
      objectFit: 'cover',
      scale: iconScale,
    }" />
</template>
