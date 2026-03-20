<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui"

const { item } = defineProps<{
  item: Item
}>()

const items = computed<TabsItem[]>(() => {
  const tabs = [
    { label: "Base", value: "base", slot: "base" },
    {
      label: "",
      value: "",
      slot: "separator" as const,
      disabled: true,
      as: "span",
      ui: {
        trigger:
          "grow! pointer-events-none h-1/2 self-start border-b border-b-n3/70 opacity-100!",
        label: ""
      }
    }
  ]

  if (!item || !item?.ornnUpgrade) return tabs

  return [
    ...tabs,
    { label: "Masterwork", value: "masterwork", slot: "masterwork" }
  ]
})

const modelValue = shallowRef<string>("base")

const { data, status, execute } = useFetch<Item>(
  () => `/cdn/items/${item.ornnUpgrade}.json`,
  {
    server: false,
    lazy: true,
    immediate: false,
    key: () => `item-${item.ornnUpgrade}`
  }
)

watch(
  () => modelValue.value,
  (v) => {
    if (v === "masterwork") execute()
  }
)

const stats = computed<Record<string, number> | undefined>(() =>
  modelValue.value === "masterwork" ? data.value?.stats : item?.stats
)
</script>

<template>
  <div class="h-max w-full">
    <UTabs
      v-model:model-value="modelValue"
      size="xs"
      variant="ghost"
      color="neutral"
      :items
      :ui="{
        content: 'h-max',
        list: 'justify-between gap-2 px-0',
        indicator: 'rounded-lg bg-transparent',
        trigger:
          'w-max grow-0 rounded-lg px-0 text-2xs font-semibold uppercase transition-colors duration-300 ease-in active:**:text-nc!'
      }"
      :disabled="!item?.ornnUpgrade">
      <template #separator-label>
        <Separator
          color="neutral"
          :ui="{ root: 'w-full', separator: 'h-px w-full bg-n3/70' }" />
      </template>
    </UTabs>
    <LazyItemStats class="mt-2 mb-1 **:text-nc" :stats />
  </div>
</template>
