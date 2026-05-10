<script lang="ts" setup>
import type { DropdownMenuItem } from "@nuxt/ui"
import { useBackpackProvider } from "~/domain/backpack/useBackpack"
import { usePocketFolderProvider } from "~/domain/pocket/folder/useFolder"

definePageMeta({
  layout: "default"
})
const { backpack } = useApp().routes
console.log("🥸 - backpack:", backpack)

const { collapsed, viewMode } = useBackpackProvider()
usePocketFolderProvider()

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

const sortItems = computed<DropdownMenuItem[]>(() => [
  {
    label: "Group by",
    type: "label",
    ui: {
      label: "pb-0.5!"
    }
  },
  {
    type: "separator"
  },
  {
    label: "Folder",
    icon: "i-folder",
    type: "checkbox",
    ui: {
      itemLeadingIcon: "**:stroke-[2.3]"
    }
  },
  {
    label: "Patch",
    icon: "i-lp-riot-circle",
    type: "checkbox",
    ui: {
      itemLeadingIcon: "scale-112"
    }
  }
])
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
          root: '@container h-16 pr-7!',
          title: 'ml-4 text-4xl font-bold tracking-tight capitalize ds-2xs',
          left: 'gap-2'
        }"
        :icon="$route.meta?.icon || ''"
        :title="String($route.meta?.title || $route.name)">
        <template #leading>
          <UDashboardSidebarCollapse
            size="sm_"
            :ui="{
              base: cn('rounded-xl', {
                'shadow-none  inset-shadow-xs fx-noise fx-depth bg-p1/50':
                  collapsed
              })
            }"
            :variant="collapsed ? 'outline' : 'outline'"
            :color="collapsed ? 'base' : 'primary'"
            :icon="
              collapsed
                ? 'i-icon-park-outline-left-expand'
                : 'i-icon-park-outline-left-bar'
            " />
        </template>

        <template #trailing>
          <!--           <UBadge
            size="sm"
            :label="badgeValue"
            color="neutral"
            class="font-semibold" /> -->
        </template>

        <template #right>
          <UTabs
            v-model:model-value="viewMode"
            :items="viewModes"
            size="sm"
            :ui="{
              root: 'ml-3 h-10!',
              list: 'h-10 shrink-0 rounded-2xl inset-shadow-xs inset-ring-p4/30',
              label: 'hidden',
              indicator: 'h-7.5 rounded-xl',
              leadingIcon: 'size-3.5 **:stroke-[2.4]'
            }"
            color="neutral" />

          <UDropdownMenu
            :content="{
              onCloseAutoFocus: (event) => event.preventDefault()
            }"
            :items="sortItems">
            <Tooltip label="Sort">
              <UButton
                icon="i-swap-2"
                :ui="{
                  base: 'h-9 max-h-9 rounded-xl',
                  leadingIcon: 'rotate-90 **:stroke-[2]'
                }" />
            </Tooltip>
          </UDropdownMenu>
        </template>
      </UDashboardNavbar>
      <NuxtPage />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
