<script lang="ts" setup>
import { LibraryItemGrid, LibraryItemTable } from "#components"
import type { ArrayOrNested, TabsItem } from "@nuxt/ui"

definePageMeta({
  title: "Items",
  layout: false,
  description: "A full list of items and stat details.",
  icon: "i-ability-melee",
  navClass: "size-5",
  path: "/items",
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

const tabs = shallowRef<number>(0)
const tabData = [
  {
    value: 0,
    icon: "i-lucide-layout-grid",
    component: LibraryItemGrid,
  },
  {
    value: 1,
    icon: "i-lucide-table-2",
    component: LibraryItemTable,
  },
]

const collapsed = useState("collapsed-state")

watch(
  () => collapsed.value,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)
</script>

<template>
  <NuxtLayout name="library-dashboard">
    <template #sidebar-left-header>
      <UTabs
        v-model:model-value="tabs"
        :orientation="collapsed ? 'vertical' : 'horizontal'"
        :items="Object.values(tabData)"
        :size="collapsed ? 'md' : 'sm'"
        color="neutral"
        :ui="{
          root: 'grow',
        }"
        :variant="collapsed ? 'outline' : 'pill'"
        :default-value="tabs" />
    </template>
    <template #sidebar-left-body>
      <ItemFilterSidebar :collapsed />
    </template>
    <template #quote>
      {{ quote }}
    </template>

    <div
      class="sticky top-15 z-2 mb-0 -ml-[5px] w-[calc(100%+10px)] bg-p0 pt-4 pb-5">
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
    <div v-auto-animate :class="cn('h-max w-full')">
      <component :is="tabModel" v-if="is().filtered.length" />
      <div v-else class="grid w-full place-items-center">
        <UEmpty
          size="sm"
          icon="i-lucide-package-x"
          class="translate-y-1/2"
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
