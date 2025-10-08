<script lang="ts" setup>
const route = useRoute()
const { childRoutes, targetRoutes } = useRouteNavigation()
</script>

<template>
  <nav
    v-if="childRoutes"
    role="tablist"
    class=" relative h-[36px]  *:select-none justify-start items-start gap-2  col-start-2 w-full z-3 flex">
    <button
      v-for="item in childRoutes.sort((a, b) => (a.meta?.order - b.meta?.order))"
      :key="item.name"
      tabindex="0"
      role="tab"
      as="li"
      :class="cn(
        'group/tab pointer-events-auto max-w-44 cursor-pointer tabs tab-menu tabs-lift tabs-lg relative self-start !p-0 min-w-22 max-w-46  **:pointer-events-none grow flex items-start',
      )"
      @click="navigateTo(targetRoutes[String(item.name)])">
      <FakeTab />

      <!-- tab style -->
      <div
        :class="cn(
          'absolute top-0 tab-active tab w-full opacity-0 group-hover/tab:opacity-100 transition-all !border-b-1 !border-b-b3 duration-150',
          { 'brightness-94 before:!border-b2/80 inset-shadow-[0_-1px_0_rgba(0,0,0,0.06)] before:brightness-99 **:!z-0 !z-0': item.name !== route.name, 'opacity-100 !z-1 **:!z-1': item.name === route.name },
        )">
      </div>
      <FakeTab />

      <div :class="cn('overflow-hidden absolute text-4 h-10 z-30 capitalize mt-1.5 items-center text-bc/90 flex-nowrap justify-center w-full grow flex font-semibold ', { 'opacity-60 font-medium': item.name !== route.name })">
        {{ item?.meta?.title || item.name.toString() }}
      </div>
    </button>
  </nav>
</template>

<style scoped>
.tabs {
  --tabs-height: 30px;
  /* @apply !border-b-transparent **:!border-b-transparent  **:!border-b-0  !border-b-0; */
}
.tab {
  --tab-radius-min: 0.65rem !important;
  --tab-paddings: 4px 20px !important;

  text-transform: capitalize;
}
</style>