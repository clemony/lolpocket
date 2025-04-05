<script setup lang="ts">
</script>

<template>
  <SidebarButton
    v-for="link in itemDataLinks"
    :key="link.name"
    v-tippy="link.name"
    @click="navigateTo(link.link)">
    <span v-if="!us.sidebarExpanded " class="relative size-4">
      <icon :name="link.name == 'Items' ? 'hugeicons:potion' : 'carbon:data-table'" class="absolute  size-5 -ml-0.25 -mt-1  dst" :class="{ 'size-6 -ml-0.75': link.name == 'Items' }" />
    </span>

    <span v-else>
      {{ link.name }}
    </span>
  </SidebarButton>
</template>
