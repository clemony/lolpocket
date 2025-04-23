<script setup lang="ts">
</script>

<template>
  <SidebarButton
    v-for="link in champDataLinks"
    :key="link.name"
    v-tippy="link.name"
    @click="navigateTo(link.link)">
    <span class="flex gap-3">
      <SidebarIcon name="right-sm" class="size-4 opacity-60" />
      {{ link.name }}
    </span>
  </SidebarButton>
</template>
