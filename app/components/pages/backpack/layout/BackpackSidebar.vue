<script lang="ts" setup>
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolders } from "~/domain/pocket/folder/useFolder"
import { asFolder } from "~/domain/pocket/helpers/typeAssert"
import type { PocketProps } from "~/domain/pocket/types"
import { collapseAllBtn, newFolderBtn } from "~/domain/pocket/ui/toolbarItems"

const { sidebarCollapsed, search, folderId } = useBackpack()
const tab = computed(() => useBackpack().activeTab.value)
const list = shallowRef<number[]>([])
watch(
  () => folderId.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
const selected = shallowRef<PocketProps | undefined>()

const open = ref<boolean[]>([])
const { complete, defaults } = useFolders()

const setOpen = (index: number, value: boolean) => {
  open.value[index] = value
}

const buttons = computed(() =>
  sidebarCollapsed.value === true
    ? [newFolderBtn]
    : [newFolderBtn, collapseAllBtn.value]
)
const tabs = [
  {
    label: "Backpack",
    icon: "i-folder",
    value: "all",
    slot: "all"
  }
]
</script>

<template>
  <UDashboardSidebar
    v-model:collapsed="sidebarCollapsed"
    collapsible
    resizable
    :ui="{
      footer: 'h-18',
      root: 'group/sidebar @container relative h-[89vh] gap-5 pb-2.5 data-[dragging=false]:duration-200 data-[dragging=false]:ease-out',
      header: cn(
        'z-1 flex h-auto flex-wrap gap-0 overflow-visible border-none bg-transparent px-0',
        sidebarCollapsed
          ? 'flex-col justify-center h-max! py-2.5'
          : 'items-center '
      ),
      body: cn(
        'overflowx-x-hidden p-0!',

        sidebarCollapsed ? 'items-center' : 'pt-0'
      )
    }"
    :sidebar-collapsed-size="4"
    :max-size="30"
    :default-collapsed="false"
    :default-size="22">
    <template #header>
      <LazyBackpackPocketSearch size="xl" :sidebar-collapsed />
    </template>

    <UTabs
      variant="lift"
      default-value="all"
      :items="tabs"
      :ui="{
        content: 'shadow-sm shadow-black/6',
        trigger:
          'h-12 grow-0 rounded-t-3xl px-3 opacity-100! disabled:opacity-100',
        label: 'grow-0 pr-2 text-md font-semibold opacity-100',
        leadingIcon: 'ml-1 size-4.5 opacity-100',
        list: 'flex h-12 w-full items-center'
      }"
      size="md">
      <template #list-trailing>
        <div class="flex grow items-center justify-between">
          <NewPocketOptionsMenu
            size="sm_"
            label="pocket"
            variant="ghost"
            :ui="{
              base: 'shrink-0 rounded-xl pr-1.5 pl-2 shadow-none aria-[expanded=true]:brightness-110!',
              label: ''
            }" />
          <div
            :class="
              cn(
                'sticky top-0 z-1 flex grow border-2 border-b border-transparent bg-p0 bg-clip-border py-1 backdrop-blur-md',
                sidebarCollapsed
                  ? 'mb-1 flex-col border-b-p3 pb-4'
                  : 'items-center justify-between border-b-p2 px-1'
              )
            ">
            <div
              :class="
                cn(
                  'flex',
                  sidebarCollapsed
                    ? 'mb-1 flex-col border-b-p3 pb-4'
                    : 'items-center'
                )
              ">
              <Tooltip v-for="(btn, i) in buttons" :key="i" :label="btn?.label">
                <UButton
                  v-bind="btn"
                  :label="undefined"
                  square
                  :ui="{
                    base: 'rounded-xl',
                    leadingIcon: sidebarCollapsed ? 'size-5' : 'size-4.5'
                  }"
                  size="sm_" />
              </Tooltip>
            </div>
          </div>
        </div>
      </template>
      <template #trailing="{ item }">
        <Icon
          name="i-up"
          class="size-4 opacity-50 group-hover/trigger:opacity-100" />
      </template>
      <template #all>
        <div
          :class="
            cn('relative flex grow flex-col overflow-x-hidden', {
              'items-center': sidebarCollapsed,
              '': !sidebarCollapsed
            })
          ">
          <div class="overflow-x-hidden px-2 py-3">
            <template v-if="!sidebarCollapsed && folderId !== 'search'">
              <LazyDefaultPocketFolder :sidebar-collapsed />
              <LazyBackpackSidebarFolder
                v-for="item in defaults.filter((f) => f.id !== 'all')"
                :key="item.id"
                :sidebar-collapsed
                :item="item" />
            </template>
            <BackpackSidebarSearchResults v-else-if="folderId === 'search'" />
            <template v-else>
              <LazyBackpackFolderPopover
                v-for="folder in complete"
                :key="folder?.id"
                :item="folder" />
            </template>
          </div>
        </div>
      </template>
    </UTabs>

    <UDashboardResizeHandle
      :ui="{
        base: 'absolute inset-y-0 right-0 border-0'
      }" />
    <!--     <template #footer>
      <BackpackNavigation v-if="!sidebarCollapsed" />
    </template> -->
  </UDashboardSidebar>
</template>
