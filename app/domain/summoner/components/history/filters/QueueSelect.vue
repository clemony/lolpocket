<script lang="ts" setup>
import type { SelectProps } from "@nuxt/ui"
import { queues } from "~/domain/summoner/constants/queues"
import { asSelectItems } from "~/types/typeAssert"
const props = withDefaults(defineProps<SelectProps>(), {
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
  <USelect
    v-bind="props"
    v-model:model-value="queueModel"
    :content="{ position: 'item-aligned' }"
    :items="asSelectItems(queues)" />
</template>
