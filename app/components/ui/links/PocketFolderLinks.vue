<script lang="ts" setup>
const us = useUiStore()

const as = useAccountStore()
</script>

<template>
  <NuxtLink
    v-for="(link, i) in getFolderLinks()"
    :key="link.key"
    :to="link.link">
    <SidebarButton v-tippy="!us.sidebarExpanded ? link.name : null" class="indicator">
      <LazyPopupBadge v-if="!us.sidebarExpanded && link.pockets && link.pockets.length" :delay="0.95 + i * 2.5 / 10">
        {{ link.pockets.length }}
      </LazyPopupBadge>

      <SidebarIcon v-if="link.name == 'Pockets'">
        <i-ui-pocket class="size-4.5" />
      </SidebarIcon>
      <SidebarIcon v-else :name="link.icon" class=" size-4.5" />
      
        {{ link.name }}
      

      <SidebarBadge class="font-mono !text-1 pr-3">
        <span v-if="!link.pockets || link.pockets.length == null || link.pockets.length == 0">0</span>
        <span v-else>
          {{ link.pockets.length }}
        </span>
      </SidebarBadge>
    </SidebarButton>
  </NuxtLink>
</template>