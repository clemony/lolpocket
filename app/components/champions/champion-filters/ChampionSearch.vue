<script setup lang="ts">
import Fuse from 'fuse.js'


const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { data } = await useFetch('/api/index/champion-index.json')
const champions = computedAsync(async () => {
  return await Object.values(data.value) as ChampionIndex[]
}, null)

const searchQuery = ref('')

const fuse = ref<Fuse<any> | null>(null)

watch(
  () => champions.value,
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
    return champions.value || []
  }
  if (!fuse.value)
    return []
  const results = fuse.value.search(searchQuery.value)
  return results.map(result => result.item)
})
watch(searchResult, (newSearchResults) => {

  console.log('💠 - Search Results:', newSearchResults)
})

const emit = defineEmits(['update:input'])

</script>

<template>

    <Input
      v-model="searchQuery"
      @update:model-value="emit('update:input', searchQuery)"
      placeholder="Search Champions..."
     :class="cn('size-full border-0 shadow-none py-0 m-0 size-full pl-8', props.class)"/>

</template>

<style></style>
