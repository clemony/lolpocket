<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <NuxtLink to="/calculator">
    <SidebarButton v-tippy="!us.sidebarExpanded ? 'Calculator' : null">
      <SidebarIcon name="teenyicons:calculator-outline" class="size-4.25 -top-px" :class="{'top-0 left-px': !us.sidebarExpanded}"/>
      <SidebarText>Calculator</SidebarText>
    </SidebarButton>
  </NuxtLink>
</template>