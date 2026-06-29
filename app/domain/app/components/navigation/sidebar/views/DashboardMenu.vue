<script lang="ts" setup>
import { backpackItem } from "~/domain/app/utils/menuItems"
import type { ButtonRouteItem, RouteGroup } from "~/types/route.types"
import { asRouteButtonItemArray } from "~/types/typeAssert"
defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
    as?: string | Component
    header?: boolean
  }>(),
  {
    header: true,
  }
)

const { useRouteGroups } = routeStore()
const groupMap = safeObject(computed(() => useRouteGroups().value))

const helpGroup = computed(() => ({
  label: "Help & Resources",
  value: "help-section",
  items: [
    asRouteButtonGroup(groupMap.value?.docs),
    asRouteButtonGroup(groupMap.value?.external),
  ],
}))

const backpack = backpackItem(() => close)

const { summoner: s } = storeToRefs(user())
const summoner = computed(() =>
  s.value
    ? {
        ...summonerNavHeader,
        value: "summoner-section",
        items: asRouteButtonItemArray(summonerNav(s.value)),
      }
    : undefined
)

const groups = computed<
  (RouteGroup<ButtonRouteItem> | RouteGroup<RouteGroup<ButtonRouteItem>>)[]
>(() => [
  backpack,
  summoner.value as RouteGroup<ButtonRouteItem>,
  groupMap.value?.nexus as RouteGroup<ButtonRouteItem>,
  groupMap.value?.tools as RouteGroup<ButtonRouteItem>,
  groupMap.value?.library as RouteGroup<ButtonRouteItem>,
  helpGroup.value as RouteGroup<RouteGroup<ButtonRouteItem>>,
])
</script>

<template>
  <div
    v-motion="{ layout: 'size' }"
    class="z-1 flex h-max grow flex-col gap-y-5 pt-5 pb-8 pl-2">
    <h2 class="mb-2 font-bold">Navigation</h2>
    <DashboardCollapsible v-for="(group, i) in groups" :key="i" :group />
  </div>
</template>
