<script lang="ts" setup>
import { backpackItem } from "~/domain/app/utils/menuItems"
defineOptions({
  inheritAttrs: false,
})

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
</script>

<template>
  <SlidebarWrapper overlay="bottom">
    <template #header>
      <CommandSidebarHeader color="primary" />
    </template>
    <div class="z-1 flex w-full flex-col gap-y-4 pt-40 pb-8">
      <SidebarListSection v-if="backpack" :group="backpack" />
      <SidebarButtonGrid v-if="summoner" :group="summoner" />

      <SidebarListSection
        v-if="groupMap?.nexus"
        :group="asRouteButtonGroup(groupMap.nexus)" />

      <SidebarCardSection
        v-if="groupMap?.tools"
        :group="asRouteButtonGroup(groupMap.tools)" />

      <SidebarListSection
        v-if="groupMap?.library"
        class="w-full items-start"
        :ui="{
          itemTrailingIcon: 'size-3.25! -translate-y-px **:stroke-[2.4]',
        }"
        :group="asRouteButtonGroup(groupMap?.library)" />

      <div class="flex w-full flex-col gap-1">
        <RouteDescription
          v-if="helpGroup.length"
          name="Help & Resources"
          description="Find answers, research external data, and customize your lolpocket." />
        <CommandCollapse v-for="(group, i) in helpGroup" :key="i" :group />
      </div>
    </div>
  </SlidebarWrapper>
</template>
