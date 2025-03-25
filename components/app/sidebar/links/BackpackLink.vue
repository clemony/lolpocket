<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <NuxtLink to="/backpack">
    <SidebarButton v-tippy="!us.sidebarExpanded ? 'Backpack' : null">
      <SidebarIcon name="radix-icons:backpack" class="size-4.75" :class="{'top-0': !us.sidebarExpanded}"/>
      <SidebarText>Backpack</SidebarText>
    </SidebarButton>
  </NuxtLink>
</template>