<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <div v-if="us.sidebarExpanded" class="text-3 pt-4 text-bc/40  tracking-tight px-2 font-semibold  expand-hide">
    <slot />
  </div>
</template>