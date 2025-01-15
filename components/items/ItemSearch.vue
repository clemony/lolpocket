<script setup lang="ts">
  import { categories, stats, types } from 'shared/data/item';

  const ts = useTempStore();
  const ds = useDataStore();
  import Fuse from 'fuse.js';

  const items = computedAsync(async () => {
    return await [...(ds.SRitems || [])]; // Assuming ds.SRitems is an array or undefined.
  }, null);

  const searchQuery = ref('');
  const fuse = ref<Fuse<any> | null>(null);

  // Initialize Fuse once the items are available
  watch(
    () => items.value,
    (newItems) => {
      if (newItems && newItems.length > 0) {
        fuse.value = new Fuse(newItems, {
          keys: ['name', 'nickname'],
          includeScore: true,
          threshold: 0.3,
        });
      }
    },
    { immediate: true }
  );

  // Function to get the search results from Fuse based on the debounced query
  const searchResult = computed(() => {
    if (!searchQuery.value) {
      // If there's no query, return all items to load all chunks
      return items.value || [];
    }

    if (!fuse.value) return [];

    const results = fuse.value.search(searchQuery.value);
    return results.map((result) => result.item);
  });

  // Watch for changes in searchResult and load all chunks on initial render
  watch(searchResult, (newSearchResults) => {
    // Store the search results in the Pinia store
    ts.biSearchResult = newSearchResults;
    console.log('💠 - Search Results:', newSearchResults);
  });
</script>

<template>
  <div class="relative">
    <icon
      name="teenyicons:search-outline"
      class="pointer-events-none absolute top-3.25 left-3.5 z-20 size-5 opacity-70" />
    <Input
      v-model="searchQuery"
      placeholder="Search Item Database..."
      class="border-b2 !text-3 placeholder:text-bc/80 !bg-b1 shadow-smooth flex h-12 border py-2 pr-3 pl-12 inset-shadow-xs" />
  </div>
</template>
<style></style>
