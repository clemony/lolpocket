<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  headerClass?: HTMLAttributes['class']
}>()
const us = useUiStore()
const route = useRoute()

const breadcrumbs = computed (() => {
  return route.fullPath.split('/')
})

const pocketName = computedAsync (() => {
  const p = getPocket(route.params.pocketKey)
  return p.name
})
</script>

<template>
  <div class="w-full h-screen relative tldr-30 bg-b2/5" :class="{ '!bg-b2/40': route.meta.background == 'b2', '!bg-b2/10': route.name == 'card' }">
    <div :class="cn('flex w-full items-center overflow-hidden  gap-4.5 absolute z-40 top-0 left-0 bg-b1/80 backdrop-blur-md px-2  pt-3 pb-4', { '!bg-transparent !h-18 ': route.path == '/' || route.meta.background == 'b2', 'border-b border-b-b2': route.name == 'items' || route.name == 'card', 'bg-b2/40 border-x border-x-b3/80 z-30': route.name == 'card' }, props.headerClass)">
      <SidebarExpandButton :expanded="us.sidebarExpanded" @click="us.triggerSidebar = true" />

      <div class="!text-2 flex breadcrumbs items-center **:select-none">
        <ul class="*:capitalize ">
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
          </li>
          <template v-if="route.path.match(/pocket\//)">
            <li>
              Pocket
            </li>

            <li>
              {{ pocketName }}
            </li>
          </template>
          <template v-else>
            <template v-for="crumb in breadcrumbs" :key="crumb">
              <li v-if="crumb != ''">
                {{ crumb.replace('-', ' ') }}
              </li>
            </template>
          </template>
        </ul>
      </div>

      <div class="grow flex items-center justify-end ">
        <slot name="crumb" />
      </div>

      <RightbarExpandButton v-if="us.rightbarAvailable" :expanded="us.rightbarExpanded" @click="us.triggerRightbar = true" />
    </div>

    <div class="inset-0 absolute left-0 top-0" :class="cn({ 'overflow-y-auto pt-34': route.path != '/' }, props.class)">
      <slot />
    </div>

    <div v-if="route.path != '/' && route.meta.header != 'none'" class="capitalize absolute top-24 left-17 flex gap-8 items-center w-[95%] pr-16">
      <h1 class="text-9 tracking-tighter dst flex gap-4">
        <slot name="header-icon" />
        {{ route.meta.title || route.name }}
      </h1>

      <slot name="header" />
    </div>
  </div>
</template>