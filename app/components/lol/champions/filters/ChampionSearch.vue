<script setup lang="ts">
import Fuse from "fuse.js";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const emit = defineEmits(["update:input"]);

const searchQuery = ref("");

const fuse = ref<Fuse<any> | null>(null);

watch(
  () => ix().champions,
  (newChampions) => {
    if (newChampions && newChampions.length > 0) {
      fuse.value = new Fuse(newChampions, {
        keys: ["name", "nickname"],
        includeScore: true,
        threshold: 0.3,
      });
    }
  },
  { immediate: true },
);
const searchResult = computed(() => {
  if (!searchQuery.value) {
    return ix().champions || [];
  }
  if (!fuse.value) return [];
  const results = fuse.value.search(searchQuery.value);
  return results.map((result) => result.item);
});
watch(searchResult, (newSearchResults) => {
  console.log("💠 - Search Results:", newSearchResults);
});
</script>

<template>
  <Input
    v-model="searchQuery"
    placeholder="Search Champions..."
    :class="cn('m-0 size-full border-0 py-0 pl-8 shadow-none', props.class)"
    @update:model-value="emit('update:input', searchQuery)"
  />
</template>

<style></style>
