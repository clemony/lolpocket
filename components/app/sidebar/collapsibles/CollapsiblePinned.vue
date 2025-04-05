<script setup lang="ts">
const ps = usePocketStore()
ps.pinnedFolder = []

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.folder == 'pinned')
})
</script>

<template>
  <Collapsible :disabled="!pinned || pinned.length == null || pinned.length == 0" class="group">
    <SidebarCollapsibleTrigger as-child>
      <slot :pinned="pinned" />
    </SidebarCollapsibleTrigger>

    <SidebarCollapsibleContent>
      <PinnedPocketLinks />
    </SidebarCollapsibleContent>
  </Collapsible>
</template>