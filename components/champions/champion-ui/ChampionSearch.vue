<script setup lang="ts">
import Fuse from 'fuse.js'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
const is = useItemStore()
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
  <label class="input" :class="cn('relative max-w-100 items-center', props.class)">
    <icon
      name="teenyicons:search-outline"
      class="pointer-events-none  size-4 shrink-0 opacity-70" />
    <input
      v-model="searchQuery"
      placeholder="Search Champions..."
      class="grow !text-3 pl-2" />

    <slot />
<button class="btn btn-ghost btn-square btn-sm absolute  right-2" @click="searchQuery = null">
      <icon name="x-sm" class="" />
      </button>
  </label>
</template>

<style></style>
