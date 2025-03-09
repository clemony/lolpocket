<script lang="ts" setup>

</script>

<template>
  <NuxtLink
    to="/pockets">
    <SidebarButton>
      <SidebarIcon name="folders" class="-left-px size-4.5" />
      <SidebarText>
        All
      </SidebarText>
    </SidebarButton>
  </NuxtLink>

  <NuxtLink
    to="/pockets/trash">
    <SidebarButton>
      <SidebarIcon name="trash" class="size-4.75 -left-[2px]" />
      <SidebarText>
        Trash
      </SidebarText>
    </SidebarButton>
  </NuxtLink>

  <NuxtLink
    to="/pockets/archive">
    <SidebarButton>
      <SidebarIcon name="archive" class="3.75" />
      <SidebarText>
        Archive
      </SidebarText>
    </SidebarButton>
  </NuxtLink>
</template>