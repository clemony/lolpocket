<script lang="ts" setup>
import type { TabValue } from "~/components/pages/library/items/ui/viewMode"
import { tabData } from "~/components/pages/library/items/ui/viewMode"

const tab = defineModel<TabValue>("tabModel", { default: 0 })

const tabValue = computed(() => tab.value === 0)
</script>

<template>
  <LazyUTabs
    v-model:model-value="tab"
    :items="Object.values(tabData)"
    :ui="{
      root: 'inline w-fit! grow-0 align-middle',
      list: 'w-fit gap-2 p-0',
      trigger: 'size-10 self-center px-3',
      indicator: 'size-10! ring-0',
      label: 'hidden',
    }"
    variant="ghost"
    color="neutral"
    @update:model-value="(e: TabValue) => (tab = e)">
    <template #leading="{ item }">
      <Tooltip
        :label="item.label"
        class="relative grid size-10 place-items-center">
        <Icon :name="item.icon" class="absolute size-5 **:stroke-[2.2]" />
      </Tooltip>
    </template>
  </LazyUTabs>
  <!--   <LazyTooltip
    class="grid place-items-center"
    :label="`Active view - ${tabData[tab]?.label}`"
    side="right">
    <Toggle
      :ui="{
        leadingIcon: 'size-5 **:stroke-[1.8]',
        base: 'rounded-full drop-shadow-black/4 drop-shadow-md ',
      }"
      square
      size="lg"
      :leading-icon="tabData[tab]?.icon"
      color="p0"
      indicator="hidden"
      :default-value="tabValue"
      @update:model-value="(e) => tab === (e === true ? 0 : 1)" />
  </LazyTooltip> -->
</template>
