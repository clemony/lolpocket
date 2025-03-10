<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  default?: boolean
}>()

const us = useUiStore()

const route = useRoute()
console.log('💠 - route:', route)
console.log('💠 - route:', route.meta.header)

const breadcrumbs = computed (() => {
  return route.fullPath.split('/')
})
console.log('💠 - breadcrumbs - breadcrumbs:', breadcrumbs)
</script>

<template>
  <Motion :layout="true" class="w-full h-screen tldr-30" :class="{ 'bg-b2/40': route.meta.background == 'b2' }">
    <div class="flex flex-col relative w-full ">
      <div
        class="pl-12 pr-10 z-10 pt-5 pb-4 absolute flex flex-col  h-31 justify-center  w-full bg-b1/80 backdrop-blur-md" :class="{ '!bg-transparent': route.path == '/' || route.meta.background == 'b2' }">
        <div class="flex w-full items-center gap-2 ">
          <button class="btn btn-ghost btn-square" @click="us.triggerSidebar = true">
            <icon name="ph:sidebar-simple" class="size-5.5 dst" />
          </button>

          <div class="breadcrumbs text-2 flex items-center">
            <ul class="*:capitalize">
              <li>
                <NuxtLink to="/">
                  Home
                </NuxtLink>
              </li>
              <template v-if="route.path.match(/pocket\//)">
                <li>
                  {{ getPocket(route.params.pocketKey).location.folder }}
                </li>
                <li>
                  {{ getPocket(route.params.pocketKey).name }}
                </li>
              </template>
              <template v-else>
                <template v-for="crumb in breadcrumbs" :key="crumb">
                  <li v-if="crumb != ''">
                    {{ crumb }}
                  </li>
                </template>
              </template>
            </ul>
          </div>

          <div class="grow flex items-center justify-end px-6">
            <slot name="crumb" />
          </div>
          <HeaderMenu />
        </div>

        <div class="capitalize pl-2  mt-2 w-full pb-2 flex gap-8 items-center">
          <h1 class="text-9 tracking-tighter dst flex gap-4">
            <slot name="header-icon" />
            {{ route.meta.title || route.name }}
          </h1>

          <slot name="header" />
        </div>
      </div>
    </div>

    <Motion :layout="true" class="size-full" :class="cn('relative tldr-30 overflow-y-auto *:pt-[10vh] pointer-events-none [&_div]:*:pointer-events-auto', props.class)">
      <slot />
    </Motion>
  </Motion>
</template>