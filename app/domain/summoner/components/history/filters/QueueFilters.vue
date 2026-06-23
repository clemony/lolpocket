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
      root: cn(
        'relative w-full before:absolute before:inset-0 before:z-0 before:size-full before:rounded-5xl before:bg-p1/60',
        props?.ui?.root,
        props.class
      ),
      list: 'z-1 rounded-5xl border border-(--account-dark)/6 bg-(--account-color)/20 px-2 py-1.75! ring-0 inset-shadow-(--account-dark)/20',
      indicator: cn(
        'h-10.5 bg-(--account-color) inset-ring-(--account-dark)/20'
      ),
      label:
        'group-active/trigger:font-semibold group-active/trigger:text-white! group-active/trigger:text-shadow-[0px_1px_1px_--alpha(var(--account-dark)_/_50%)]',
      trigger: cn('h-10.5! text-pc opacity-100', props?.ui?.trigger),
    }"
    :default-value="0"
    :items="asTabsItems(queues)" />
</template>
