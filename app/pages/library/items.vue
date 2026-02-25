<script lang="ts" setup>
import { LibraryItemGrid } from "#components"
import { itemQuotes } from "#shared/constants/items/itemQuotes"
import { rankToItem } from "#shared/constants/items/rankToItem"
import type { ArrayOrNested, TabsItem } from "@nuxt/ui"
import type { TabValue } from "~/components/pages/library/items/ui/viewMode"
import { tabData } from "~/components/pages/library/items/ui/viewMode"

definePageMeta({
  title: "Items",
  description: "A full list of items and stat details.",
  icon: "i-ability-melee",
  navClass: "size-5",
  path: "/items",
})

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

const quote = computed(() => getRandom(itemQuotes))
const tabModel = shallowRef<TabValue>(0)
const component = computed(() =>
  tabModel.value === 0
    ? defineAsyncComponent(
        () => import("~/components/pages/library/items/LibraryItemGrid.vue")
      )
    : defineAsyncComponent(
        () => import("~/components/pages/library/items/LibraryItemTable.vue")
      )
)

const nav = computed(() => libraryNav.filter((l) => l.to !== useRoute().path))
</script>

<template>
  <NuxtLayout name="collapse-aside">
    <template #aside>
      <ItemFilterSidebar
        v-model:tab-model="tabModel"
        :nav
        @update-tab="(e) => (tabModel = e)" />
    </template>
    <template #toolbar>
      <LazyItemFilterToolbar v-model:tab-model="tabModel" :nav />
    </template>
    <template #toolbar-left>
      <ItemFloatingSearch />
    </template>

    <template #toolbar-center>
      <!-- view -->
      <ItemViewToggle
        collapsed
        size="xl"
        @update:tab-model="(e: TabValue) => (tabModel = e)" />
    </template>
    <template #quote>
      {{ quote }}
    </template>

    <div
      class="sticky top-15 z-2 mb-0 -ml-[5px] grid h-fit w-[calc(100%+10px)] bg-p0 pt-4 pb-5">
      <UTabs
        v-model:model-value="is().filters.rank"
        :items="ranks"
        size="md"
        variant="ghost"
        color="neutral"
        :ui="{
          root: 'w-max ',
          indicator: 'duration-150 ',
          trigger: 'w-max px-6',
        }" />
    </div>
    <div v-auto-animate :class="cn('size-full grow')">
      <component :is="component" v-if="is().filtered.length" />
      <div v-else v-auto-animate class="grid w-full place-items-center">
        <LazyUEmpty
          size="sm"
          icon="i-lucide-package-x"
          class="mb-40 translate-y-1/2"
          title="Sold out"
          description="Looks like we've found no items for these filters."
          :actions="[
            {
              icon: 'i-lucide-refresh-cw',
              label: 'Reset',
              color: 'neutral',
            },
          ]"
          @click="is().clearFilters()" />
      </div>
    </div>
  </NuxtLayout>
</template>
