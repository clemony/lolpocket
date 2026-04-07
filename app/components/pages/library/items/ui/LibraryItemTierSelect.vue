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
        "not-active:bg-p1    not-active:ring-transparent not-active:size-9 duration-0! not-active:delay-50 active:bg-neutral  not-active:px-0 not-active:shadow-xs active:w-max   hover:not-active:border-p4/60 hover:not-active:bg-p2 transition-colors duration-50 hover:not-active:inset-shadow-xs not-active:noise not-active:ring-p3 not-active:ring-inset mr-2 not-active:ring not-active:anchor group/t",
      label: "",
      leadingIcon:
        "size-3.5 **:stroke-[2.6] text-pc opacity-80  transition-opacity duration-50 group-hover/t:opacity-100"
    }
  },
  ...ranks.value
])

const radio = computed<RadioGroupItem[]>(() => ranks.value)

//i-solar-ranking-linear
const { filters } = storeToRefs(is())
</script>

<template>
  <LazySelectPopover
    v-if="collapsed || smallerThanLg"
    v-model:model-value="is().filters.rank"
    legend="Item Quality"
    :content="{
      side: 'left',
      align: 'center'
    }">
    <template #default="{ open }">
      <div
        :class="cn('rounded-full', open ? '' : 'tooltip tooltip-left')"
        data-tip="Item Quality">
        <UButton
          size="xl"
          color="base"
          icon="i-lucide-list-ordered"
          :ui="{
            base: 'tooltip tooltip-left rounded-full'
          }"
          square />
      </div>
    </template>

    <template #content>
      <LazyListbox
        v-model:model-value="filters.rank"
        :multiple="false"
        value-key="value"
        :items="radio"
        icon="i-circle-dot">
        <ListboxContent class="space-y-0.5 px-0">
          <ListboxItem
            v-for="item in ranks"
            :key="item?.value"
            as-child
            :value="item.value ?? 0">
            <UButton
              :label="item.label"
              size="sm"
              active-variant="solid"
              :ui="{
                base: cn(
                  'h-7.5 max-h-7.5 gap-2 px-2',
                  filters.rank === item.value
                    ? 'bg-p1/60 shadow-none rounded-md border-0'
                    : ''
                ),
                trailingIcon: cn('size-4.5')
              }"
              :trailing-icon="filters.rank === item.value ? 'i-tick' : ''"
              variant="soft"
              :active="filters.rank === item.value" />
          </ListboxItem>
        </ListboxContent>
      </LazyListbox>
    </template>
  </LazySelectPopover>
  <UTabs
    v-else
    v-model:model-value="filters.rank"
    :items="tabs"
    size="md"
    variant="pill"
    color="neutral"
    :ui="{
      root: '-ml-px flex! grow-0! justify-self-start',
      indicator: 'rounded-lg ring-0 duration-150',
      list: 'w-fit gap-0 justify-self-start',
      trigger: 'w-fit shrink rounded-xl px-6 not-active:hover:text-pc!'
    }" />
</template>
