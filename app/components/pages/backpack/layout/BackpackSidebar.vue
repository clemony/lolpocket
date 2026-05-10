<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { useFolders } from "~/domain/pocket/folder/useFolder"
import type { PocketProps } from "~/domain/pocket/types"
import { collapseAllBtn, newFolderBtn } from "~/domain/pocket/ui/toolbarItems"

const { collapsed } = useBackpack()
const list = shallowRef<number[]>([])

const selected = shallowRef<PocketProps | undefined>()
const search = shallowRef<string>("")

const open = ref<boolean[]>([])
const { archive, trash, pinned, favorites, all } = useFolders()

/* watchEffect(() => {
  open.value = folders.value.map(
    (item, index) => open.value[index] ?? hasChildren(item)
  )
}) */

const setOpen = (index: number, value: boolean) => {
  open.value[index] = value
}
</script>

<template>
  <UDashboardSidebar
    v-model:collapsed="collapsed"
    collapsible
    resizable
    :ui="{
      footer: 'h-18 px-3',
      root: 'group/sidebar @container relative h-[calc(100vh-var(--ui-header-height))] min-h-[calc(100vh-var(--ui-header-height))] data-[dragging=false]:duration-200 data-[dragging=false]:ease-out',
      header: cn(
        'flex h-16 flex-wrap gap-2 overflow-hidden px-2',
        collapsed
          ? 'flex-col justify-center h-max! py-2.5'
          : 'items-center border-b border-[3]'
      ),
      body: cn('flex flex-col gap-1 px-0 pt-0', { 'items-center': collapsed })
    }"
    :collapsed-size="4"
    :max-size="30"
    :default-collapsed="false"
    :default-size="22">
    <template #header>
      <div
        :class="
          cn('flex h-11 w-full items-center justify-end gap-1.5', {
            'h-max! flex-col justify-start! gap-1': collapsed
          })
        ">
        <LazyBackpackPocketSearch v-if="collapsed" :collapsed />
        <div
          :class="
            cn(
              'fx-depth fx-noise flex h-full items-center gap-1 rounded-xl bg-p1 pl-1 inset-shadow-xs inset-ring inset-ring-p4/30',
              { 'mt-4 h-max! flex-col px-1 py-1': collapsed }
            )
          ">
          <NewPocketButton
            size="sm_"
            :square="collapsed"
            :ui="{
              base: 'rounded-xl',
              label: cn('text-xs', { hidden: collapsed })
            }" />
          <NewPocketOptionsMenu
            :collapsed
            color="tertiary"
            size="sm_"
            :ui="{ base: 'shrink-0 rounded-xl aria-[expanded=true]:bg-p3!' }" />
        </div>
        <Grow />
        <div
          :class="
            cn(
              'flex',
              collapsed
                ? 'mb-1 border-b border-p3 pb-4'
                : 'items-center gap-1 pr-1'
            )
          ">
          <Tooltip
            v-for="(item, i) in [
              newFolderBtn,
              collapsed ? undefined : collapseAllBtn
            ].filter(Boolean) as ButtonProps[]"
            :key="i"
            :label="item?.label">
            <UButton
              v-bind="item"
              :label="undefined"
              square
              :ui="{
                base: 'rounded-xl',
                leadingIcon: collapsed ? 'size-5 **:stroke-[2]' : ''
              }"
              size="sm_"
              :variant="collapsed ? 'ghost' : 'outline'"
              color="primary" />
          </Tooltip>
        </div>
      </div>
    </template>
    <div v-if="!collapsed" :class="cn('flex flex-col gap-1 px-2.5 pt-3')">
      <LazyBackpackPocketSearch :collapsed />
    </div>
    <div
      :class="
        cn('flex w-full flex-col', {
          'items-center gap-3 pt-0': collapsed,
          'gap-1 p-2': !collapsed
        })
      ">
      <template v-if="!collapsed">
        <LazyBackpackSidebarFolder
          v-for="item in [pinned, favorites]"
          :key="item?.id"
          :collapsed
          :item="item" />
        <LazyDefaultPocketFolder :collapsed />
        <LazyBackpackSidebarFolder
          v-for="item in [archive, trash]"
          :key="item?.id"
          :collapsed
          :item="item" />
      </template>
      <template v-else>
        <LazyBackpackFolderPopover
          v-for="folder in all"
          :key="folder.id"
          :item="folder" />
      </template>
    </div>

    <template #footer>
      <BackpackNavigation v-if="!collapsed" />
    </template>

    <UDashboardResizeHandle
      :ui="{
        base: 'absolute inset-y-0 right-0 border-r border-r-p3 after:absolute after:inset-y-0 after:w-px after:border-r after:border-r-p3'
      }" />
  </UDashboardSidebar>
</template>
