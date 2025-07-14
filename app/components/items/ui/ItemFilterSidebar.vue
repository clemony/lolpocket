<script lang="ts" setup>
const is = useItemStore()
const sortItemsAZ = ref(0)
const sortPrice = ref(0)
const route = useRoute()

function resetItems() {
/*   sortItemsAZ.value = 0
  // sortPrice.value = 0 */

  // TODO disable no filter avail
  Object.assign(is.itemFilter, is.defaultItemFilter)
  console.log('💠 - resetItems - is.defaultItemFilter:', is.defaultItemFilter)
  console.log('💠 - resetItems - itemFilter:', is.itemFilter)
  // is.listKey = is.listKey + 1
  // is.itemGridApi.resetColumnState()
}
const tabs = ref('/library/items')

onMounted (() => {
  tabs.value = route.path
})
</script>

<template>
  <transition-expand group class="flex pl-4 pr-2   items-center top-19 bg-b1 z-1 justify-start  absolute inset-x-0">
    <div class=" flex items-center pb-12">
      <h1 class="grow">
        Items
      </h1>
    </div>

    <Tabs v-model:model-value="tabs" class="  **:pointer-events-auto " @update:model-value="navigateTo(tabs)">
      <IndicatorTabsList class="grid grid-cols-2 h-10">
        <IndicatorTabsTrigger value="/library/items">
          Grid
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger value="/library/items/list">
          List
        </IndicatorTabsTrigger>

        <TabIndicator />
      </IndicatorTabsList>
    </Tabs>

    <ItemSearch class="input w-54  shadow-sm drop-shadow-sm !bg-n1/85 inset-shadow-sm border-accent text-nc **:text-nc" />

    <ItemRankFilter />

    <!--     <ItemStatsChecklist /> -->

    <ItemMapFilter v-model:model-value="is.itemFilter.map" />

    <div class="gap-4  text-2  tracking-tight  flex items-center justify-end ">
      <MotionFade v-if="is.itemFilter.purchasable" layout-id="text">
        Purchasable
      </MotionFade>

      <MotionFade v-else layout-id="text">
        All
      </MotionFade>

      <Switch v-model:model-value="is.itemFilter.purchasable" class="dst">
      </Switch>
    </div>

    <ItemTagsFilter />

    <div class=" absolute bottom-6  px-4 flex gap-2">
      <div class="w-full">
        <ItemColumnDisplay v-if="route.path == '/items/stats'" />
      </div>

      <button
        class="btn btn-n1 bg-n1/85 hover:opacity-85 font-normal "
        @click="resetItems()">
        Reset Filters
      </button>
      <!-- TODO
         REDO with vueuse

         <ToggleStateButton
            v-model:model="sortItemsAZ"
            class="join-item rounded-r-none"
            icon1="qlementine-icons:sort-alpha-asc-16"
            icon2="qlementine-icons:sort-alpha-desc-16"
            @click.stop
            @update:model="(v) => (is.sortItemsAZ = v)" />
          <ToggleStateButton
            class="join-item rounded-l-none"
            :model="sortPrice"
            icon1="bi:sort-numeric-down"
            icon2="bi:sort-numeric-up"
            :icon-size="7"
            @click.stop
            @update:model="(v) => (is.sortPrice = v)" /> -->
    </div>
  </transition-expand>
</template>