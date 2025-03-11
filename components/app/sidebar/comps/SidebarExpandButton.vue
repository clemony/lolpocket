<script lang="ts" setup>

const us = useUiStore()

</script>

<template>
  <button v-tippy="!us.sidebarExpanded ? 'Collapse Sidebar': 'Expand Sidebar'" class="btn btn-ghost btn-square *:absolute relative *:size-5.25  *:opacity-90 *:shrink-0" @click="us.triggerSidebar = true">
    <icon v-if="us.sidebarExpanded" name="octicon:sidebar-expand-24" />

    <icon v-else name="octicon:sidebar-collapse-24" />
  </button>
</template>