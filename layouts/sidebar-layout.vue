<script lang="ts" setup>
const props = defineProps<{
  noTitle?: boolean
    class?: HTMLAttributes['class']
}>()
const route = useRoute()

const as = useAccountStore()
const us = useUiStore()
</script>

<template>
  <div

   :style="{ '--bg-noise': 1 }" :class="cn('main-sidebar  w-[330px] bg-b2/40  h-full pt-6.25 pb-5 gap-2.5 border-r shadow-warm shadow-black/5 z-3 flex-nowrap  flex  flex-col  border-r-b3/40 tldr-40 ease-out  overflow-x-hidden  group relative', props.class)">
    <div v-if="!props.noTitle" class="flex items-start pr-5 w-full relative">
      <h3 class="px-5.75 grow capitalize">
        {{ route.meta.title || route.name }}
      </h3>
      <slot name="title" />
    </div>
    <slot />

    <SidebarBorderCollapse @update:sidebar="us.toggleSidebar()" />
  </div>
</template>