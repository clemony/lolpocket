<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <CollapsibleTrigger as-child class="flex items-center group/trigger  ">
    <SidebarButton>
      <slot />
      <Grow />
      <icon v-if="us.sidebarExpanded" name="up-sm" class="size-4 group-data-[state=open]/trigger:-rotate-180 sidebar-child  justify-self-end  expand-hide" />
    </SidebarButton>
  </CollapsibleTrigger>
</template>