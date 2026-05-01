<script lang="ts" setup>
import { useBackpackProvider } from "~/domain/backpack/useBackpack"
import {
  defaultPocketFolder,
  defaultPocketLinks
} from "~/domain/pocket/manage/defaultFolders"
import { usePocketFolderProvider } from "~/domain/pocket/ui/pocketFolderItems"
import { toolbarItems } from "~/domain/pocket/ui/toolbarItems"

const { backpack } = useApp().routes
console.log("🥸 - backpack:", backpack)

const { collapsed } = useBackpackProvider()
usePocketFolderProvider()
</script>

<template>
  <Layout>
    <UDashboardGroup
      unit="rem"
      class="top-(--ui-header-height) max-h-[calc(100vh-var(--ui-header-height)] flex-1 overflow-hidden">
      <BackpackSidebar />
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
            <UBadge
              size="sm"
              :label="4"
              color="neutral"
              class="font-semibold" />
          </template>

          <template #right>
            <UFieldGroup :orientation="!collapsed ? 'horizontal' : 'vertical'">
              <Tooltip :label="toolbarItems?.new?.label" :disabled="!collapsed">
                <UButton
                  v-bind="toolbarItems.new"
                  color="neutral"
                  class="border-r border-r-p3" />
              </Tooltip>
              <Tooltip :label="toolbarItems?.random?.label">
                <UButton
                  v-bind="toolbarItems.random"
                  color="neutral"
                  :ui="{
                    ...toolbarItems.random?.ui,
                    base: 'border-l border-l-p3 p-0 **:[.inactive-icon]:text-nc!',
                    label: 'hidden'
                  }"
                  class="" />
              </Tooltip>
            </UFieldGroup>
          </template>
        </UDashboardNavbar>
        <slot />
      </UDashboardPanel>
    </UDashboardGroup>
  </Layout>
</template>
