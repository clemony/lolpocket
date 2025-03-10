<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <Separator v-if="!us.sidebarExpanded" direction="vertical" class="expand-hide bg-b2 my-1" />
</template>