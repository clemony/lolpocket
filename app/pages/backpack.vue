<script lang="ts" setup>
import {
  provideBackpack,
  useBackpack,
  useBackpackProvider
} from "~/domain/backpack/useBackpack"
import {
  useFolders,
  usePocketFolderProvider
} from "~/domain/pocket/folder/useFolder"
import { iconSets } from "~~/layers/ui/app/assets/icons/icon-sets"

usePocketFolderProvider()
useBackpackProvider()

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
const state = useBackpackProvider()
const store = pocketStore()
const {
  onFolderUpdate,
  sidebarCollapsed,
  toggleSidebar,
  sidebarFolderRefs,
  view,
  folderId
} = provideBackpack(state)

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
</script>

<template>
  <Layout>
    <UDashboardGroup
      unit="rem"
      class="top-(--ui-header-height) max-h-[calc(100vh-var(--ui-header-height)] w-full flex-1 gap-3 overflow-hidden px-6">
      <BackpackSidebar />
      <UDashboardPanel resizable>
        <UPage class="size-full max-h-full overflow-hidden">
          <div class="size-full max-h-(--ui-header-height)">
            <h1 class="text-4xl">
              {{ routeFolder.label }}
            </h1>
          </div>
          <UPageBody
            :ui="{
              base: 'mx-auto my-0! w-full max-w-full overflow-hidden py-0!'
            }">
            <UTabs
              v-model:model-value="folderId"
              variant="lift"
              :ui="{
                list: 'z-4! -mt-2.5 flex h-12 w-full items-center',
                trigger: 'h-12 max-w-22 rounded-t-3xl',
                label: 'hidden',
                content: 'mt-2.5 w-full',
                root: 'w-full',
                indicator: ''
              }"
              :content="true"
              size="md"
              :items="folderItems"
              value-key="id"
              @update:model-value="onFolderUpdate($event)">
              <template #leading="{ item }">
                <Tooltip :label="item.label">
                  <div class="anchor absolute inset-0 size-full">
                    <Icon
                      :name="String(item.icon)"
                      :class="
                        cn(
                          'size-4.5 opacity-40 group-hover/trigger:opacity-100 group-data-[state-active]/trigger:opacity-100',
                          { 'opacity-100': item.id === folderId }
                        )
                      " />
                  </div>
                </Tooltip>
              </template>
              <template #list-leading>
                <div class="flex items-center gap-4 pr-16 pb-7">
                  <UButton
                    variant="ghost"
                    color="base"
                    size="md"
                    :ui="{
                      base: cn('anchor', {
                        '': sidebarCollapsed
                      }),
                      leadingIcon: 'size-4.5'
                    }"
                    :icon="
                      sidebarCollapsed
                        ? 'i-icon-park-outline-left-expand'
                        : 'i-icon-park-outline-left-bar'
                    "
                    @click="toggleSidebar()" />
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
