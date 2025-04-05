<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <CollapsibleTrigger as-child class="flex items-center justify-start group/trigger  overflow-hidden">
    <SidebarButton>
      <slot />
      <Grow />
      <icon v-if="us.sidebarExpanded" name="up-sm" class="size-5 group-data-[state=open]/trigger:-rotate-180 transition-rotate duration-300 sidebar-child  justify-self-end  expand-hide" />
    </SidebarButton>
  </CollapsibleTrigger>
</template>