<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const route = useRoute()

const breadcrumbs = computed (() => {
  return route.fullPath.split('/')
})
</script>

<template>
  <div class="w-full h-screen relative tldr-30 " :class="{ '!bg-b2/40': route.meta.background == 'b2' }">
    <div class="flex w-full items-center overflow-hidden  gap-2 absolute z-40 top-0 left-0 bg-b1/80 backdrop-blur-md pl-5 pr-10  pt-5 pb-4 " :class="{ '!bg-transparent !h-18 ': route.path == '/' || route.meta.background == 'b2' }">
      <SidebarExpandButton />

      <div class="breadcrumbs text-2 flex items-center **:select-none">
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
                {{ crumb.replace('-', ' ') }}
              </li>
            </template>
          </template>
        </ul>
      </div>

      <div class="grow flex items-center justify-end px-6">
        <slot name="crumb" />
      </div>
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