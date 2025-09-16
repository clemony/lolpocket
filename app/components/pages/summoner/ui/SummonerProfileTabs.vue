<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

const { childRoutes } = defineProps<{
  childRoutes: RouteRecordRaw[]
  links: any
}>()
const route = useRoute()
</script>

<template>
  <nav
    v-if="childRoutes"
    role="tablist"
    class="tabs tab-menu relative h-10 justify-start col-start-2 w-full mb-2 tabs-lg tabs-lift z-5 flex">
    <FakeTab />

    <!-- ALL tabs $
-->

    <li
      v-for="item in childRoutes"
      :key="item.name"
      role="tab"
      :value="item.name.toString()"
      :class="
        cn('group/tab min-w-22 max-w-44 grow  tab ', {
          'tab-active ': route.name == item.name,
        })
      "
      @click="navigateTo(links[item.name])">
      {{ item.name?.toString().replace("profile ", "") }}
    </li>

    <FakeTab />
  </nav>
</template>
