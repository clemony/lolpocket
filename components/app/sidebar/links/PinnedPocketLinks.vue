<script lang="ts" setup>
const ps = usePocketStore()
ps.pinnedFolder = []

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.folder == 'pinned')
})
</script>

<template>
  <NuxtLink v-for="pocket in pinned" :key="pocket.key" :to="`/pocket/${pocket.key}`">
    <SidebarButton v-if="pocket" v-tippy="!us.sidebarExpanded ? pocket.name : null">
      <PocketIcon :image="pocket.icon" class="size-5" />
      <SidebarText>
        {{ pocket.name }}
      </SidebarText>
    </SidebarButton>
  </NuxtLink>
</template>