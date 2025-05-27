<script lang="ts" setup>
import { motion } from 'motion-v'

const { data } = await useFetch<ItemLite[]>('/api/items-lite.json')
const is = useItemStore()

const itemData = computed (() => data.value)
const { filteredItems } = useItemFilter(itemData.value, is.itemFilter)
console.log('💠 - filteredItems:', filteredItems)

definePageMeta({
  name: 'items',
  title: 'Items',
  section: 'library',
  icon: 'bow',
})

const items = ref(itemData.value)

watchEffect(() => {
if ( filteredItems.value)
items.value =  filteredItems.value
})
</script>

<template>
  <NuxtLayout name="items-layout">
    <div class="absolute inset-0 top-0 left-0 overflow-y-auto  py-24 pr-18 pl-8 ">
      <div class=" flex items-center pb-12">
        <h1 class="grow">
          Items
        </h1>
        <!--      <div
          class="text-1  items-center pl-3 pr-7  text-nowrap flex mt-1 "
          v-html="captions" /> -->
      </div>
      <div
        class=" user-select-none  gap-5  grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(56px,1fr))] grid-rows-[repeat(auto-fill,minmax(56px,1fr))] pt-1 size-full rounded-lg"
  >
        <div
          v-for="item in items"
          :key="item.id" >
          <PopoverItem :item="item.id" />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>