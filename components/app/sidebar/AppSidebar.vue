<script setup lang="ts">
const as = useAccountStore()
const us = useUiStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

const sidebarExpanded = ref(true)
const toggleSidebar = useToggle(sidebarExpanded)

function updateSidebar() {
  toggleSidebar()
  us.sidebarExpanded = sidebarExpanded.value
}

watch(
  () => us.triggerSidebar,
  (newVal) => {
    if (newVal) {
      updateSidebar()
    }
  },
)
</script>

<template>
  <div
    :data-state="sidebarExpanded == true ? 'expanded' : 'collapsed'"
    class="bg-b2/40 w-full h-full py-3  gap-2.5 border-r shadow-none  pl-3 flex-nowrap  flex  flex-col  border-r-b2  overflow-x-hidden  group">
    <SidebarHeader />
    <CommandSearchButton />

    <div class="h-full relative overflow-y-scroll   overflow-x-hidden" :class="{ 'pt-18': !us.sidebarExpanded }">
      <div class="inset-0 top-0 left-0  overflow-y-scroll gap-2.5 flex  flex-col pr-3">
        <SidebarLabel>
          Summoner
        </SidebarLabel>

        <LazyCollapsibleSummoner />

        <SidebarLabel>
          Craft
        </SidebarLabel>

        <SidebarSeparator />

        <LazyCollapsiblePocket :summoner="summoner" />

        <CalculatorLink />

        <SidebarLabel>
          Learn
        </SidebarLabel>

        <SidebarSeparator />

        <LazyCollapsibleData />

        <SidebarLabel>
          Tools
        </SidebarLabel>

        <SidebarSeparator />

        <LazyCollapsibleSettings />
        <LazyCollapsibleTools />
      </div>
    </div>
    <span v-if="us.sidebarExpanded" v-tippy="'Current Patch'" class="font-mono text-1   expand-hide">{{ ds.currentPatch }}</span>
    <SidebarAddPocket />
    <SidebarBorderCollapse @update:sidebar="updateSidebar()" />
  </div>
</template>

<style scoped></style>
