<script lang="ts" setup>
import type { TabValue } from "~/components/pages/library/viewMode"
import { tabData } from "~/components/pages/library/viewMode"
const { variant } = defineProps<{
  variant?: "default" | "label"
}>()
const tab = defineModel<TabValue>("tabModel", { default: 0 })
</script>

<template>
  <template v-if="variant === 'label'">
    <UTabs
      v-model:model-value="tab"
      :items="Object.values(tabData)"
      size="sm"
      :ui="{
        root: 'mt-0.75 inline grow p-0! align-middle',
        list: 'h-7 gap-1 p-0!',
        trigger: 'h-7 self-center px-5 active:text-pc',
        indicator: 'h-7! bg-p0 shadow-none! ring ring-p3 drop-shadow-none!',
        leadingIcon: 'hidden'
      }"
      @update:model-value="(e) => (tab = e as TabValue)">
      <template #leading="{ item }">
        <Icon :name="item.icon" class="size-3.5" />
      </template>
    </UTabs>
  </template>

  <LazyUTabs
    v-else
    v-model:model-value="tab"
    :items="Object.values(tabData)"
    :ui="{
      root: 'inline w-fit! grow-0 align-middle',
      list: 'w-fit gap-2 p-0',
      trigger: 'size-10 self-center px-3',
      indicator: 'size-10! ring-0',
      label: 'hidden'
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
</template>
