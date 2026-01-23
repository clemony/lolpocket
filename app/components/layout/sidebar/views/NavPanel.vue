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

  ]
})
</script>

<template>
  <div
    class="scrollbar-hidden grid size-full max-h-full auto-rows-max gap-y-2 overflow-y-auto">
    <template
      v-for="parentRoute in navLinks"
      :key="parentRoute.name">
      <div class="flex h-4 w-full items-center gap-4 capitalize">
        <span :class="cn('w-full max-w-0 opacity-100 transition-all transition-discrete duration-200', { 'max-w-0 opacity-0 hidden ': !open })">
          {{ parentRoute?.meta?.title || parentRoute?.name }}
        </span>
        <Separator :class="cn('bg-b3 ml-1.5 hidden h-px w-full max-w-0 grow opacity-0 transition-all transition-discrete duration-200', { 'max-w-9 opacity-100 block': !open })" />
      </div>

      <SidebarBtnLink
        v-for="child in parentRoute?.children.sort(
          (a, b) => Number(a.meta.order) - Number(b.meta.order),
        )"
        :key="child?.name"
        :open
        :class="cn('w-full justify-start gap-2.5! px-3.5', { 'max-w-11 px-2.5 [&_span]:opacity-0': !open })"
        :to="child"
        @click="close()" />
    </template>
  </div>
</template>
