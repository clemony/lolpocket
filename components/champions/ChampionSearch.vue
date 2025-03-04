<script setup lang="ts">
import Fuse from 'fuse.js'

const ts = useTempStore()
const ds = useDataStore()

const championss = computedAsync(async () => {
  return await [...(ds.champions || [])]
}, null)

const searchQuery = ref('')

const fuse = ref<Fuse<any> | null>(null)

watch(
  () => championss.value,
  (newChampions) => {
    if (newChampions && newChampions.length > 0) {
      fuse.value = new Fuse(newChampions, {
        keys: ['name', 'nickname'],
        includeScore: true,
        threshold: 0.3,
      })
    }
  },
  { immediate: true },
)
const searchResult = computed(() => {
  if (!searchQuery.value) {
    return championss.value || []
  }
  if (!fuse.value)
    return []
  const results = fuse.value.search(searchQuery.value)
  return results.map(result => result.item)
})
watch(searchResult, (newSearchResults) => {
  is.itemSearchResult = newSearchResults
  // console.log('💠 - Search Results:', newSearchResults)
})
</script>

<template>
  <div class="relative max-w-100">
    <icon
      name="teenyicons:search-outline"
      class="pointer-events-none absolute top-3.25 left-3.5 z-20 size-5 opacity-70"
    />
    <Input
      v-model="searchQuery"
      placeholder="Search Champion Database..."
      class="border-b3 !text-3 placeholder:text-bc/80 !bg-b1 flex h-12 border py-2 pr-3 pl-12"
    />
  </div>
</template>

<style></style>
