<script lang="ts" setup>
const { data } = await useFetch('/api/items-lite.json')
console.log('💠 - data:', Object.values(data.value) as ItemLite[])
const is = useItemStore()

const { filteredItems } = useItemFilter(Object.values(data.value) as ItemLite[], is.itemFilter)
console.log('💠 - filteredItems:', filteredItems)

const f = computedAsync (() => {
const  a = data.value as ItemLite[]
console.log("💠 - f - data.value:", data.value)
const b = a.map(i => i.rank)
return [...new Set(b)]
})
console.log("💠 - f - f:", f)
</script>

<template>
  <div class="flex size-full oveflow-hidden">
    <menu class="overflow-hidden">
    <ItemFilterSidebar />
    </menu>
    <main class="overflow-y-auto grow relative">
    <slot :items="filteredItems" />
    </main>
  </div>
</template>