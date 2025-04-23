<script lang="ts" setup>
import SidebarCollapsibleTrigger from '../comps/SidebarCollapsibleTrigger.vue'
import SidebarButton from '../comps/SidebarButton.vue'

const us = useUiStore()

const isOpen = ref(true)

function navigate() {
  if (us.sidebarExpanded)
    return

  navigateTo('/settings')
}

const component = computed (() => us.sidebarExpanded ? SidebarCollapsibleTrigger : SidebarButton)
</script>

<template>
  <SidebarButton>
    <SidebarIcon name="gear" class="!size-4.5" />
    <SidebarText>Settings</SidebarText>
  </SidebarButton>
</template>
