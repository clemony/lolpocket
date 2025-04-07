<script setup lang="ts">
</script>

<template>
  <SidebarButton
    v-for="link in itemDataLinks"
    :key="link.name"
    v-tippy="link.name"
    @click="navigateTo(link.link)">
    <span v-if="!us.sidebarExpanded " class="relative size-4">
      <component :is="link.name == 'Items' ? 'i-ui-hitter' : 'i-ui-list'" class="absolute  size-4.5 -ml-0.25 -mt-1  dst" :class="{ 'size-5.25   opacity-70': link.name == 'Items', '-mt-px ml-0': link.name != 'Items' }" />
    </span>

    <span v-else class="flex gap-3">
      <SidebarIcon name="right-sm" class="size-4 opacity-60" />
      {{ link.name }}
    </span>
  </SidebarButton>
</template>
