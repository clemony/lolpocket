<script setup lang="ts">
import { motion } from 'motion-v'

const as = useAccountStore()
const us = useUiStore()
const route = useRoute()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})
</script>

<template>
  <div
    :data-state="us.sidebarExpanded == true ? 'expanded' : 'collapsed'"
    class="main-sidebar @container/app:4xl:w-[290px] bg-b2/40  h-full pb-4   pl-3  gap-2.5 border-r shadow-warm shadow-black/5 z-3 flex-nowrap  flex  flex-col  border-r-b3/40 tldr-40 ease-out  overflow-x-hidden  group relative" :style="{ '--bg-noise': 1 }" :class="{ '!w-0 !px-0 !gap-x-0': route.path == '/' && !us.sidebarExpanded, 'w-[50px]': !us.sidebarExpanded, 'w-[290px]': us.sidebarExpanded }">
    <SidebarHeader />
    <CommandSearchButton />

    <div class="size-full relative overflow-y-scroll overflow-x-hidden" :class="{ 'pt-8': !us.sidebarExpanded }">
      <div class="inset-0 top-0 left-0 flex-nowrap overflow-x-hidden  overflow-y-scroll gap-2.5 flex  flex-col pr-3">
        <SidebarLabel>
          Summoner
        </SidebarLabel>

        <LazyCollapsibleSummoner />

        <SidebarLabel>
          Craft
        </SidebarLabel>

        <BackpackLink />

        <LazyCollapsiblePocket :summoner="summoner" />

        <CalculatorLink />

        <SidebarLabel>
          Learn
        </SidebarLabel>

        <LazyCollapsibleData />

        <SidebarLabel>
          Hextech Tools
        </SidebarLabel>

        <LazyCollapsibleSettings />
        <LazyCollapsibleInfo />
      </div>
    </div>
    <SidebarFooter />
    <SidebarBorderCollapse side="right" :open="us.sidebarExpanded" @update:sidebar="us.toggleSidebar()" />
  </div>
</template>

<style scoped></style>
