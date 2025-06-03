<script lang="ts" setup>
import type { PrimitiveProps } from 'reka-ui'
import { Primitive } from 'reka-ui'

const {as = "div", class: className, name = "none", opacity = 0.35} = defineProps<PrimitiveProps &  {
as?: string,
name?: string
opacity?: number
class?: HTMLAttributes['class']
}>()

const bg = [
  {
    name: 'Charge',
    color: 'b2',
    
  },
  {
    name: 'Current health',
    color: 'hp',
    
  },
  {
    name: 'Energy',
    color: 'energy',
    
  },
  {
    name: 'Fury',
    color: 'ad',
    
  },
  {
    name: 'Grit',
    color: 'armor',

  },
  {
    name: 'Health',
    color: 'hp',
    
  },
  {
    name: 'Mana',
    color: 'mana',
    
  },
  {
    name: 'Mana / s',
    color: 'mana',
    
  },
  {
    name: 'Maximum health',
    color: 'hp',
    
  },
  {
    name: 'none',
    color: 'v',
  }
]

</script>

<template>
<Primitive v-bind="$attrs" :as="as" :class="cn('relative bg-transparent overflow-hidden', className)">
  <span
  class="absolute top-0 left-0 size-full border border-transparent"
:style="{
  backgroundColor: `var(--color-${bg.find(p => p.name == name).color})`,
  opacity: opacity
}"/>
<slot  />
</Primitive>
</template>