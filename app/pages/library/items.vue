<script lang="ts" setup>
import { LibraryItemGrid } from "#components"
import type { ArrayOrNested, TabsItem } from "@nuxt/ui"

definePageMeta({
  title: "Items",
  description: "A full list of items and stat details.",
  icon: "i-ability-melee",
  navClass: "size-5",
})

const quote = computed(() => getRandom(itemQuotes))

const ranks = computed<ArrayOrNested<TabsItem>>(() => [
  {
    value: "",
    label: is().filters.rank === "" ? "All" : "",
    icon: is().filters.rank === "" ? "" : "i-x",
    slot: "all" as const,
    ui: {
      trigger:
        "not-active:bg-p1  not-active:sh-xs active:w-max active:px-5  border-neutral border hover:not-active:border-p4/60 hover:not-active:bg-p2 transition-colors duration-50 hover:not-active:iss-xs not-active:noise not-active:border-p3/80  mr-2 not-active:ring not-active:anchor group/t",
      label: "",
      leadingIcon:
        "size-3.5 **:stroke-[2.6] text-pc opacity-60 transition-all duration-50 group-hover/t:opacity-100",
    },
  },
  ...Object.keys(rankToItem).map((k) => ({
    value: k,
    label: k,
  })),
])

const tabModel = shallowRef<Component>(LibraryItemGrid)

const open = shallowRef<boolean>(true)
</script>

<template>
  <UPage v-auto-animate class="pl-1">
    <template #left>
      <UPageAside>
        <ItemFilterSidebar @update-tab="(e) => (tabModel = e)" />
      </UPageAside>
    </template>
    <UPageHeader title="Items" :description="quote" headline="Library">
      <template #headline>
        <div class="flex items-center gap-1">
          <UButton
            size="2xs"
            square
            variant="ghost"
            :icon="open ? 'i-collapse' : 'i-expand'" />
          <span>Library</span>
        </div>
      </template>
      <template #links>
      </template>
    </UPageHeader>
    <UPageBody>
      <div
        class="sticky top-15 z-2 -mt-4 mb-0 -ml-[5px] w-[calc(100%+10px)] bg-p0 pt-4 pb-5">
        <UTabs
          v-model:model-value="is().filters.rank"
          :items="ranks"
          size="sm"
          variant="ghost"
          color="neutral"
          :ui="{
            root: 'w-max ',
            indicator: 'duration-150',
            trigger: 'w-max px-5',
          }" />
      </div>
      <component :is="tabModel" />
    </UPageBody>
  </UPage>
</template>
