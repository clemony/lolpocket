<script lang="ts" setup>
import { UCollapsible, UPopover } from "#components"
import { toolbarButtons } from "~/domain/pocket/ui/toolbarButtons"
import type { TreeItemExt } from "~/domain/pocket/ui/treeItems"

import { VueDraggable } from "vue-draggable-plus"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { defaultPocketLinks } from "~/domain/pocket/manage/defaultFolders"

const { items } = defineProps<{
  items: ComputedRef<TreeItemExt[]>
}>()

const { collapsed } = useBackpack()
const list = shallowRef<number[]>([])

const selected = shallowRef<TreeItemExt | undefined>()
const search = shallowRef<string>("")

//pocketStore().pockets = []

const open = ref<boolean[]>([])

watchEffect(() => {
  open.value = items.value.map(
    (item, index) => open.value[index] ?? !!item.children?.length
  )
})

const setOpen = (index: number, value: boolean) => {
  open.value[index] = value
}

const folderContent = computed(() => (open.value ? UCollapsible : UPopover))
</script>

<template>
  <UDashboardSidebar
    v-model:collapsed="collapsed"
    collapsible
    resizable
    :ui="{
      header: 'mb-2',
      root: 'relative h-[calc(100vh-var(--ui-header-height))] min-h-[calc(100vh-var(--ui-header-height))] divide-y divide-p3 duration-200 ease-out',
      footer: cn(
        'mb-1! flex h-auto w-full flex-wrap gap-1.5 px-3',
        collapsed ? 'flex-col justify-center' : 'items-center'
      ),
      body: 'flex flex-col gap-1 px-3'
    }"
    :collapsed-size="4.4"
    :default-collapsed="false"
    :default-size="22">
    <template #header>
      <LazyUPopover v-if="collapsed">
        <UButton variant="ghost" icon="i-search" square />
      </LazyUPopover>
      <LazyBackpackPocketSearch v-else />
    </template>

    <VueDraggable :model-value="list" class="w-full py-4">
      <div
        v-for="(item, i) in items.value"
        :key="i"
        :value="item"
        class="w-full">
        <TreeItemButton
          type="folder"
          :item
          :open="open[i]"
          v-bind="item"
          @update:label="(e) => user().updateFolderName(item.id, e)"
          @update:open="setOpen(i, $event)" />

        <component
          :is="folderContent"
          :open="open[i]"
          :ui="{
            content: 'my-0 w-full pl-4.5'
          }"
          :default-open="
            !!item.children && !!item.children?.length && !collapsed
          ">
          <template #content>
            <VueDraggable
              v-if="item.children && item.children?.length"
              class="grid w-full auto-rows-fr gap-y-0.5 border-l border-l-p3 py-1 pl-1"
              :model-value="item.children"
              :group="{ name: 'pocket' }">
              <TreeItemButton
                v-for="(child, ix) in item.children"
                :key="ix"
                :item="child"
                @update:label="
                  (e) => pocketStore().updatePocketName(child.key, e)
                " />
            </VueDraggable>
            <div v-else class="flex w-full items-center py-3 pl-6">
              <span class="text-xs italic">Empty</span>
            </div>
          </template>
        </component>
      </div>
    </VueDraggable>
    <UButton
      v-for="(item, i) in defaultPocketLinks"
      :key="i"
      :icon="item.icon"
      block
      :label="item.label"
      :ui="{ base: 'h-9 max-h-9' }"
      variant="ghost"
      :to="item.to"></UButton>
    <template #footer>
      <Tooltip
        v-for="(button, i) in toolbarButtons"
        :key="i"
        :disabled="!collapsed && i === 0"
        :label="button.label">
        <UButton v-bind="button" />
      </Tooltip>
    </template>

    <UDashboardResizeHandle
      :ui="{
        base: 'absolute inset-y-0 right-0 border-r border-r-p3 after:absolute after:inset-y-0 after:w-px after:border-r after:border-r-p3'
      }" />
  </UDashboardSidebar>
</template>
