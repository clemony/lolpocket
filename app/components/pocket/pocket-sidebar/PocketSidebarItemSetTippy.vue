<script lang="ts" setup>
import { setDefaultProps } from 'vue-tippy'

const props = defineProps<{
  pocket: Pocket
}>()

const pocket = computed (() => props.pocket)

setDefaultProps({
  // custom theme
  theme: 'tomato',
  animation: 'fade',
  interactive: true,
  offset: [0, 10],
  placement: 'bottom-end',
})
</script>

<template>
  <div>
  </div>
</template>