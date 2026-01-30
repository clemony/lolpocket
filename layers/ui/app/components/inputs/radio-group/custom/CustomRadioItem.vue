<script setup lang="ts">
import { RadioGroupIndicator } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <RadioGroupItem
    :class="
      cn(
        'group border-bc text-bc outline-bc focus-visible:ring-b2 relative aspect-square size-5 rounded-full border shadow-sm outline focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <RadioGroupIndicator
      class="relative flex items-center justify-center"
      as-child
    >
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
        }"
      >
        <icon
          class="textneutral absolute -mt-px size-5.25 opacity-100 group-disabled:opacity-0"
          name="codicon:circle-filled"
        />
      </Motion>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
