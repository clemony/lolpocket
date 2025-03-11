<script lang="ts" setup>
const emit = defineEmits(['update:sidebar'])
const us = useUiStore()
</script>

<template>
  <button class="absolute top-0 right-0 z-10 h-screen w-2 bg-transparent " :class="{ 'cursor-w-resize': us.sidebarExpanded, 'cursor-e-resize': !us.sidebarExpanded }" @click="emit('update:sidebar')">
  </button>
</template>