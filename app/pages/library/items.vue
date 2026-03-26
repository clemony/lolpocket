<script lang="ts" setup>
import { itemQuotes } from "#shared/constants/items/itemQuotes"
import { rankToItem } from "#shared/constants/items/rankToItem"
import type { ArrayOrNested, CheckboxGroupItem, TabsItem } from "@nuxt/ui"
import type { TabValue } from "~/components/pages/library/viewMode"
import { statIndex } from "~~/shared/constants/common/stat-index"
import { itemTags } from "~~/shared/constants/items/itemTags"

const emit = defineEmits(["toggleSidebar", "updateTab"])

definePageMeta({
  title: "Items",
  description: "A full list of items and stat details.",
  icon: "i-lucide-sword",
  iconFill: "i-lp-sword-fill",
  prefix: "Library",
  class: "scale-110 **:stroke-2!",
  order: 1
})

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

const collapsed = useState<boolean>("collapsed-state", () => false)
const toggleLeft = useToggle(collapsed)

const { filters } = storeToRefs(is())

const items = computed<Record<string, CheckboxItem[]>>(() => ({
  stats: Object.values(statIndex)
    .filter((s) => s.group !== "champion")
    .map((s) => ({
      value: s.id,
      label: s.name,
      icon: `i-stat-${s.id}`,
      color: s.color
    })),
  tags: Object.values(itemTags).map((t) => ({
    value: t.id,
    label: t.name,
    icon: t.icon,
    color: t.color
  }))
}))
</script>

<template>
  <NuxtLayout name="collapse-aside">
    <template #aside>
      <ItemFilterSidebar :items />
    </template>
    <template #toolbar>
      <!--  <ViewToggle @update:tab="(e: TabValue) => (tabModel = e)" /> -->
    </template>
    <template #search-content>
      <!-- search -->
      <LazyLibrarySearch
        :ui="
          {
            base: 'rounded-xl focus-within:ring-0!',
            clear: {
              base: 'padding-2 not-before:*:z-1 rounded-full opacity-90 ring-0 outline-nc/90 **:text-pc! before:absolute before:z-0 before:size-4 before:rounded-full before:bg-n5 hover:bg-transparent! hover:opacity-100'
            }
          } as InputClearUi
        "
        @update:model-value="(e) => (filters.query = e)" />
    </template>
    <template #toolbar-content>
      <LazyItemFilterToolbar :items />
    </template>

    <template #links>
      <!-- view -->
      <ViewToggle
        variant="label"
        @update:tab-model="(e: TabValue) => (tabModel = e)" />
    </template>

    <template #quote>
      {{ quote }}
    </template>

    <div
      v-if="!collapsed && !smallerThanLg"
      v-auto-animate
      class="sticky top-15 z-2 -mt-6 mb-0 -ml-[5px] flex h-18 w-[calc(100%+10px)] shrink-0 items-center justify-start gap-2 bg-p0 px-1">
      <LibraryItemTierSelect />
    </div>

    <div v-auto-animate class="size-full">
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
              ui: {
                base: 'pr-4 pl-3.25',
                leadingIcon: 'text-nc'
              },
              color: 'neutral'
            }
          ]"
          @click="is().clearFilters()" />
      </div>
    </div>
  </NuxtLayout>
</template>
