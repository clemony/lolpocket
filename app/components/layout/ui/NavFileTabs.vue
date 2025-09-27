<script lang="ts" setup>
const route = useRoute()
const { childRoutes, targetRoutes } = useRouteNavigation()
</script>

<template>
  <nav
    v-if="childRoutes"
    role="tablist"
    class=" relative h-[36px]  justify-start items-start gap-3  col-start-2 w-full z-3 flex">
    <Button
      v-for="item in childRoutes.sort((a, b) => (a.meta?.order - b.meta?.order))"
      :key="item.name"
      tabindex="0"
      role="tab"
      as="li"
      :class="cn(
        'group/tab pointer-events-auto max-w-44 cursor-pointer tabs tab-menu tabs-lift tabs-lg relative self-start !p-0 min-w-22 max-w-46 grow flex items-start',
      )"
      @click="navigateTo(targetRoutes[String(item.name)])">
      <FakeTab />

      <!-- tab style -->
      <div
        :class="cn(
          'absolute top-0 tab-active tab w-full opacity-0 group-hover/tab:opacity-100 transition-all !border-b-1 !border-b-b3 duration-250',
          { 'brightness-94 hover:inset-shadow-sm inset-shadow-black': item.name !== route.name, 'opacity-100': item.name === route.name },
        )">
      </div>
      <FakeTab />

      <div :class="cn('overflow-hidden absolute text-4 h-10 z-30 capitalize mt-1.5 items-center text-bc/90 flex-nowrap justify-center w-full grow flex font-semibold ', { 'opacity-60 font-medium': item.name !== route.name })">
        {{ item?.meta?.title || item.name.toString() }}
      </div>
    </Button>
  </nav>
</template>
