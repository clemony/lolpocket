<script lang="ts" setup>
import { motion } from 'motion-v'

const props = defineProps<{
  noTitle?: boolean
  class?: HTMLAttributes['class']
}>()

const as = useAccountStore()
const us = useUiStore()
const route = useRoute()
const puuid = computedAsync(() => as.userAccount?.riot.puuid ?? '')
</script>

<template>
  <main class="flex size-full overflow-x-hidden " :class="cn(props.class)">
    <div
      class="  justify-self-end shrink-0 h-full pb-5 gap-2.5 border-r  z-4   border-r-b3/40 tldr-40 ease-out  overflow-hidden  group relative'">
      <div class="w-full h-16" />
      <transition-slide group :offset="{ enter: [us.enterX, us.enterY], leave: [us.enterX, us.leaveY] }" class="size-full">
      </transition-slide>

      <SidebarBorderCollapse @update:sidebar="us.toggleSidebar()" />
    </div>
    <div class="size-full relative ">
      <slot />
    </div>
  </main>
</template>