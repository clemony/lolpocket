<script setup lang="ts">
import type { AnimatePresenceProps } from 'motion-v'
import { AnimatePresence } from 'motion-v'

const props = defineProps<AnimatePresenceProps & {
  class?: HTMLAttributes['class']

}>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <AnimatePresence v-bind="delegatedProps">
    <slot />
  </AnimatePresence>
</template>