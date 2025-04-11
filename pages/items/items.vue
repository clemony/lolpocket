<script setup lang="ts">
const ds = useDataStore()
const is = useItemStore()
definePageMeta({
  name: 'item-data',
  path: '/items',
  title: 'Items',
section: 'items',
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



</script>

<template>

      <NuxtLayout name="header-layout" class="pt-0  overflow-x-hidden">
        <template #crumb>
          <div
            class="text-1  items-center pl-3 pr-16  text-nowrap flex mt-1 "
            v-html="captions" />
        </template>

        <div class="w-full pt-24 px-16 pb-12">
          <h1>Items</h1>
        </div>
        <div class="size-full items-start overflow-y-auto  px-16 no-scrollbar">
          <ItemList
            id="item-results"
            :list-key="is.listKey"
            class="" />
        </div>



  </NuxtLayout>
</template>

<style scoped></style>
