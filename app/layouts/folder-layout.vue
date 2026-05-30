<script lang="ts" setup>
import { UButton } from "#components"
import type { ButtonProps } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/composables/useBackpack"
import { useFolders } from "~/domain/backpack/composables/useFolder"

const { defaults, routeFolder, folders } = useFolders()
const { folderId, sidebarCollapsed, onFolderUpdate, toggleSidebar } =
  useBackpack()

const folderItems = computed(() => [
  ...(defaults.value as SortableFolder[]).map((f) =>
    f.id === "folders"
      ? { ...f, slot: "folders", ui: { trigger: "grow max-w-36! shrink-0" } }
      : {
          ...f,
          slot: "data"
        }
  )
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
  <NuxtLayout name="backpack-layout">
    <template #folder>
      <UDashboardPanel resizable>
        <UTabs
          v-model:model-value="folderId"
          variant="lift"
          :ui="{
            trigger: 'flex flex-nowrap',
            list: 'rounded-tablist w-full',
            content:
              'h-[87vh] max-h-[87vh] overflow-y-auto rounded-tl-4xl! bg-p0 drop-shadow-black/7',
            leadingIcon: 'absolute! hidden',
            root: 'w-full pt-6.5'
          }"
          :content="true"
          size="lg"
          color="base"
          :items="folderItems"
          value-key="id"
          @update:model-value="onFolderUpdate($event)">
          <template #trailing="{ item }">
            <UPopover
              v-if="item.id === 'folders'"
              :content="{
                side: 'bottom',
                sideOffset: 12
              }"
              :ui="{
                content:
                  'border-t-none! w-70 translate-x-2 py-1.5 pr-1.5 pl-1 shadow-sm drop-shadow-sm drop-shadow-black/6'
              }"
              mode="hover"
              :disabled="!folders.subfolders?.value.length">
              <UButton
                :label="folders.label"
                :ui="{ base: 'w-32 gap-2 px-3' }"
                size="sm"
                color="transparent">
                <template #trailing>
                  <UBadge
                    v-if="folders.subfolders?.value.length"
                    size="xs"
                    :color="
                      /^\/backpack\/folders/.test($route.path) ||
                      routeFolder.location === 'folders'
                        ? 'neutral'
                        : 'primary'
                    "
                    :ui="{
                      base: 'mr-1 -translate-y-[0.5px] pr-1.75 pl-1',
                      label: 'font-semibold'
                    }"
                    :label="`+${folders.subfolders?.value.length}`" />
                </template>
              </UButton>

              <template #content>
                <UButton
                  icon="i-folder"
                  :data-active="/\/backpack\/folders$/.test($route.path)"
                  :to="`/backpack/${folders.id}`"
                  variant="highlight"
                  size="sm_"
                  :ui="{
                    base: 'mb-px w-full max-w-full justify-start active:bg-p1!'
                  }"
                  :label="folders.label"
                  @click="onFolderUpdate(folders.id)" />
                <div class="max-h-110 w-full pl-3.5">
                  <UScrollArea
                    :ui="{
                      root: 'relative flex w-full max-w-full flex-col gap-y-px overflow-x-hidden pl-1 before:absolute before:left-0 before:h-[calc(100%-var(--spacing)*(2)))] before:w-px before:justify-self-center before:bg-p3'
                    }"
                    :items="folders.subfolders?.value">
                    <template #default="{ item: folder }">
                      <UButton
                        :key="folder.id"
                        variant="highlight"
                        size="sm_"
                        :to="`/backpack/${folder.id}`"
                        :label="folder.label"
                        :icon="folder.icons?.icon ?? 'i-folder'"
                        :ui="{
                          label: 'truncate',
                          base: 'w-full max-w-full justify-start',
                          leadingIcon: folder.icons?.class
                        }"
                        @click="onFolderUpdate(folder.id)" />
                    </template>
                  </UScrollArea>
                </div>
              </template>
            </UPopover>
          </template>
          <template #list-leading>
            <div class="relative flex w-64 shrink-0 self-center pr-6 pl-1">
              <div
                class="absolute inset-0 flex -translate-y-6 items-center gap-2">
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
          <template #folders>
            <slot />
          </template>
        </UTabs>
      </UDashboardPanel>
    </template>
  </NuxtLayout>
</template>
