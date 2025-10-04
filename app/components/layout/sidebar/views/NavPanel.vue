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
// ps().pockets[0].main.items = 'test'
// ps().pockets[0].items[0].id = 'test'
// ps().pockets[0].items[0].items.push(getRandom(ix().items).id)
</script>

<template>
  <div class="px-6 mt-1 space-y-3 w-full">
    <Collapsible
      v-for="parentRoute, i in navLinks"
      :key="parentRoute.name"
      v-model:open="ui().collapseStates.panel.nav[i + 1]"
      :i="i + 1"
      class="pr-2">
      <CollapsibleTrigger
        class="mt-1 gap-4 w-full text-start hover:underline py-1 hover:*:text-bc/80 focus-visible:outline-0 items-center">
        <span class="grow text-2 capitalize font-bold text-bc/50">
          {{ parentRoute?.meta?.title || parentRoute?.name }}
        </span>

        <CaretRotate />
      </CollapsibleTrigger>

      <CollapsibleContent
        class="after:top-3 gap-1 relative flex flex-col justify-items-center"
        menu>
        <SidebarBtnLink
          v-for="child in parentRoute?.children.sort((a, b) => (Number(a.meta.order) - Number(b.meta.order)))"
          :key="child?.name"
          :item="child" />
      </CollapsibleContent>
    </Collapsible>
  </div>
</template>
