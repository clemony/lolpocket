<script lang="ts" setup>
import type { RadioGroupItem, TabsItem } from "@nuxt/ui"
import { rankToItem } from "~~/shared/constants/items/rankToItem"

const { collapsed } = defineProps<{
  collapsed?: boolean
}>()
const ranks = computed(() =>
  Object.keys(rankToItem).map((k, _) => ({
    value: k as string,
    label: k
  }))
)

const tabs = computed<TabsItem[]>(() => [
  {
    value: "",
    label: is().filters.rank === "" ? "All" : "",
    icon: is().filters.rank === "" ? "" : "i-x",
    slot: "all" as const,
    ui: {
      trigger:
        "not-active:bg-p1  not-active:shadow-xs active:w-max active:px-5  border-neutral border hover:not-active:border-p4/60 hover:not-active:bg-p2 transition-colors duration-50 hover:not-active:inset-shadow-xs not-active:noise not-active:border-p3/80  mr-2 not-active:ring not-active:anchor group/t",
      label: "",
      leadingIcon:
        "size-3.5 **:stroke-[2.6] text-pc opacity-60 transition-all duration-50 group-hover/t:opacity-100"
    }
  },
  ...ranks.value
])

const radio = computed<RadioGroupItem[]>(() => ranks.value)

//i-solar-ranking-linear
const { filters } = storeToRefs(is())
</script>

<template>
  <SelectPopover
    v-if="collapsed || smallerThanLg"
    v-model:model-value="is().filters.rank"
    :content="{
      side: 'left',
      align: 'center'
    }">
    <template #default="{ open }">
      <div
        :class="cn('rounded-full', open ? '' : 'tooltip tooltip-left')"
        data-tip="Item Tier">
        <UButton
          size="xl"
          color="p0"
          icon="i-lucide-list-ordered"
          :ui="{
            base: 'tooltip tooltip-left rounded-full'
          }"
          square />
      </div>
    </template>

    <template #content>
      <URadioGroup
        v-model:model-value="filters.rank"
        value-key="value"
        :items="radio"
        @entry-focus.prevent />
    </template>
  </SelectPopover>
  <UTabs
    v-else
    v-model:model-value="filters.rank"
    :items="tabs"
    size="md"
    variant="ghost"
    color="neutral"
    :ui="{
      root: 'w-fit translate-y-px',
      indicator: 'ring-0 duration-150',
      trigger: 'w-min px-2'
    }" />
</template>
