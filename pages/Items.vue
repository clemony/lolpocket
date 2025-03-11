<script setup lang="ts">
const ds = useDataStore()
const is = useItemStore()
definePageMeta({
  name: 'item-data',
  path: '/items',
  title: 'Items',
})

const items = computed(() => [...(ds.SRitems || [])])

const captions = computed(() => {
  let a = items.value.map(a => a.caption ?? '')
  a = a.filter(caption => caption != '')
  const i = Math.floor(Math.random() * a.length)
  return a[i]
})
console.log('💠 - captions - captions:', captions.value)
watch(
  () => captions.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)

const sortItemsAZ = ref(0)
const sortPrice = ref(0)
onMounted(() => {})

const listKey = ref(0)
function resetItems() {
  sortItemsAZ.value = 0
  sortPrice.value = 0
  is.filterItemStats = []
  is.filterItemCats = []
  is.filterItemTypes = ''
  is.itemSearchResult = []
  listKey.value = listKey.value + 1
}

const filter = ref(false)
const toggleFilter = useToggle(filter)
</script>

<template>

    <NuxtLayout name="header-layout" class="pt-0  grid transition-all duration-300 overflow-x-hidden" :class="{ 'grid-cols-[1fr_320px]': filter, ' grid-cols-[1fr_0px]': !filter }">
    <template #header>
      <div
        class="text-4 drop-shadow-text items-center px-2 font-serif tracking-wide text-nowrap flex mt-1 ">
        {{ captions }}</div>
    </template>

    <template #crumb>
        <ItemSearch>        <button class="btn btn-ghost btn-sm btn-square rounded-md hover:bg-b2/40" @click.stop="toggleFilter()">
          <icon name="filter" class="size-4" />
        </button>
        </ItemSearch>

<!--       <ChampionSearch class="justify-self-end ">

      </ChampionSearch> -->
    </template>


<div class="size-full overflow-y-auto  pt-64  px-16">
        <ItemList
        id="item-results"
          :list-key="listKey"
          class="" />

</div>
    <div class="size-full  pt-38 pr-10 pl-8  border-l border-l-b2">
      <div class="flex gap-4">
        <div class="join w-fit shadow-xs">
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
            @update:model="(v) => (is.sortPrice = v)" />
        </div>
        <button
          class="btn-outline btn border-b3"
          @click="resetItems">
          Reset Filters
        </button>
      </div>
      <h2 class="drop-shadow-text mt-7 px-2 tracking-tight">
        Item Stats
      </h2>
      <ItemStatsList />
      <span class="h-1 w-full" />
      <CheckboxFilterList
        :source="itemCategories"
        @update:model="(e) => (is.filterItemCats = e)" />

      <RadioFilterList
        :types="itemTypes"
        class="pl-2"
        @update:model="(e) => (is.filterItemTypes = e)" />
</div>
  
  </NuxtLayout>
</template>

<style scoped></style>
