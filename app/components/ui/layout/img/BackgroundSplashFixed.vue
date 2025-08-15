<script setup lang="ts">
import { motion } from 'motion-v'

const { class: className, background } = defineProps<{
  class?: HTMLAttributes['class']
  background: string
}>()

const img = useImage()

const bgClass = computed (() => `before:bg-url('${img(background)}')`)
</script>

<template>
  <motion.div
    :style="{
      backgroundImage: `url('${img(background)}')`,
    }"
    :class="cn('inset-0 right-0 top-0 fixed isolate bg-fixed bg-no-repeat  bg-position-[160%_-3%]  bg-size-[80%] mask-l-from-30% mask-l-to-60%',
               'before:size-full before:absolute before:z-1 before:bg-linear-to-r  before:from-[color-mix(in_oklab,var(--color-b2)_60%,white_40%)]  before:from-45%   before:to-75% before:to-transparent h-[293px]',
    )" />
</template>