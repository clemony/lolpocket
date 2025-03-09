<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <span class="tldr-30 text-nowrap" :class="{ 'opacity-0 w-0 justify-start invisible': !us.sidebarExpanded }">
    <slot />
  </span>
</template>