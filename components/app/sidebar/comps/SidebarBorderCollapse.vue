<script lang="ts" setup>
const emit = defineEmits(['update:sidebar'])
const us = useUiStore()

const props = defineProps<{
side: 'right' | 'left'
open: boolean
}>()
</script>

<template>
  <button class="absolute top-0  z-10 h-screen w-2 bg-transparent " :class="{ 'cursor-w-resize': (props.side == 'right' && props.open) || (props.side == 'left' && !props.open), 'cursor-e-resize': (props.side == 'left' && props.open) || (props.side == 'right' && !props.open), 'right-0': props.side == 'right' , 'left-0': props.side == 'left'}" @click="emit('update:sidebar')">
  </button>
</template>