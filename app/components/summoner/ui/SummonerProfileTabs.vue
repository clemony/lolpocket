<script lang="ts" setup>
const { childRoutes } = useHandleSummoner()

const route = useRoute()
</script>

<template>
  <nav
    v-if="childRoutes"
    role="tablist"
    class="tabs tab-menu relative h-10 justify-start col-start-2 w-full  mb-2  before:size-px tabs-lg tabs-lift border-b-0 z-4 flex">
    <FakeTab />

    <!-- ALL tabs $
-->

    <li
      v-for="item in childRoutes"
      :key="item.name"
      role="tab"
      :value="item.name.toString()"
      :class="cn('group/tab min-w-22 max-w-44 grow   tab ', { 'tab-active ': route.name == item.name })"
      @click="navigateTo(item.path)">
      {{ item.name?.toString().replace('profile ', '') }}
    </li>

    <FakeTab />
  </nav>
</template>