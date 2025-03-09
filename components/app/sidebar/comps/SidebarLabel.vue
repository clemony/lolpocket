<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <div class="text-3 pt-4 text-bc/40 tracking-tight px-2 font-semibold tldr-30" :class="{ 'opacity-0 w-0 invisible': !us.sidebarExpanded }">
    <slot />
  </div>
</template>