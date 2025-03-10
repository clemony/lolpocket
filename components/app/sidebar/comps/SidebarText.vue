<script lang="ts" setup>
const us = useUiStore()
</script>

<template>

  <span v-if="us.sidebarExpanded" class="expand-hide flex items-center text-nowrap" >
    <slot />
  </span>

</template>