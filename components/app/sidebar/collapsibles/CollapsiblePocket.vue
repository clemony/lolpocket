<script lang="ts" setup>
const props = defineProps<{
  summoner: userAccount
}>()

const us = useUiStore()
const ps = usePocketStore()
ps.pinnedFolder = []

const pinned = computed (() => {
  return ps.pockets.filter(p => p.location.folder == 'pinned')
})

const summoner = computed (() => {
  return props.summoner
})

const isOpen = ref(true)

watchEffect(() => {
  if (us.sidebarExpanded) {
    isOpen.value = true
  }
})
</script>

<template>
  <!-- v-if="us.sidebarExpanded" -->
  <Collapsible v-model:open="isOpen" :disabled="!us.sidebarExpanded">
    <SidebarCollapsibleTrigger v-if="us.sidebarExpanded" class="sidebar-expand">
      Pockets
    </SidebarCollapsibleTrigger>

    <SidebarCollapsibleContent>
      <Collapsible>
        <SidebarCollapsibleTrigger v-if="us.sidebarExpanded" :disabled="!pinned || pinned.length == null || pinned.length == 0" class="group">
          <SidebarIcon name="pin" class="size-5.25 -mt-px -left-0.5 group-not-disabled:text-bc group-disabled:text-bc/15" />
          <SidebarText>
            Pinned
          </SidebarText>
          <SidebarBadge v-if="!pinned || pinned.length == null || pinned.length == 0">
            0
          </SidebarBadge>
        </SidebarCollapsibleTrigger>

        <SidebarCollapsibleContent>
          <PinnedPocketLinks />
        </SidebarCollapsibleContent>
      </Collapsible>

      <PocketFolderLinks />
    </SidebarCollapsibleContent>
  </Collapsible>

<!-- <PinnedPocketLinks v-if="!us.sidebarExpanded"  />

    <PocketFolderLinks v-if="!us.sidebarExpanded"   />
 -->
</template>

<style scoped>

</style>