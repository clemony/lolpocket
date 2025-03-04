<script lang="ts" setup>
import { PopoverClose } from 'reka-ui'
import type { PopoverCloseProps } from 'reka-ui'

const props = defineProps<PopoverCloseProps>()
</script>

<template>
  <PopoverClose v-bind="props">
    <slot />
  </PopoverClose>
</template>