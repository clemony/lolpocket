<script setup lang="ts">
import { useDataStore } from '@stores/dataStore'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
const ds = useDataStore()
import Fuse from 'fuse.js'

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
    { immediate: true }
)
const searchResult = computed(() => {
    if (!searchQuery.value) {
        return championss.value || []
    }
    if (!fuse.value) return []
    const results = fuse.value.search(searchQuery.value)
    return results.map((result) => result.item)
})
watch(searchResult, (newSearchResults) => {
    ts.biSearchResult = newSearchResults
    console.log('💠 - Search Results:', newSearchResults)
})
</script>
<template>
    <div class="relative">
        <icon
            icon="teenyicons:search-outline"
            class="pointer-events-none absolute top-3.25 left-3.5 z-20 size-5 opacity-70" />
        <Input
            v-model="searchQuery"
            placeholder="Search Champion Database..."
            class="border-b2 !text-3 placeholder:text-bc/80 !bg-b1 shadow-smooth flex h-12 border py-2 pr-3 pl-12 inset-shadow-xs" />
    </div>
</template>
<style></style>
