<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  noTitle?: boolean
  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()
const us = useUiStore()
const route = useRoute()
const puuid = computedAsync(() => as.userAccount?.puuid ?? '')
</script>

<template>
  <div

    :style="{ '--bg-noise': 1 }" class="  w-[300px]" :class="cn('main-sidebar bg-b2/40  h-full pb-5 gap-2.5 border-r  z-4 flex-nowrap  flex  flex-col  border-r-b3/40 tldr-40 ease-out  overflow-x-hidden  group relative', { 'w-[400px]': route.path == '/calculator', 'w-[340px]': route.path == '/match' }, props.class)">
    <transition-slide group :offset="{ enter: [us.enterX, us.enterY], leave: [us.enterX, us.leaveY] }" class="size-full">
      <LazyAppSidebar v-if="us.sidebarMenuOpen == true" />
      <LazySettingsSidebar v-if="us.settingsOpen == true" />
      <LazyAppSidebar v-if="route.path == '/'" />
      <LazySummonerSidebar v-else-if="route.meta.section == 'nexus'" />
     <div v-else-if="route.path == '/match' && puuid" :puuid="puuid">
      <slot name="match" />
     </div>
      <LazyAnalyticsSidebar v-else-if="route.meta.section == 'analytics'" />
      <LazyBackpackSidebar v-else-if="route.meta.section == 'backpack'" />
      <LazyCalculatorSidebar v-else-if="route.meta.section == 'calculator'" />
      <LazyPocketSidebar v-else-if="route.meta.section == 'pocket'" />
      <LazyItemSidebar v-else-if="route.meta.section == 'items'" />
      <LazyChampionSidebar v-else-if="route.meta.section == 'champions'" />
      <LazyDocsSidebar v-else-if="route.meta.section == 'docs'" />
    </transition-slide>

    <SidebarBorderCollapse @update:sidebar="us.toggleSidebar()" />
  </div>
</template>