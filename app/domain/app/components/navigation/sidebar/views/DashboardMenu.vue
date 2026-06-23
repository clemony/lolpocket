<script lang="ts" setup>
import { SidebarWrapper } from "#components"
import { backpackItem } from "~/domain/app/utils/menuItems"
import type {
  ButtonRouteItem,
  RouteGroup,
  RouteItem,
} from "~/types/route.types"
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

const helpGroup = computed(() => [
  asRouteButtonGroup(groupMap.value?.docs),
  asRouteButtonGroup(groupMap.value?.external),
])

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

const groups = computed<Array<RouteGroup<ButtonRouteItem>>>(() => [
  backpack,
  summoner.value as RouteGroup<ButtonRouteItem>,
  groupMap.value?.nexus as RouteGroup<ButtonRouteItem>,
  groupMap.value?.tools as RouteGroup<ButtonRouteItem>,
  groupMap.value?.library as RouteGroup<ButtonRouteItem>,
])
</script>

<template>
  <div class="z-1 flex max-h-max grow flex-col gap-y-4 pt-5 pb-8">
    <DashboardCollapsible v-for="(group, i) in groups" :key="i" :group />
    <div class="flex w-full flex-col gap-1">
      <RouteDescription
        v-if="helpGroup.length"
        name="Help & Resources"
        :ui="{ root: 'pl-2' }"
        description="Find answers, research external data, and customize your lolpocket." />
      <div class="flex w-full flex-col">
        <DashboardCollapsible
          v-for="(group, i) in helpGroup"
          :key="i"
          :description="false"
          :default-open="false"
          :group>
          <UButton
            block
            trailing-icon="i-down"
            :icon="group?.icon"
            :ui="{
              base: 'grow rounded-3xl hover:shadow-none hover:inset-ring-0 hover:drop-shadow-none hover:fx-0!',
              leadingIcon: cn('size-4.5', group?.class),
              trailingIcon:
                'trailing-rotate size-4 opacity-50 group-hover/btn:opacity-100',
            }"
            variant="ghost"
            size="lg"
            :label="group.label" />
        </DashboardCollapsible>
      </div>
    </div>
  </div>
</template>
