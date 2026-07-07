<script setup lang="ts">
import type { TabsProps } from "@nuxt/ui"
import { queues } from "~/domain/summoner/constants/queues"
import { asTabsItems } from "~/types/typeAssert"
const props = withDefaults(defineProps<TabsProps>(), {
  size: "xl",
  type: "tabs",
})
const store = matchFilter()
const { filter } = storeToRefs(store)

const queueModel = computed({
  get: () => filter?.value.queue,
  set: (val) => store.setFilter("queue", val),
})
</script>

<template>
  <UTabs
    v-bind="props"
    v-model:model-value="queueModel"
    :ui="{
      ...props?.ui,

      list: 'justify-around bg-p0/50 px-0 inset-shadow-sm inset-ring-p2',
      trigger: 'active:pointer-events-none',
      indicator:
        'h-13 rounded-5xl shadow-black/6 inset-ring-p2 drop-shadow-none',
      label:
        'shiny-tab-label bg-clip-text group-hover/trigger:font-semibold group-active/trigger:font-semibold group-active/trigger:text-pc!',
    }"
    :default-value="0"
    :items="asTabsItems(queues)" />
</template>
