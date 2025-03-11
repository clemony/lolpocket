<script lang="ts" setup>
const us = useUiStore()

const isOpen = ref(true)


</script>

<template>
  <Collapsible v-model:is-open="isOpen" :disabled="!us.sidebarExpanded">
    <NuxtLink v-tippy="!us.sidebarExpanded ? 'Settings' : null" :to="!us.sidebarExpanded ? '/settings' : ''" :class="{ 'btn btn-ghost size-12': !us.sidebarExpanded }">
      <SidebarCollapsibleTrigger>
        <SidebarIcon name="gear"  />
        <SidebarText>Settings</SidebarText>
      </SidebarCollapsibleTrigger>
    </NuxtLink>
    <SidebarCollapsibleContent  v-if="us.sidebarExpanded">
      <NuxtLink
        v-for="link in settingLinks" :key="link.name"
        :to="link.link" class="group/l">
        <SidebarButton>
          {{ link.name }}
        </SidebarButton>
      </NuxtLink>
    </SidebarCollapsibleContent>
  </Collapsible>
</template>
