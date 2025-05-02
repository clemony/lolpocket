<script lang="ts" setup>

definePageMeta({
  name: 'item-grid',
  title: 'Items',
  alias: '/items',
  section: 'items',
})

const ds = useDataStore()
const is = useItemStore()
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

<NuxtLayout name="items-layout" class="">

  <div class="grow" >
    <div class="w-full flex items-center pt-24 px-16 pb-12">


      <h1 class="grow">Items</h1>
      <div
        class="text-1  items-center pl-3 pr-7  text-nowrap flex mt-1 "
        v-html="captions" />
    </div>
    <div class="size-full items-start overflow-y-auto  px-16 no-scrollbar">
      <ItemList
        id="item-results"
        :list-key="is.listKey"
        class="" />
    </div>
    </div>
  </NuxtLayout>
</template>