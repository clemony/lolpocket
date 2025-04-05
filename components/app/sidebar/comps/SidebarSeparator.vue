<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <Separator v-if="!us.sidebarExpanded" direction="vertical" class=" bg-b3/40  my-1" />
</template>