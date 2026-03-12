<script setup lang="ts">
import { positionToChamp } from "#shared/constants/champions/positionToChamp"
import type { ArrayOrNested, CheckboxGroupItem, TabsItem } from "@nuxt/ui"
import type { TabValue } from "~/components/pages/library/viewMode"
import { roleToChamp } from "~~/shared/constants/champions/roleToChamp"
definePageMeta({
  title: "Champions",
  description: "A detailed record of champions and their stats.",
  icon: "i-lp-champ",
  prefix: "Library",
  order: 0,
  class: "",
})

const tabModel = shallowRef<TabValue>(0)
const component = computed(() =>
  tabModel.value === 0
    ? defineAsyncComponent(
        () =>
          import("~/components/pages/library/champions/LibraryChampionGrid.vue"),
      )
    : defineAsyncComponent(
        () =>
          import("~/components/pages/library/champions/LibraryChampionTable.vue"),
      ),
)

const nav = computed(() => libraryNav.filter((l) => l.to !== useRoute().path))
const collapsed = useState<boolean>("collapsed-state", () => false)

const positions = computed<TabsItem[]>(() =>
  Object.keys(positionToChamp).map((p) => ({ value: p, label: p })),
)

const roles = computed<CheckboxGroupItem[]>(() =>
  Object.keys(roleToChamp).map((p) => ({ value: p, label: p })),
)
</script>

<template>
  <NuxtLayout name="collapse-aside">
    <template #aside>
      <ChampionFilterSidebar
        v-model:tab-model="tabModel"
        :nav
        :roles
        @update-tab="(e) => (tabModel = e)" />
    </template>
    <template v-if="collapsed || smallerThanLg" #toolbar>
      <LazyChampionFilterToolbar :nav :roles />
    </template>

    <template v-if="collapsed || smallerThanLg" #links>
      <div class="relative items-center justify-end">
        <div class="absolute right-0 flex w-90 max-w-90 shrink-0 translate-y-2">
          <LazyLibrarySearch
            variant="outline"
            color="default"
            :ui="{
              root: 'w-full justify-self-end',
              trailing: 'opacity-60 *:-mx-[0.25px]',
              base: 'w-full',
            }" />
        </div>
      </div>
    </template>

    <!--     <template #quote>
      {{ quote }}
    </template> -->

    <div
      class="sticky top-15 z-2 -mt-6 mb-0 -ml-[5px] flex h-18 w-[calc(100%+10px)] items-center justify-between bg-p0 pr-2">
      <LazyUTabs
        v-model:model-value="is().filters.rank"
        :items="positions"
        size="md"
        variant="ghost"
        color="neutral"
        :ui="{
          root: 'w-fit translate-y-px',
          indicator: 'ring-0 duration-150',
          trigger: 'w-min px-2',
        }" />
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
              color: 'neutral',
            },
          ]"
          @click="is().clearFilters()" />
      </div>
    </div>
  </NuxtLayout>
</template>
