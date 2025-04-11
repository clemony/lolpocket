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

const borderB = computed (() => {
  const routes = ['items', 'card', 'calculator']
  return routes.includes(route.name.toString())
})
</script>

<template>
  <div class="flex h-screen">
    <slot name="sidebar" />
    <div class="w-full h-full relative tldr-30 bg-b2/5" :class="{ '!bg-b2/10': route.name == 'card' }">
      <div
        :class="cn(
          'flex w-full items-center overflow-hidden  h-18 max-h-18  gap-4.5 absolute z-40 top-0 left-0 bg-b1/80 backdrop-blur-md pl-2 pr-10  pt-3 pb-4',

          { '!bg-transparent ': route.path == '/',

            'border-b border-b-b2': borderB,

            'bg-b2/40 border-x border-x-b3/80 z-30': route.name == 'card' }, props.headerClass)">
        <SidebarExpandButton :expanded="us.sidebarExpanded" @click="us.toggleSidebar()" />

        <div class="!text-2 flex breadcrumbs items-center **:select-none">
          <ul class="*:capitalize items-center flex">
            <template v-if="route.path.match(/pocket\//)">
              <li>Pockets</li>
              <li>{{ pocketName }} </li>
              <li>{{ route.meta.name }}</li>
            </template>
            <template v-else>
              <template v-for="crumb in breadcrumbs" :key="crumb">
                <li v-if="crumb != ''">
                  {{ crumb.replace('_', ' ') }}
                </li>
              </template>
            </template>
          </ul>
        </div>

        <div class="grow flex items-center justify-end ">
          <slot name="crumb" />
        </div>
      </div>

      <div class="inset-0 absolute left-0 top-0" :class="cn({ 'overflow-y-auto ': route.path != '/' }, props.class)">
        <slot />
      </div>
    </div>
  </div>
</template>