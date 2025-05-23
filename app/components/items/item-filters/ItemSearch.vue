<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import Fuse from 'fuse.js'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    placeholder?: string
    inputClass?: HTMLAttributes['class']
    setFocus?: boolean
  }>(),
  {
    placeholder: 'Search Items...',
  },
)
const emit = defineEmits(['update:query'])
const is = useItemStore()
const ds = useDataStore()

const { data: itemData } = await useFetch('/api/lists/item-index.json')
const items = Object.values(itemData.value) as ItemIndex[]

const searchQuery = ref('')

watchEffect(() => {
  emit('update:query', searchQuery.value)
  is.itemFilter.query = searchQuery.value
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

watch(searchResult, (newSearchResults) => {
  is.itemFilter.result = newSearchResults
})

const target = shallowRef()
const { focused } = useFocus(target, { initialValue: props.setFocus })
</script>

<template>
  <div :class="cn('border-b3 text-3 items-center gap-4 !bg-b1 flex h-12 border py-2 px-3', props.class)">
    <icon
      name="search"
      class="pointer-events-none size-5 opacity-70" />
    <input
      ref="target"
      v-model="searchQuery"
      :placeholder="props.placeholder"
      :class="cn('text-3  outline-0 ring-0 border-0 flex h-full grow text-start  hover:outline-0 hover:ring-0 hover:border-0', props.inputClass)" />

    <slot />
    <button class="btn btn-ghost btn-square btn-sm absolute  right-2" @click="searchQuery = null">
      <icon name="x-sm" class="" />
    </button>
  </div>
</template>

<style></style>
