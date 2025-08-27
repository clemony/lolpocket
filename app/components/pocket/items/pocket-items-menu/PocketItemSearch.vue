<script setup lang="ts">
import { motion } from 'motion-v'

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

const ix = useIndexStore()

const searchQuery = ref('')
/*
watchEffect(() => {
  emit('update:query', searchQuery.value)
  filters.query = searchQuery.value
})

const fuse = ref<Fuse<any> | null>(null)

// Initialize Fuse once the items are available
watch(
  () => Object.values(ix.items),
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
    return ix.items || []
  }

  if (!fuse.value)
    return []

  const results = fuse.value.search(searchQuery.value)
  return results.map(result => result.item)
})
// TODO result filter
watch(searchResult, (newSearchResults) => {
  filters.result = Object.values(newSearchResults)
  if (route.path == '/items/stats') {
    setTimeout(() => {
      // is.itemGridApi.setGridOption('rowData', filterDbItems())
    }, 300)
  }
})

function handleReset() {
  searchQuery.value = null
  filters.query = null
  filters.result = null
}
 */
const variants = {
  collapsed: {
    borderRadius: '100%',
    gap: 0,
    padding: 0,
  },
  expanded: {
    width: '220px',
    borderRadius: '1.2rem',
    padding: '10px',
    gap: '10px',
  },
}

const inputVariants = {
  collapsed: {
    width: 0,
    opacity: 0,
  },
  expanded: {
    width: '200px',
    opacity: 100,
  },
}

const { filters, setFilter, clearFilters } = useItemFilter()

watchEffect(() => {
  if (searchQuery.value == '' || searchQuery.value == undefined)
    searchQuery.value = null
})
</script>

<template>
  <motion.div
    :class="cn('border bgneutral/84 text-nc btn-neutral  btn-circle relative flex btn   rounded-full items-center', props.class)"
    :variants="variants"
    initial="collapsed"
    :transition="{
      duration: 0.3,
      ease: 'easeOut' }"
    while-hover="expanded"
    :animate="searchQuery != null ? 'expanded' : 'collapsed'">
    <motion.div :variants="inputVariants">
      <slot>
        <Input
          v-model="searchQuery"
          type="text"
          class="size-full pl-5 border-0 shadow-none py-0 m-0"
          :placeholder="props.placeholder" />
      </slot>
    </motion.div>

    <button
      :disabled="searchQuery == null"
      class="btn btn-ghost btn-circle btn-xs  hover:bg-b3/40 absolute  z-2 left-1.5 top-1.5 pointer-events-auto"
      @click="clearFilters">
      <icon
        v-if="searchQuery"
        name="x-sm"
        class="size-5.5 shrink-0 text-bc/70 absolute dst" />

      <icon
        v-else
        name="search"
        class="size-4.75 shrink-0 text-bc/70 absolute   dst" />
    </button>
  </motion.div>
</template>

<style></style>
