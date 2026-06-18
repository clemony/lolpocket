<script setup lang="ts">
import type { SelectProps, TabsProps } from "@nuxt/ui"
interface QueueFiltersProps {
  type?: "tabs" | "select"
  class?: HTMLAttributes["class"]
  tabs?: Pick<TabsProps, "size" | "ui">
  select?: Pick<SelectProps, "size" | "ui" | "placeholder">
}

const props = withDefaults(defineProps<QueueFiltersProps>(), {
  size: "md",
  type: "tabs"
})
const store = matchFilter()
const { filter } = storeToRefs(store)

const queueModel = computed({
  get: () => filter?.value.queue,
  set: (val) => store.setFilter("queue", val)
})
const queues = [
  {
    label: props.type === "tabs" ? "All" : "All Queues",
    value: 0
  },
  {
    label: "Solo",
    value: 420
  },
  {
    label: "Flex",
    value: 440
  },
  {
    label: "Normal",
    value: 400
  }
]
</script>

<template>
  <USelect
    v-if="props.type === 'select'"
    v-bind="select"
    v-model:model-value="queueModel"
    :content="{ position: 'item-aligned' }"
    :items="queues" />
  <UTabs
    v-else-if="props.type === 'tabs'"
    v-bind="tabs"
    v-model:model-value="queueModel"
    :ui="{
      ...props.tabs?.ui,
      root: cn('w-full min-w-54', props.tabs?.ui?.root, props.class),
      trigger: cn('text-pc! opacity-100', props.tabs?.ui?.trigger)
    }"
    :default-value="0"
    :items="queues" />
</template>
