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
      root: cn('relative w-full', props?.ui?.root, props.class),
      list: 'z-1 border border-(--account-dark)/6 bg-(--account-color)/30 ring-0 inset-shadow-(--account-dark)/20',
      indicator: cn('bg-(--account-color) inset-ring-(--account-dark)/20'),
      label:
        'shiny-tab-label bg-clip-text group-hover/trigger:font-semibold group-active/trigger:font-semibold group-active/trigger:text-white!',
      trigger: cn('opacity-100', props?.ui?.trigger),
    }"
    :default-value="0"
    :items="asTabsItems(queues)" />
</template>
