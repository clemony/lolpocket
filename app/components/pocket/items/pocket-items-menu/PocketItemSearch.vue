<script setup lang="ts">
import Fuse from 'fuse.js'
import { motion } from 'motion-v'

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
  }
)

const emit = defineEmits(['update:query'])

const route = useRoute()

const searchQuery = ref('')
/*
watchEffect(() => {
  emit('update:query', searchQuery.value)
  filters.query = searchQuery.value
})

const fuse = ref<Fuse<any> | null>(null)

// Initialize Fuse once the items are available
watch(
  () => Object.values(ix().items),
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
    return ix().items || []
  }

  if (!fuse.value)
    return []

  const results = fuse.value.search(searchQuery.value)
  return results.map(result => result.item)
})
// @todo result filter
watch(searchResult, (newSearchResults) => {
  filters.result = Object.values(newSearchResults)
  if (route.path==='/items/stats') {
    setTimeout(() => {
      // is().itemGridApi.setGridOption('rowData', filterDbItems())
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
    gap: '10px',
    padding: '10px',
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

const { clearFilters, filters, setFilter } = useItemFilter()

watchEffect(() => {
  if (searchQuery.value === '' || searchQuery.value === undefined)
    searchQuery.value = null
})
</script>

<template>
  <motion.div
    :class="
      cn(
        'border bgneutral/84 text-nc btn-neutral  btn-circle relative flex btn   rounded-full items-center',
        props.class,
      )
    "
    :variants="variants"
    initial="collapsed"
    :transition="{
      duration: 0.3,
      ease: 'easeOut',
    }"
    while-hover="expanded"
    :animate="searchQuery !== null ? 'expanded' : 'collapsed'">
    <motion.div :variants="inputVariants">
      <slot>
        <Input
          v-model="searchQuery"
          type="text"
<<<<<<< HEAD
          class="m-0 size-full border-0 py-0 pl-5 shadow-none"
=======
          class="size-full pl-5 border-0 shadow-none py-0 m-0"
>>>>>>> refs/remotes/origin/main
          :placeholder="props.placeholder"
          @clear:input="searchQuery = ''" />
      </slot>
    </motion.div>

    <button
      :disabled="searchQuery === null"
<<<<<<< HEAD
      class="btn btn-ghost btn-circle btn-xs hover:bg-b3/40 pointer-events-auto absolute top-1.5 left-1.5 z-2"
=======
      class="btn btn-ghost btn-circle btn-xs hover:bg-b3/40 absolute z-2 left-1.5 top-1.5 pointer-events-auto"
>>>>>>> refs/remotes/origin/main
      @click="clearFilters">
      <icon
        v-if="searchQuery"
        name="x-sm"
        class="text-bc/70 dst absolute size-5.5 shrink-0" />

      <icon
        v-else
        name="search"
<<<<<<< HEAD
        class="text-bc/70 dst absolute size-4.75 shrink-0" />
=======
        class="size-4.75 shrink-0 text-bc/70 absolute dst" />
>>>>>>> refs/remotes/origin/main
    </button>
  </motion.div>
</template>

<style></style>
