<script setup lang="ts">
import type { PopoverArrowProps } from 'reka-ui'
import { PopoverArrow, useForwardProps } from 'reka-ui'

const props = defineProps<PopoverArrowProps & {

}>()

const forwarded = useForwardProps(props)
</script>

<template>
  <PopoverArrow v-bind="forwarded">
    <icon name="caret-up" />
  </PopoverArrow>
</template>