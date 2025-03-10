<script lang="ts" setup>
const us = useUiStore()
</script>

<template>
  <NuxtLink
    to="/pockets">
    <SidebarButton v-tippy="!us.sidebarExpanded ? 'All' : null">
      <SidebarIcon name="folders" class="-left-px size-4.5" />
      <SidebarText>
        All
      </SidebarText>
    </SidebarButton>
  </NuxtLink>

  <NuxtLink
    to="/pockets/trash">
    <SidebarButton v-tippy="!us.sidebarExpanded ? 'Trash' : null">
      <SidebarIcon name="trash" class="size-4.75 -left-[2px]" :class="{ 'size-5': !us.sidebarExpanded }" />
      <SidebarText>
        Trash
      </SidebarText>
    </SidebarButton>
  </NuxtLink>

  <NuxtLink
    to="/pockets/archive">
    <SidebarButton v-tippy="!us.sidebarExpanded ? 'Archive' : null">
      <SidebarIcon name="archive" class="3.75" />
      <SidebarText>
        Archive
      </SidebarText>
    </SidebarButton>
  </NuxtLink>
</template>