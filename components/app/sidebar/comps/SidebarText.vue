<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <span v-if="us.sidebarExpanded" class="flex items-center text-nowrap text-left truncate justify-start">
    <slot />
  </span>
</template>