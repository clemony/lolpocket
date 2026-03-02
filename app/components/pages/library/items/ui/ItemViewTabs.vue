<script lang="ts" setup>
import type { TabValue } from "~/components/pages/library/items/ui/viewMode"
import { tabData } from "~/components/pages/library/items/ui/viewMode"

const tab = defineModel<TabValue>("tabModel", { default: 0 })
</script>

<template>
  <div class="-my-2 inline-flex flex-nowrap items-center gap-3 pl-1">
    <span class="align-bottom text-sm leading-6 font-medium">View:</span>
    <UTabs
      v-model:model-value="tab"
      :items="Object.values(tabData)"
      size="sm"
      :ui="{
        root: 'inline w-fit! grow-0 align-middle',
        list: 'w-fit gap-1 p-0',
        trigger: 'w-fit self-center px-3',
        indicator:
          'rounded-[0.45rem] border-b border-p2 shadow-none! ring ring-p3 drop-shadow-none!',
        leadingIcon: 'hidden',
      }"
      variant="ghost"
      @update:model-value="(e) => (tab = e as TabValue)">
      <template #default="{ item }">
        <span
          :class="
            cn('font-normal', { 'font-semibold': item.value === tabModel })
          ">{{ item.label }}</span>
      </template>
    </UTabs>
  </div>
</template>
