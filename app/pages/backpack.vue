<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { useTableProvider } from "~/composables/ui/useTableProvider"
import { provideBackpack } from "~/domain/backpack/useBackpack"
import {
  useFolders,
  usePocketFolderProvider
} from "~/domain/pocket/folder/useFolder"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

usePocketFolderProvider()
useTableProvider()

definePageMeta({
  title: "Backpack",
  id: "backpack",
  icon: "i-folder",
  layout: false,
  iconKey: "folder",
  prefix: "Backpack",
  order: 1
})

const { defaults, routeFolder, folders } = useFolders()
const store = pocketStore()
const backpack = provideBackpack()
const { folderId, sidebarCollapsed, sidebarFolderRefs, view } = backpack

const folderItems = computed(() => [
  ...defaults.value.map((f) => {
    if (f.id === "all")
      return {
        id: "all",
        slot: "data",
        label: "All",
        icon: iconSets[f.iconKey]?.icon
      }
    else
      return {
        ...f,
        slot: "data",
        icon: iconSets[f.iconKey]?.icon
      }
  })
])
onMounted(() => {
  sidebarFolderRefs.value = store.sidebarFolderRefs
})
onBeforeRouteLeave(() => {
  store.sidebarFolderRefs = sidebarFolderRefs.value
})

const toggle = computed<ButtonProps>(() => ({
  variant: "ghost",
  color: "neutral",
  size: "md",
  ui: {
    base: cn("anchor", {
      "": sidebarCollapsed.value
    }),
    leadingIcon: "size-4.5"
  },
  icon: sidebarCollapsed.value
    ? "i-icon-park-outline-left-expand"
    : "i-icon-park-outline-left-bar",
  onClick() {
    backpack.toggleSidebar()
  }
}))
</script>

<template>
  <Layout>
    <UDashboardGroup
      unit="rem"
      class="top-(--ui-header-height) max-h-[calc(100vh-var(--ui-header-height)] w-full flex-1 gap-4 overflow-hidden px-8 pt-6 pb-4">
      <BackpackSidebar />
      <UDashboardPanel resizable>
        <UPage class="size-full max-h-full overflow-hidden">
          <UPageBody
            :ui="{
              base: 'mx-auto my-0! w-full max-w-full overflow-hidden pt-4 pb-0!'
            }">
            <UTabs
              v-model:model-value="folderId"
              variant="lift"
              :ui="{
                list: 'rounded-tablist z-4! flex h-12 w-full items-center',
                trigger:
                  'z-5! flex! h-12 max-w-32 flex-col! flex-nowrap! gap-0 rounded-t-3xl',
                content: 'h-[88vh] max-h-[88vh] overflow-y-auto border-border',
                leadingIcon: 'absolute! hidden',
                label: 'w-full leading-none',
                root: 'w-full',
                indicator: 'border-b! border-b-p0!'
              }"
              :content="true"
              size="md"
              :items="folderItems"
              value-key="id"
              @update:model-value="backpack.onFolderUpdate($event)">
              <template #list-leading>
                <div
                  class="flex w-64 -translate-y-4 items-center gap-2 self-center pr-6 pl-1">
                  <UButton v-bind="toggle" />
                  <h1 class="truncate text-4xl">
                    {{ routeFolder.label }}
                  </h1>
                </div>
              </template>
              <template #list-trailing>
                <BackpackNavbar />
              </template>
              <template #data>
                <NuxtPage :folder="routeFolder" :view />
              </template>
            </UTabs>
          </UPageBody>
        </UPage>
      </UDashboardPanel>
    </UDashboardGroup>
  </Layout>
</template>

<style scoped>
/* .tab {
  --tab-corner-width: 6rem;
  --tab-corner-height: 3rem !important;
} */
</style>
