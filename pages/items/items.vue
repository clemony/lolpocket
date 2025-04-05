<script setup lang="ts">
const ds = useDataStore()
const is = useItemStore()
definePageMeta({
  name: 'item-data',
  path: '/items/all',
  title: 'Items',
})

const items = computed(() => [...(ds.items || [])])

const captions = computed(() => {
  let a = items.value.map(a => a.caption ?? '')
  a = a.filter(caption => caption != '')
  const i = Math.floor(Math.random() * a.length)
  let b = a[i].replace(/\\/g, '')
  b = b.replace('[[', ' ')
  b = b.replace(']]', ' ')
  return replaceFileReferencesWithImages(b)
})

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

const filter = ref(true)
const toggleFilter = useToggle(filter)
</script>

<template>
  <NuxtLayout name="right-bar-layout">
    <template #page>
      <NuxtLayout name="header-layout" class="pt-0  overflow-x-hidden">
        <template #crumb>
          <div
            class="text-1  items-center px-1  text-nowrap flex mt-1 "
            v-html="captions" />
        </template>

        <div class="w-full pt-24 px-16 pb-12">
          <h1>Items</h1>
        </div>
        <div class="size-full items-start overflow-y-auto  px-16 no-scrollbar">
          <ItemList
            id="item-results"
            :list-key="listKey"
            class="" />
        </div>
      </NuxtLayout>
    </template>

    <div class="flex flex-col items-center py-12 size-full relative">
      <ItemSearch class="input shadow-sm drop-shadow-sm !bg-neutral/85 inset-shadow-sm border-accent text-nc **:text-nc">
      </ItemSearch>

      <div class="px-7">
        <div class="divider divider-start before:bg-b3/60 font-semibold  my-8">
          Categories
        </div>
        <RadioFilterList
          :types="itemTypes"
          class=""
          @update:model="(e) => (is.filterItemTypes = e)" />
      </div>

      <div class="px-5 py-8 w-full">
        <ItemStatsChecklist />
      </div>
      <div class="mt-4 mb-4 px-8 flex gap-5 font-medium items-center w-full justify-end">
        Hide Unpurchasable
        <Switch v-model:model-value="is.itemDBHideNoBuy" class="dst" @update:model-value="e => is.itemDBHideNoBuy = e" />
      </div>
      <div class="px-7">
        <div class="divider divider-start before:bg-b3/60 font-semibold  mb-8">
          Roles
        </div>
        <CheckboxFilterList
          :source="itemCategories"
          @update:model="(e) => (is.filterItemCats = e)" />
      </div>

      <div class=" w-full  absolute bottom-2 left-0 px-6">
        <button
          class="btn btn-neutral font-normal"
          @click="resetItems">
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
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
