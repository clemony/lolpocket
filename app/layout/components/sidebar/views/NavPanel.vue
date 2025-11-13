<script lang="ts" setup>
defineOptions({
  meta: {
    name: 'lolpocket',
    class: 'size-5.5',
    icon: 'compass',
  },
})

const { close, open } = useAppSidebar()
const routes = useRouter().getRoutes()

const navLinks = computed(() => {
  return [
    routes.find(r => r.path === '/backpack'),
    routes.find(r => r.path === '/library'),
    routes.find(r => r.path === '/tools'),
    routes.find(r => r.path === '/support'),
  ]
})
</script>

<template>
  <div
    class="
      scrollbar-hidden h-full max-h-full w-full space-y-2 overflow-y-auto py-3
      pr-6 pl-6
      **:text-3
    ">
    <Collapsible
      v-for="(parentRoute, i) in navLinks"
      :key="parentRoute.name"
      v-model:open="ui().collapseStates.panel.nav[i + 1]"
      :i="i + 1">
      <CollapsibleTrigger
        class="
          mt-1 w-full items-center gap-4 py-1 pr-0.75 text-start
          hover:underline hover:*:text-bc/80
          focus-visible:outline-0
        ">
        <span class="grow text-2 font-semibold text-bc/50 capitalize">
          {{ parentRoute?.meta?.title || parentRoute?.name }}
        </span>
        <!--
        <CaretRotate /> -->
      </CollapsibleTrigger>

      <CollapsibleContent
        v-if="parentRoute.path !== '/support'"
        class="
          relative flex flex-col justify-items-center gap-1
          *:-ml-2
          after:top-3
        "
        menu>
        <SidebarBtnLink
          v-for="child in parentRoute?.children.sort(
            (a, b) => Number(a.meta.order) - Number(b.meta.order),
          )"
          :key="child?.name"
          :to="child"
          @click="close()" />
      </CollapsibleContent>

      <CollapsibleContent
        v-else-if="parentRoute.path === '/support'"
        class="
          relative flex flex-col justify-items-center gap-1
          *:-ml-2
          after:top-3
        "
        menu>
        <SidebarBtnLink
          v-for="child in parentRoute?.children
            .filter((p) => ['docs', 'about'].includes(String(p.name)))
            .sort((a, b) => Number(a.meta.order) - Number(b.meta.order))"
          :key="child?.name"
          :to="child"
          @click="close()" />

        <Collapsible :default-open="false">
          <CollapsibleTrigger
            class="
              flex h-10 w-full flex-nowrap items-center justify-start gap-3.25!
              overflow-hidden pr-1 pl-1.5 font-medium text-nowrap text-bc/50
              capitalize duration-0!
              hover:text-bc! hover:underline
            ">
            <span class="relative grid size-4.5 shrink-0 place-items-center">
              <CaretRotate
                direction="right"
                class="size-5!" />
            </span>
            Policies & Terms
            <Grow />
          </CollapsibleTrigger>

          <CollapsibleContent
            class="
              relative mt-1 flex flex-col justify-items-center gap-1 pl-px
              after:top-3
            "
            menu>
            <SidebarBtnLink
              v-for="child in parentRoute?.children
                .filter((p) => !['docs', 'about'].includes(String(p.name)))
                .sort((a, b) => Number(a.meta.order) - Number(b.meta.order))"
              :key="child?.name"
              :to="child"
              @click="close()" />
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>
