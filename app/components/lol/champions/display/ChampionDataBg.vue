<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const {
  name = 'none',
  as = 'div',
  class: className,
  opacity = 0.35,
} = defineProps<
  PrimitiveProps & {
    as?: string
    name?: string
    opacity?: number
    class?: HTMLAttributes['class']
  }
>()

const bg = [
  {
    color: 'p2',
    name: 'Charge',
  },
  {
    color: 'hp',
    name: 'Current health',
  },
  {
    color: 'energy',
    name: 'Energy',
  },
  {
    color: 'ad',
    name: 'Fury',
  },
  {
    color: 'armor',
    name: 'Grit',
  },
  {
    color: 'hp',
    name: 'Health',
  },
  {
    color: 'mana',
    name: 'Mana',
  },
  {
    color: 'mana',
    name: 'Mana / s',
  },
  {
    color: 'hp',
    name: 'Maximum health',
  },
  {
    color: 'v',
    name: 'none',
  },
]
</script>

<template>
  <Primitive
    v-bind="$attrs"
    :as="as"
    :class="cn('relative overflow-hidden bg-transparent', className)">
    <span
      class="absolute top-0 left-0 size-full border border-transparent"
      :style="{
        backgroundColor: `var(--color-${bg.find((p) => p.name === name).color})`,
        opacity,
      }" />

    <slot />
  </Primitive>
</template>
