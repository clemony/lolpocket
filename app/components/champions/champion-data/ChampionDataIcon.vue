<script lang="ts" setup>
const { name, class: className } = defineProps<{
  name: string
  class?: HTMLAttributes['class']
}>()

const icon = [
  {
    name: 'Charge',
    icon: 'charge',

  },
  {
    name: 'Current health',
    icon: 'health',

  },
  {
    name: 'Energy',
    icon: 'energy',

  },
  {
    name: 'Fury',
    icon: 'fury',

  },
  {
    name: 'Grit',

  },
  {
    name: 'Health',
    icon: 'health',

  },
  {
    name: 'Mana',
    icon: 'mana',

  },
  {
    name: 'Mana / s',
    icon: 'mana',

  },
  {
    name: 'Maximum health',
    icon: 'hp',

  },
  {
    name: 'Magic damage',
    icon: 'ap',

  },

  {
    name: 'Physical damage',
    icon: 'ad',

  },
  {
    name: 'Mixed damage',
    icon: 'ad',

  },

  {
    name: 'True damage',
    icon: 'ad',

  },
]
</script>

<template>
  <span :class="cn('', className)">
    <component
      :is="`i-stats-${icon.find(p => p.name == name).icon}`"
      :class="cn('', className)" />
  </span>
</template>