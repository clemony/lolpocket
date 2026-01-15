<script setup lang="ts">
import { NumberFieldInput } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
  size?: InputVariants['size']
  variant?: InputVariants['variant']
  hover?: InputVariants['hover']
}>()
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :auto-focus="false"
    :tab-index="0"
    :class="
      cn('focus-visible:ring-ring relative flex h-9 py-1 text-center text-3 transition-colors placeholder:text-bc/60 focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
         inputVariants({ size, variant, hover }),
         props.class,
      )
    " />
</template>
