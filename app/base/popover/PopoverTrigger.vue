<script setup lang="ts">
import { PopoverTrigger } from 'reka-ui'
import type { PopoverTriggerProps } from 'reka-ui'

const props = defineProps<PopoverTriggerProps>()
</script>

<template>
  <PopoverTrigger
    v-bind="props"
    class="cursor-pointer">
    <slot />
  </PopoverTrigger>
</template>
