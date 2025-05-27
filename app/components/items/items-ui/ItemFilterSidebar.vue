<script lang="ts" setup>
const is = useItemStore()
const sortItemsAZ = ref(0)
const sortPrice = ref(0)
const route = useRoute()

function resetItems() {
/*   sortItemsAZ.value = 0
  // sortPrice.value = 0 */

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
  <transition-expand group class="flex pl-4 pr-2 w-116 h-full flex-col items-center pt-19 justify-start  relative">
    <div class="w-full px-5 mt-4">
      <Tabs v-model:model-value="tabs" class=" w-full  **:pointer-events-auto " @update:model-value="navigateTo(tabs)">
        <IndicatorTabsList class="grid grid-cols-2 h-10">
          <IndicatorTabsTrigger value="/library/items">
            Grid
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="/library/item_list">
            List
          </IndicatorTabsTrigger>
          <TabIndicator />
        </IndicatorTabsList>
      </Tabs>

      <ItemSearch class="input w-full mt-9 shadow-sm drop-shadow-sm !bg-neutral/85 inset-shadow-sm border-accent text-nc **:text-nc" />
    </div>
    <div class="px-5 mt-10 w-full">
      <ItemRankFilter />
    </div>

    <div class="px-5 pt-12 pb-8 w-full">
      <ItemStatsChecklist />
    </div>
    <div class="mt-2 mb-4 px-5 gap-6 flex items-center  w-full">
      <ItemMapFilter v-model:model-value="is.itemFilter.map">
      </ItemMapFilter>
      <div class="gap-5 px-5  flex font-medium items-center w-full justify-end ">
        {{ is.itemFilter.purchasable ? 'Purchasable' : 'All' }}
        <Switch v-model:model-value="is.itemFilter.purchasable" class="dst" />
      </div>
    </div>
    <div class="px-7">
      <div class="divider divider-start before:bg-b3/60 font-semibold  mb-8">
        Tags
      </div>
      <ItemTagsFilter />
    </div>

    <div class=" absolute bottom-6 w-full px-4 flex gap-2">
      <div class="w-full">
        <ItemColumnDisplay v-if="route.path == '/items/stats'" />
      </div>
      <button
        class="btn w-[49%] btn-neutral bg-neutral/95 hover:opacity-85 font-normal "
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