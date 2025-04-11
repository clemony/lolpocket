<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  noTitle?: boolean
  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()
const us = useUiStore()
const route = useRoute()

</script>

<template>
  <LayoutGroup>
    <div
      :data-state="as.sidebarCollapsed == true ? 'expanded' : 'collapsed'"
      :style="{ '--bg-noise': 1 }" class="  w-[290px]" :class="cn('main-sidebar bg-b2/40  h-full pb-5 gap-2.5 border-r  z-4 flex-nowrap  flex  flex-col  border-r-b3/40 tldr-40 ease-out  overflow-x-hidden  group relative', { 'w-[400px]': route.path == '/calculator' }, props.class)">
      <transition-slide group :offset="{enter: [0, us.enter], leave: [0, us.leave]}" class="size-full">
        <LazySettingsSidebar v-if="us.settingsOpen == true" />
        <LazySummonerSidebar v-else-if="route.meta.section == 'nexus'" />
        <LazyBackpackSidebar v-else-if="route.meta.section == 'backpack'" />
        <LazyCalculatorSidebar v-else-if="route.meta.section == 'calculator'" />
        <LazyPocketSidebar v-else-if="route.meta.section == 'pocket'" />
        <LazyItemSidebar v-else-if="route.meta.section == 'items'" />
        <LazyChampionSidebar v-else-if="route.meta.section == 'champions'" />
        <LazyDocsSidebar v-else-if="route.meta.section == 'docs'" />
      </transition-slide>

      <SidebarBorderCollapse @update:sidebar="us.toggleSidebar()" />
    </div>
  </LayoutGroup>
</template>