<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <CollapsibleTrigger as-child class="flex items-center group/trigger  tldr-30 ">
    <SidebarButton>
      <slot />
      <Grow class=" tldr-30 "   :class="{'!shrink w-0 ': !us.sidebarExpanded }"/>
      <icon name="up-sm" class="size-4group-data-[state=open]/trigger:-rotate-180 tldr-20 justify-self-end" :class="{'opacity-0 w-0 invisible   tldr-30 ': !us.sidebarExpanded }" />
    </SidebarButton>
  </CollapsibleTrigger>
</template>