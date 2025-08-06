<script lang="ts" setup>
const us = useUiStore()

const component = computed (() => us.activeSidebarContent ? userMenu[us.activeSidebarContent?.toLowerCase()]?.component : null)

watch(() => us.activeSidebarContent, (oldVal, newVal) => {
  if (newVal != oldVal) {
    us.sidebarExpanded = !!us.activeSidebarContent
  }
/*   if (newVal == null && us.sidebarExpanded) {
    us.toggleSidebar()
  } */
})

onMounted (() => {
  if (component.value == null && us.sidebarExpanded)
    us.toggleSidebar()
})
</script>

<template>
  <Sidebar
    class="w-[var(--sidebar-width)] border border-b3  top-16 shadow-warm-soft   overflow-hidden">
    <SidebarRail
      class="hover:after:bg-linear-to-b hover:after:from-transparent hover:after:via-b3 hover:after:to-b4/80"
      @click="us.toggleSidebar()">
    </SidebarRail>

    <TransitionSlideLeft
      group
      class="flex  overflow-hidden size-full">
      <component
        :is="component"
        v-if="us.sidebarExpanded && component"
        :open="us.sidebarExpanded" />
    </TransitionSlideLeft>
  </Sidebar>
</template>