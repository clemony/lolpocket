<script setup lang="ts">
import { NumberFieldInput } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :class="
      cn(
        `
          focus-visible:ring-ring focus-visible:ring-1
          focus-visible:outline-none
          relative flex h-9 w-full rounded-md border border-b3 bg-transparent
          py-1 text-center text-3 shadow-xs transition-colors
          placeholder:text-bc/60
          disabled:cursor-not-allowed disabled:opacity-50
        `,
        props.class,
      )
    " />
</template>
