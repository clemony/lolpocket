<script setup lang="ts">
import { RadioGroupIndicator } from 'reka-ui'
import type { AcceptableValue } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <RadioGroupItem
    :class="
      cn(
        'aspect-square size-5 rounded-full border outline outline-bc border-bc  text-bc shadow-sm relative group focus-visible:ring-1 focus-visible:ring-b2 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    ">
    <RadioGroupIndicator as-child class="flex items-center justify-center relative">
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
        <icon name="codicon:circle-filled" class="size-5.25 -mt-px text-neutral  opacity-100 group-disabled:opacity-0 absolute" />
      </Motion>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
