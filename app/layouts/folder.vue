<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolders } from "~/domain/pocket/folder/useFolder"

const { defaults, routeFolder } = useFolders()
const { folderId, sidebarCollapsed, onFolderUpdate, toggleSidebar } =
  useBackpack()

const folderItems = computed(() => [
  ...(defaults.value as SortableFolder[])
    .map((f) => ({
      ...f,
      slot: "data"
    }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
])

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
    toggleSidebar()
  }
}))
</script>

<template>
  <UTabs
    v-model:model-value="folderId"
    variant="lift"
    :ui="{
      list: 'rounded-tablist w-full',
      content:
        'h-[87vh] max-h-[87vh] overflow-y-auto rounded-tl-4xl! bg-p0 drop-shadow-sm drop-shadow-black/6',
      leadingIcon: 'absolute! hidden',
      root: 'w-full pt-6.5'
    }"
    :content="true"
    size="lg"
    color="base"
    :items="folderItems"
    value-key="id"
    @update:model-value="onFolderUpdate($event)">
    <template #list-leading>
      <div class="relative flex w-64 shrink-0 self-center pr-6 pl-1">
        <div class="absolute inset-0 flex -translate-y-6 items-center gap-2">
          <UButton v-bind="toggle" />
          <h1 class="truncate text-4xl">
            <!--
            {{ routeFolder.label }} -->Backpack
          </h1>
        </div>
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
