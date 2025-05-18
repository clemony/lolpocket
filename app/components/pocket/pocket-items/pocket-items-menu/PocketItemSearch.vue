<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Fuse from 'fuse.js'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    placeholder?: string
    inputClass?: HTMLAttributes['class']
    setFocus?: boolean
    dark?: boolean
  }>(),
  {
    placeholder: 'Search Items...',
  },
)

const emit = defineEmits(['update:query'])

const route = useRoute()

const is = useItemStore()

const { data: itemData } = await useFetch('/api/lists/item-index.json')
const items = Object.values(itemData.value) as ItemIndex[]

const searchQuery = ref('')

watchEffect(() => {
  emit('update:query', searchQuery.value)
  is.pItemFilter.query = searchQuery.value
})

const fuse = ref<Fuse<any> | null>(null)

// Initialize Fuse once the items are available
watch(
  () => items,
  (newItems) => {
    if (newItems && newItems.length > 0) {
      fuse.value = new Fuse(newItems, {
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
    return items || []
  }

  if (!fuse.value)
    return []

  const results = fuse.value.search(searchQuery.value)
  return results.map(result => result.item)
})
// TODO result filter
watch(searchResult, (newSearchResults) => {
  is.pItemFilter.result = newSearchResults
  if (route.path == '/items/stats') {
    setTimeout(() => {
      // is.itemGridApi.setGridOption('rowData', filterDbItems())
    }, 300)
  }
})

function handleReset() {
  searchQuery.value = null
  is.pItemFilter.query = null
  is.pItemFilter.result = null
}
</script>

<template>
  <div :class="cn('border-b3 text-3 items-center gap-4 bg-b1 flex h-12 border py-2 px-3', props.class)">
    <icon
      name="search"
      class="pointer-events-none size-5 opacity-70" />
    <input
      v-model="searchQuery"
      :placeholder="props.placeholder"
      :class="cn('text-3  outline-0 ring-0 border-0 flex h-full grow text-start  hover:outline-0 hover:ring-0 hover:border-0', props.inputClass)" />

    <slot />
    <button class="btn btn-ghost btn-square btn-sm " @click="handleReset" :class="{' hover:!bg-accent hover:!border-b3/20': props.dark}">
      <icon name="x-sm" class="" />
    </button>
  </div>
</template>

<style></style>
