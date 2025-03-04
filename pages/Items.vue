<script setup lang="ts">
const ts = useTempStore()
const ds = useDataStore()
const is = useItemStore()
definePageMeta({
  name: 'item-data',
  path: '/items',
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
</script>

<template>
  <NuxtLayout
    name="split-layout"
    title="Items"
    class="pr-0">
    <template #1>
      <div class="text-4 drop-shadow-text flex h-28 items-center px-2 font-serif tracking-wide">
        {{ captions }}
      </div>

      <ItemSearch />
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
    </template>

    <template #2>
      <RadioFilterList
        :types="itemTypes"
        class="pl-2"
        @update:model="(e) => (is.filterItemTypes = e)" />
      <div
        id="item-results"
        class=".item-results max-h-inherit h-[calc(100vh-11.2rem)] overflow-auto"
        as-child>
        <ItemList
          :list-key="listKey"
          class="pt-5 pr-6" />
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped></style>
