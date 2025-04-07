<script lang="ts" setup>

import { motion } from 'motion-v'
import SummonerSidebar from 'components/app/sidebar/sidebars/SummonerSidebar.vue'
import BackpackSidebar from 'components/app/sidebar/sidebars/BackpackSidebar.vue'
import CalculatorSidebar from 'components/app/sidebar/sidebars/CalculatorSidebar.vue'

const props = defineProps<{
  noTitle?: boolean
    class?: HTMLAttributes['class']
}>()

const as = useAccountStore()
const us = useUiStore()
const route = useRoute()

const sidebarComponents = [
    {
        name: 'summoner',
        route: '/summoner',
        component: SummonerSidebar,
    },
    {
        name: 'backpack',
        route: '/backpack',
        component: BackpackSidebar,
    },
    {
        name: 'calculator',
        route: '/calculator',
        component: CalculatorSidebar,
    },
]

const component = computedAsync (() => {
return sidebarComponents.find(r => r.route == route.path)
})
</script>

<template>
    <LayoutGroup>
  <div
    :data-state="as.sidebarCollapsed == true ? 'expanded' : 'collapsed'"
   :style="{ '--bg-noise': 1 }" :class="cn('main-sidebar  w-[330px] bg-b2/40  h-full pt-6.25 pb-5 gap-2.5 border-r shadow-warm shadow-black/5 z-3 flex-nowrap  flex  flex-col  border-r-b3/40 tldr-40 ease-out  overflow-x-hidden  group relative', props.class)">
      <motion.div :key="component.name">
    <div v-if="!props.noTitle" class="flex items-start pr-5 w-full relative">
      <h3 class="px-5.75 grow capitalize">
        {{ route.meta.title || route.name }}
      </h3>
      <slot name="title" />
    </div>
    <div>
    <component v-if="component && component.name" :is="component" :key="component.name" />
</div>
      </motion.div>

    <SidebarBorderCollapse @update:sidebar="us.toggleSidebar()" />
  </div>
  </LayoutGroup>
</template>