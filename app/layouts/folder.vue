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

const { defaults, routeFolder } = useFolders()
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
  <UTabs
    v-model:model-value="folderId"
    variant="lift"
    :ui="{
      list: 'rounded-tablist w-full',
      content: 'h-[87vh] max-h-[87vh] overflow-y-auto border-border',
      leadingIcon: 'absolute! hidden',
      root: 'w-full'
    }"
    :content="true"
    size="lg"
    :items="folderItems"
    value-key="id"
    @update:model-value="backpack.onFolderUpdate($event)">
    <template #list-leading>
      <div
        class="flex w-64 -translate-y-2 items-center gap-2 self-center pr-6 pl-1">
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
      <slot />
    </template>
  </UTabs>
</template>
