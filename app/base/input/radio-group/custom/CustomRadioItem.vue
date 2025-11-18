<script setup lang="ts">
import type { AcceptableValue } from 'reka-ui'
import { RadioGroupIndicator } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <RadioGroupItem
    :class="
      cn('group relative aspect-square size-5 rounded-full border border-bc text-bc shadow-sm outline outline-bc focus-visible:ring-1 focus-visible:ring-b2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    ">
    <RadioGroupIndicator
      as-child
      class="relative flex items-center justify-center">
      <Motion
        layout
        :initial="{
          opacity: 0,
          scale: 0,
        }"
        :animate="{
          opacity: 1,
          scale: 1,
        }"
        :exit="{
          opacity: 0,
          scale: [1.2, 0],
        }"
        :transition="{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          duration: 1,
        }">
        <icon
          name="codicon:circle-filled"
          class="
            textneutral absolute -mt-px size-5.25 opacity-100
            group-disabled:opacity-0
          " />
      </Motion>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
