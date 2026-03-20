<script lang="ts" setup>
import { itemQuotes } from "#shared/constants/items/itemQuotes"
import { rankToItem } from "#shared/constants/items/rankToItem"
import type { ArrayOrNested, TabsItem } from "@nuxt/ui"
import type { TabValue } from "~/components/pages/library/viewMode"

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
</script>

<template>
  <NuxtLayout name="collapse-aside">
    <template #aside>
      <ItemFilterSidebar
        v-model:tab-model="tabModel"
        @update-tab="(e) => (tabModel = e)" />
    </template>
    <template v-if="collapsed || smallerThanLg" #toolbar>
      <LazyItemFilterToolbar />
    </template>

    <template #links> </template>

    <!--     <template v-if="collapsed || smallerThanLg" #links>
      <div class="relative items-center justify-end">
        <div class="absolute right-0 flex w-90 max-w-90 shrink-0 translate-y-2">
          <LazyLibrarySearch
            variant="outline"
            color="default"
            :ui="{
              root: 'w-full justify-self-end',
              trailing: 'opacity-60 *:-mx-[0.25px]',
              base: 'w-full'
            }" />
        </div>
      </div>
    </template> -->

    <template #quote>
      {{ quote }}
    </template>

    <div
      class="sticky top-15 z-2 -mt-6 mb-0 -ml-[5px] flex h-18 w-[calc(100%+10px)] items-center justify-between bg-p0 pr-2">
      <LibraryItemTierSelect />
      <Grow />
      <!-- view -->
      <LazyViewToggle
        v-if="collapsed || smallerThanLg"
        collapsed
        size="md"
        @update:tab-model="(e: TabValue) => (tabModel = e)" />
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
              color: 'neutral'
            }
          ]"
          @click="is().clearFilters()" />
      </div>
    </div>
  </NuxtLayout>
</template>
