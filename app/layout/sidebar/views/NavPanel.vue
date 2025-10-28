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
<<<<<<< HEAD
  <div class=" overflow-y-auto scrollbar-hidden  py-3  max-h-full h-full pl-6 pr-6 space-y-2 w-full">
=======
  <div class=" overflow-y-auto scrollbar-hidden  py-3  max-h-full h-full px-3 space-y-2 w-full">
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
        <!--
        <CaretRotate /> -->
=======

        <CaretRotate />
>>>>>>> refs/remotes/origin/main
      </CollapsibleTrigger>

      <CollapsibleContent
        v-if="parentRoute.path !== '/support'"
        class="after:top-3 gap-1 relative flex flex-col justify-items-center"
        menu>
        <SidebarBtnLink
          v-for="child in parentRoute?.children.sort((a, b) => (Number(a.meta.order) - Number(b.meta.order)))"
          :key="child?.name"
<<<<<<< HEAD
          class=" text-4"
=======
>>>>>>> refs/remotes/origin/main
          :item="child" />
      </CollapsibleContent>

      <CollapsibleContent
        v-else-if="parentRoute.path === '/support'"
        class="after:top-3 gap-1 relative flex flex-col justify-items-center"
        menu>
        <SidebarBtnLink
          v-for="child in parentRoute?.children.filter(p => ['docs', 'about'].includes(String(p.name))).sort((a, b) => (Number(a.meta.order) - Number(b.meta.order)))"
          :key="child?.name"
<<<<<<< HEAD
          class=" text-4"
          :item="child" />

        <Collapsible :default-open="false">
          <CollapsibleTrigger class="flex-nowrap overflow-hidden hover:!text-bc !gap-2.75 pl-4 pr-1 w-full !duration-0 items-center flex h-10 w-full text-4 hover:underline font-medium capitalize text-nowrap justify-start">
            <span class="size-4.5 shrink-0 grid place-items-center relative">
              <icon
                name="lucide:scale"
                class="size-5.5 **:stroke-[1.6] absolute" />
=======
          :item="child" />

        <Collapsible :default-open="false">
          <CollapsibleTrigger class="flex-nowrap overflow-hidden hover:!text-bc !gap-2.75 pl-4 pr-1 w-full !duration-0 items-center flex h-10 w-full text-3 hover:underline font-medium capitalize text-nowrap justify-start">
            <span class="size-4.5 shrink-0 grid place-items-center relative">
              <icon
                name="lucide:scale"
                class="size-5 **:stroke-[1.4] absolute" />
>>>>>>> refs/remotes/origin/main
            </span>
            Policies & Terms
            <Grow />
            <CaretRotate />
          </CollapsibleTrigger>

          <CollapsibleContent
            class="after:top-3 gap-1 relative pl-4.25 flex flex-col justify-items-center"
            menu>
            <SidebarBtnLink
              v-for="child in parentRoute?.children.filter(p => !['docs', 'about'].includes(String(p.name))).sort((a, b) => (Number(a.meta.order) - Number(b.meta.order)))"
              :key="child?.name"
<<<<<<< HEAD
              class=" text-4"
=======
>>>>>>> refs/remotes/origin/main
              :item="child" />
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>
