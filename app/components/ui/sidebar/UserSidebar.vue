<script lang="ts" setup>
const us = useUiStore()

const component = computed (() => us.activeSidebarContent ? userMenu[us.activeSidebarContent.toLowerCase()].component : null)

watch(() => us.activeSidebarContent, (oldVal, newVal) => {
  if (newVal != oldVal) {
    us.sidebarExpanded = !!us.activeSidebarContent
  }
})
</script>

<template>
  <Sidebar
    class="w-[var(--sidebar-width)] top-16 border-l-b3 overflow-hidden !shadow-warm-soft bg-sidebar">
    <TransitionSlideLeft
      group
      class="flex  overflow-hidden size-full">
      <component
        :is="component"
        v-if="us.sidebarExpanded && component"
        :open="us.sidebarExpanded" />
    </TransitionSlideLeft>
    <SidebarRail />
  </Sidebar>
</template>