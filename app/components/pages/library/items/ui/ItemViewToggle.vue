<script lang="ts" setup>
import { LibraryItemGrid, LibraryItemTable } from "#components"
const { collapsed } = defineProps<{
  collapsed?: boolean
}>()

const emit = defineEmits(["updateTab"])

type TabValue = 0 | 1
const tabs = shallowRef<TabValue>(0)
const tabData = [
  {
    value: 0 as TabValue,
    icon: "i-mingcute-layout-grid-fill",
    label: "Grid",
    component: LibraryItemGrid,
  },
  {
    value: 1 as TabValue,
    icon: "i-lucide-list",
    label: "Table",
    component: LibraryItemTable,
  },
]

const activeTab = computed(
  () => tabData.find((v) => v.value === tabs.value) ?? tabData[0]
)

const collapsedToggle = computed<boolean>({
  get: () => tabs.value === 1,
  set: (isTable) => {
    tabs.value = isTable ? 1 : 0
    emit("updateTab", isTable ? LibraryItemTable : LibraryItemGrid)
  },
})

function onTabChange(value: number | string | undefined) {
  tabs.value = Number(value) === 1 ? 1 : 0
  emit("updateTab", activeTab.value?.component)
}
</script>

<template>
  <div
    v-if="!collapsed"
    class="-my-2 inline-flex flex-nowrap items-center gap-3 pl-1">
    <span class="align-bottom text-sm leading-6 font-medium">View:</span>
    <UTabs
      :model-value="tabs"
      :items="Object.values(tabData)"
      size="sm"
      :ui="{
        root: 'w-fit!  inline align-middle grow-0 ',
        list: 'w-fit p-0 gap-1',
        trigger: 'w-fit self-center px-3',
        indicator:
          'rounded-[0.45rem] border-b border-p2 ring ring-p3 shadow-none! drop-shadow-none! ',
        leadingIcon: 'hidden',
      }"
      variant="ghost"
      :default-value="tabs"
      @update:model-value="onTabChange">
      <template #default="{ item }">
        <span
          :class="cn('font-normal', { 'font-semibold': item.value === tabs })"
          >{{ item.label }}</span
        >
      </template>
    </UTabs>
  </div>
  <UTabs
    v-else
    :model-value="tabs"
    :items="Object.values(tabData)"
    :ui="{
      root: 'w-fit!  inline align-middle grow-0 ',
      list: 'w-fit p-0 gap-2',
      trigger: 'size-10 self-center px-3',
      indicator: 'size-10!   ring-0',
      label: 'hidden',
    }"
    variant="ghost"
    color="neutral"
    :default-value="tabs"
    @update:model-value="onTabChange">
    <template #leading="{ item }">
      <Tooltip
        :label="item.label"
        class="relative grid size-10 place-items-center">
        <Icon :name="item.icon" class="absolute size-5 **:stroke-[2.2]" />
      </Tooltip>
    </template>
  </UTabs>
  <!--
  <Tooltip
    v-else
    class="grid place-items-center"
    :label="`Active view - ${activeTab?.label}`"
    side="right">
    <Toggle
      v-model:model-value="collapsedToggle"
      :ui="{ leadingIcon: 'size-5 **:stroke-[1.8]' }"
      square
      :leading-icon="activeTab?.icon"
      variant="ghost"
      indicator="hidden" />
  </Tooltip> -->
</template>
