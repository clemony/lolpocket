<script setup lang="ts">
import { categories, stats, types } from '@data/item'
import { useDataStore } from '@stores/dataStore'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
const ds = useDataStore()
import Fuse from 'fuse.js'

const items = computedAsync(async () => {
    return await [...(ds.SRitems || [])] // Assuming ds.SRitems is an array or undefined.
}, null)

const searchQuery = ref('')
const fuse = ref<Fuse<any> | null>(null)

// Initialize Fuse once the items are available
watch(
    () => items.value,
    (newItems) => {
        if (newItems && newItems.length > 0) {
            fuse.value = new Fuse(newItems, {
                keys: ['name', 'nickname'],
                includeScore: true,
                threshold: 0.3,
            })
        }
    },
    { immediate: true }
)

// Debounced search query logic
const debouncedSearchQuery = ref('')
const debounceTimeout = ref(null)

watch(searchQuery, (newQuery) => {
    clearTimeout(debounceTimeout.value)
    debounceTimeout.value = setTimeout(() => {
        debouncedSearchQuery.value = newQuery
    }, 0)
})

const chunkSize = 50
const visibleItems = ref([]) // Holds the currently visible items
const currentChunk = ref(0) // Tracks the current chunk to load
const loading = ref(false) // State to track loading

// Function to load the next chunk of search results
const loadNextChunk = (results: any[]) => {
    if (currentChunk.value * chunkSize < results.length) {
        const nextChunk = results.slice(
            currentChunk.value * chunkSize,
            (currentChunk.value + 1) * chunkSize
        )
        visibleItems.value.push(...nextChunk)
        currentChunk.value++
    }
}

// Function to get the search results from Fuse based on the debounced query
const searchResult = computed(() => {
    if (!debouncedSearchQuery.value) {
        // If there's no query, return all items to load all chunks
        return items.value || []
    }

    if (!fuse.value) return []

    const results = fuse.value.search(debouncedSearchQuery.value)
    return results.map((result) => result.item)
})

// Watch for changes in searchResult and load all chunks on initial render
watch(searchResult, (newSearchResults) => {
    // Store the search results in the Pinia store
    ts.biSearchResult = newSearchResults
    console.log('💠 - Search Results:', newSearchResults)

    // Only load chunks if there are new results and not already loading
    if (newSearchResults.length > 0 && !loading.value) {
        loading.value = true
        // Load all chunks (with delay for smoothness)
        setTimeout(() => {
            // Load all chunks on initial render
            while (currentChunk.value * chunkSize < newSearchResults.length) {
                loadNextChunk(newSearchResults)
            }
            loading.value = false
        }, 0)
    }
})

// Watch visibleItems to load subsequent chunks when scrolling or user interaction
watch(
    visibleItems,
    () => {
        // Ensure that chunks are loaded while the user scrolls or interacts
        if (
            visibleItems.value.length < searchResult.value.length &&
            !loading.value
        ) {
            loading.value = true
            setTimeout(() => {
                loadNextChunk(searchResult.value) // Continue loading more results
                loading.value = false
            }, 0)
        }
    },
    { immediate: true }
)
</script>

<template>
    <div class="relative">
        <icon
            icon="teenyicons:search-outline"
            class="pointer-events-none absolute top-3.25 left-3.5 z-20 size-5 opacity-70" />
        <Input
            v-model="searchQuery"
            placeholder="Search Item Database..."
            class="border-b2 !text-3 placeholder:text-bc/80 !bg-b1 shadow-smooth flex h-12 border py-2 pr-3 pl-12 inset-shadow-xs" />
    </div>
</template>
<style></style>
