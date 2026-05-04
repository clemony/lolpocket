<script lang="ts" setup>
import { useBackpackProvider } from "~/domain/backpack/useBackpack"
import { usePocketFolderProvider } from "~/domain/pocket/ui/pocketFolderItems"
import { toolbarItems } from "~/domain/pocket/ui/toolbarItems"

definePageMeta({
  layout: "default"
})
const { backpack } = useApp().routes
console.log("🥸 - backpack:", backpack)

const { collapsed } = useBackpackProvider()
usePocketFolderProvider()

const backpackViewMode = shallowRef<string>("gallery")

const viewModes = [
  {
    label: "Gallery",
    value: "gallery",
    icon: "i-gallery"
  },
  {
    label: "List",
    value: "list",
    icon: "i-square-list"
  }
]
</script>

<template>
  <UDashboardGroup
    unit="rem"
    class="top-(--ui-header-height) max-h-[calc(100vh-var(--ui-header-height)] flex-1 overflow-hidden">
    <BackpackSidebar />
    <UDashboardPanel>
      <UDashboardNavbar
        :toggle="false"
        :ui="{
          // root: 'border-b-p0/60',
          root: 'h-16',
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
            v-model:model-value="backpackViewMode"
            :items="viewModes"
            size="md"
            class="w-70"
            :ui="{ list: 'rounded-xl' }"
            color="neutral" />
        </template>
      </UDashboardNavbar>
      <NuxtPage :backpack-view-mode />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
