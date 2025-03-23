<script setup lang="ts">
const as = useAccountStore()
const us = useUiStore()
const route = useRoute()

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
    class="main-sidebar @container/app:4xl:fixed @container/app:4xl:w-[270px] bg-b2/40 w-full h-full py-4  gap-2.5 border-r shadow-warm shadow-black/5 z-3   pl-3 flex-nowrap  flex  flex-col  border-r-b3/40  overflow-x-hidden  group relative" :style="{ '--bg-noise': 1 }">
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
        <LazyCollapsibleInfo />
      </div>
    </div>
    <SidebarFooter />
    <SidebarBorderCollapse @update:sidebar="updateSidebar()" side="right" :open="us.sidebarExpanded"/>
  </div>
</template>

<style scoped></style>
