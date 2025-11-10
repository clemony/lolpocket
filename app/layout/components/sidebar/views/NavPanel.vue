<script lang="ts" setup>
defineOptions({
  meta: {
    name: 'lolpocket',
    class: 'size-5.5',
    icon: 'compass',
  },
})

const routes = useRouter().getRoutes()

const navLinks = computed(() => {
  return [
    routes.find(r => r.path === '/backpack'),
    routes.find(r => r.path === '/library'),
    routes.find(r => r.path === '/tools'),
    routes.find(r => r.path === '/support')
  ]
})
</script>

<template>
  <div class=" overflow-y-auto scrollbar-hidden **:text-3  py-3  max-h-full h-full pl-6 pr-6 space-y-2 w-full">
    <Collapsible
      v-for="parentRoute, i in navLinks"
      :key="parentRoute.name"
      v-model:open="ui().collapseStates.panel.nav[i + 1]"
      :i="i + 1">
      <CollapsibleTrigger
        class="mt-1 gap-4 pr-0.75 w-full text-start hover:underline py-1 hover:*:text-bc/80 focus-visible:outline-0 items-center">
        <span class="grow text-2 capitalize font-semibold text-bc/50">
          {{ parentRoute?.meta?.title || parentRoute?.name }}
        </span>
        <!--
        <CaretRotate /> -->
      </CollapsibleTrigger>

      <CollapsibleContent
        v-if="parentRoute.path !== '/support'"
        class="after:top-3 *:-ml-2 gap-1 relative flex flex-col justify-items-center"
        menu>
        <SidebarBtnLink
          v-for="child in parentRoute?.children.sort((a, b) => (Number(a.meta.order) - Number(b.meta.order)))"
          :key="child?.name"
          :item="child" />
      </CollapsibleContent>

      <CollapsibleContent
        v-else-if="parentRoute.path === '/support'"
        class="after:top-3  *:-ml-2  gap-1 relative flex flex-col justify-items-center"
        menu>
        <SidebarBtnLink
          v-for="child in parentRoute?.children.filter(p => ['docs', 'about'].includes(String(p.name))).sort((a, b) => (Number(a.meta.order) - Number(b.meta.order)))"
          :key="child?.name"
          :item="child" />

        <Collapsible :default-open="false">
          <CollapsibleTrigger class="flex-nowrap overflow-hidden text-bc/50 hover:!text-bc !gap-3.25 pl-1.5 pr-1 w-full !duration-0 items-center flex h-10 w-full hover:underline font-medium capitalize text-nowrap justify-start">
            <span class="size-4.5 shrink-0 grid place-items-center relative">

            <CaretRotate direction="right" class="!size-5"/>
            </span>
            Policies & Terms
            <Grow />
          </CollapsibleTrigger>

          <CollapsibleContent
            class="after:top-3 mt-1 pl-px  gap-1 relative  flex flex-col justify-items-center"
            menu>
            <SidebarBtnLink
              v-for="child in parentRoute?.children.filter(p => !['docs', 'about'].includes(String(p.name))).sort((a, b) => (Number(a.meta.order) - Number(b.meta.order)))"
              :key="child?.name"
              :item="child" />
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>
