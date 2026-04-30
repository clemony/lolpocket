<script lang="ts" setup>
import { useBackpackProvider } from "~/domain/backpack/useBackpack"
import { items } from "~/domain/pocket/ui/treeItems"
definePageMeta({
  title: "Backpack",
  icon: "i-ui-pack",
  class: " scale-94",
  layout: "default",
  order: 2
})

const { backpack } = useRoutes()

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
        :ui="{ title: 'font-serif text-4xl font-bold ds-2xs' }"
        :icon="$route.meta?.icon || ''"
        :title="String($route.meta?.title || $route.name)">
        <template #leading>
          <UDashboardSidebarCollapse
            :variant="collapsed ? 'solid' : 'outline'"
            :color="collapsed ? 'neutral' : 'primary'"
            :icon="
              collapsed
                ? 'i-icon-park-outline-left-expand'
                : 'i-icon-park-outline-left-bar'
            " />
        </template>

        <template #trailing>
          <UBadge size="sm" label="4" color="neutral" />
        </template>

        <template #right>
          <UTabs
            :items="backpack"
            :default-value="$route.path"
            label-key="label"
            size="sm"
            class="w-40"
            :content="false" />
        </template>
      </UDashboardNavbar>
      <NuxtPage :items="computed(() => items)" />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
