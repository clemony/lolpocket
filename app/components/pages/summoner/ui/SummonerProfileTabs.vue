<script lang="ts" setup>
const route = useRoute()
const { childRoutes, targetRoutes } = useRouteNavigation()
console.log('🌱 - targetRoutes:', targetRoutes)
</script>

<template>
  <nav
    v-if="childRoutes"
    role="tablist"
    class="tabs tab-menu relative h-10 justify-start col-start-2 w-full mb-2 tabs-lg tabs-lift z-5 flex">
    <FakeTab />

    <li
      v-for="item, in childRoutes"
      :key="item.name"
      tabindex="0"
      role="tab"
      class="max-w-42 w-full flex items-center">
      <Button
        :class="
          cn('group/tab min-w-22 max-w-42 grow hover:bg-b2 hover:tab-active tab ', {
            'tab-active ': route.name === item.name,
          })
        "
        @click="navigateTo(targetRoutes[String(item.name)])">
        <span class="overflow-hidden items-center flex-nowrap justify-center size-full grow flex">
          {{ item.name?.toString().replace("profile ", "") }}
        <!--
        <span
          :class="cn('rounded-[0.4rem] pointer-events-none kbd !p-0 !size-5.5 !min-w-auto  shrink-0 aspect-square text-bc/50 shadow-sm bg-transparent shadow-black/5 font-medium', { '!bg-neutral !text-nc': activeKey === route.meta?.key })">
          {{ item.meta?.key }}
        </span> -->
        </span>
      </Button>
    </li>

    <FakeTab />
  </nav>
</template>
