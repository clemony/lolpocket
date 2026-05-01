<script lang="ts" setup>
import { UCollapsible, UPopover } from "#components"
import type { PocketButton } from "~/domain/pocket/ui/pocketFolderItems"
import { toolbarItems } from "~/domain/pocket/ui/toolbarItems"

import type { ButtonProps } from "@nuxt/ui"
import { VueDraggable } from "vue-draggable-plus"
import { useBackpack } from "~/domain/backpack/useBackpack"
import { defaultPocketLinks } from "~/domain/pocket/manage/defaultFolders"

const { items } = defineProps<{
  items: ComputedRef<PocketButton[]>
}>()

const { collapsed } = useBackpack()
const list = shallowRef<number[]>([])

const selected = shallowRef<PocketButton | undefined>()
const search = shallowRef<string>("")

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
      footer: 'h-18 px-3',
      root: 'group/sidebar relative h-[calc(100vh-var(--ui-header-height))] min-h-[calc(100vh-var(--ui-header-height))] data-[dragging=false]:duration-200 data-[dragging=false]:ease-out',
      header: cn(
        'flex h-18 flex-wrap gap-2 px-3',
        collapsed ? 'flex-col justify-center h-max! py-4' : 'items-center'
      ),
      body: 'flex flex-col gap-1 px-0 pt-0'
    }"
    :collapsed-size="4"
    :max-size="30"
    :default-collapsed="false"
    :default-size="22">
    <template #header>
      <UFieldGroup :orientation="!collapsed ? 'horizontal' : 'vertical'">
        <Tooltip :label="toolbarItems?.new?.label" :disabled="!collapsed">
          <UButton v-bind="toolbarItems.new" />
        </Tooltip>
        <Tooltip :label="toolbarItems?.random?.label">
          <UButton v-bind="toolbarItems.random" :square="collapsed">
            <SparkleIcon
              class="absolute size-4 text-nc opacity-0 transition-opacity duration-500 group-hover/btn:scale-110 group-hover/btn:text-p0 group-hover/btn:opacity-100" />
          </UButton>
        </Tooltip>
      </UFieldGroup>
      <Tooltip :label="toolbarItems?.folder?.label">
        <UButton v-bind="toolbarItems.folder" />
      </Tooltip>
    </template>
    <div class="flex items-center gap-1.5 border-y border-y-p3 px-3 py-2">
      <LazyBackpackPocketSearch :collapsed />
    </div>
    <VueDraggable :model-value="list" class="w-full p-2">
      <div
        v-for="(item, i) in items.value"
        :key="i"
        :value="item"
        class="w-full">
        <template v-if="!collapsed">
          <PocketFolderButton
            type="folder"
            :item
            :open="open[i]"
            v-bind="item"
            @update:label="
              (e: string) => user().updateFolderName(String(item.id), e)
            "
            @update:open="setOpen(i, $event)" />

          <UCollapsible
            :open="open[i]"
            :ui="{
              content: 'my-0 w-full pl-5.5'
            }"
            :default-open="!!item.children && !!item.children?.length">
            <template #content>
              <BackpackSidebarFolderContent :item="item" />
            </template>
          </UCollapsible>
        </template>
        <UPopover v-else :content="{ side: 'right', align: 'start' }">
          <PocketFolderButton
            v-if="collapsed"
            type="folder"
            :item
            :open="open[i]"
            v-bind="item"
            @update:label="
              (e: string) => user().updateFolderName(String(item.id), e)
            "
            @update:open="setOpen(i, $event)" />
          <template #content>
            <BackpackSidebarFolderContent collapsed :item="item" />
          </template>
        </UPopover>
      </div>
    </VueDraggable>
    <div
      class="grid w-full auto-cols-auto auto-rows-auto place-items-center space-y-1.5 px-2">
      <HintTooltip
        v-for="(item, i) in defaultPocketLinks"
        :key="i"
        side="right"
        as-child
        :label="item.label"
        :disabled="!collapsed">
        <UButton
          :icon="item.icon"
          :square="collapsed"
          block
          :label="!collapsed ? item.label : undefined"
          :ui="{ base: !collapsed ? 'h-9 max-h-9 w-full px-3.5' : '' }"
          :variant="collapsed ? 'outline' : 'ghost'"
          :to="item.to" />
      </HintTooltip>
    </div>
    <UDashboardResizeHandle
      :ui="{
        base: 'absolute inset-y-0 right-0 border-r border-r-p3 after:absolute after:inset-y-0 after:w-px after:border-r after:border-r-p3'
      }" />
  </UDashboardSidebar>
</template>
