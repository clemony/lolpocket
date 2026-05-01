<script lang="ts" setup>
import { useBackpackProvider } from "~/domain/backpack/useBackpack"
import {
  defaultPocketFolder,
  defaultPocketLinks
} from "~/domain/pocket/manage/defaultFolders"
import { items } from "~/domain/pocket/ui/treeItems"
definePageMeta({
  title: "Backpack",
  icon: "i-ui-pack",
  class: " scale-94",
  layout: "default",
  order: 2
})

const { backpack } = useRoutes()
console.log("🥸 - backpack:", backpack)

const { collapsed } = useBackpackProvider()
</script>

<template>
  <UDashboardGroup
    unit="rem"
    class="top-(--ui-header-height) max-h-[calc(100vh-var(--ui-header-height)] flex-1 overflow-hidden">
    <BackpackSidebar :items="computed(() => items)" />
    <UDashboardPanel>
      <UDashboardNavbar
        :toggle="false"
        :ui="{
          // root: 'border-b-p0/60',
          root: 'h-18',
          title: 'ml-4 text-4xl font-bold tracking-tight ds-2xs',
          left: 'gap-2'
        }"
        :icon="$route.meta?.icon || ''"
        :title="String($route.meta?.title || $route.name)">
        <template #leading>
          <UDashboardSidebarCollapse
            :variant="collapsed ? 'solid' : 'outline'"
            :color="collapsed ? 'secondary' : 'primary'"
            :icon="
              collapsed
                ? 'i-icon-park-outline-left-expand'
                : 'i-icon-park-outline-left-bar'
            " />
        </template>

        <template #trailing>
          <UBadge size="sm" :label="4" color="neutral" class="font-semibold" />
        </template>

        <template #right>
          <UTabs
            :items="[defaultPocketFolder, ...defaultPocketLinks]"
            :default-value="$route.path"
            value-key="to"
            size="md"
            class="w-80"
            :ui="{ list: 'rounded-xl' }"
            color="neutral" />
        </template>
      </UDashboardNavbar>
      <NuxtPage :items="computed(() => items)" />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
