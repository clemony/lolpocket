<script lang="ts" setup>
import Fuse from 'fuse.js'

const props = withDefaults(
  defineProps<{
    pocketKey?: string
    pocket?: pocket
    selectedIcon?: string
    alignOffset?: number
    align?: 'start' | 'center' | 'end'
    sideOffset?: number
    side?: 'bottom' | 'top' | 'left' | 'right'
    class?: HTMLAttributes['class']
    b2?: boolean
  }>(),
  {
    align: 'start',
    side: 'bottom',
    sideOffset: 8,
    alignOffset: 0,
  },
)

const emit = defineEmits(['update:selectedIcon'])
const pocket = computed (() => {
  return props.pocketKey ? getPocket(props.pocketKey) : props.pocket
})

const ds = useDataStore()

const cs = useChampStore()

const images = ref([])
const selectIcon = ref()

function handleChange(image) {
  if (props.pocket) {
    pocket.value.icon = image
  }
  else {
    emit('update:selectedIcon', image)
  }
}
const champSearch = ref(null)
const selectedResult = ref(null)

const champFuse = new Fuse(ds.championNames, {
  findAllMatches: true,
  threshold: 0.3,
})

const searchQuery = computed (() => {
  if (!champSearch.value)
    return
  return champFuse.search(champSearch.value,
  )
})
const fuse = ref()
const searchResult = computedAsync (() => {
  const find = ds.champions.find(c => c.name == selectedResult.value)

  if (find) {
    return fuse.value.search(find.id,
    )
  }
  else {
    return null
  }
})

function handleInput(e) {
  if (selectedResult.value)
    selectedResult.value = null

  champSearch.value = e
}

onMounted (async () => {
  if (props.pocket) {
    selectIcon.value = props.pocket.icon
  }
  else if (props.selectedIcon) {
    selectIcon.value = props.selectedIcon
  }
  else {
    selectIcon.value = '/img/lp/192.webp'
  }

  const imageModules = import.meta.glob('/public/img/champion-centered/*')
  images.value = Object.keys(imageModules).map(path => path.replace('/public', ''))

  await images.value

  fuse.value = new Fuse(images.value, {
    findAllMatches: true,
    threshold: 0.3,
  })

  if (cs.championSplashDropdown == null) {
    // cs.championSplashDropdown = getRandom(ds.championNames)
  }
})
</script>

<template>
  <CustomPopoverContent :side-offset="props.sideOffset" :align-offset="props.alignOffset" :align="props.align" :side="props.side" :class="cn('w-(--reka-popover-trigger-width) px-2 py-2 flex flex-col max-h-96 overflow-y-scroll  ', props.class)">
<CustomPopoverArrow  />
      <ContrastSearchInput v-model:model-value="champSearch" @update:input="handleInput($event)" placeholder="Search Champions..."  />

    <div v-if="!searchResult" class="pt-2 overflow-y-scroll w-full flex flex-col">
      <label v-for="result in searchQuery" :key="result.item" class="justify-start btn btn-ghost max-h-90 hover:bg-b3/5 hover:border-b3/10 gap-3 text-3">
        <input v-model="selectedResult" type="radio" class="peer hidden" :value="result.item" />
        <LazyChampionIconFromName :name="result.item" class="size-8" hydrate-on-visible />
        {{ result.item }}
      </label>
    </div>

    <div v-if="searchResult" class="mt-3 overflow-y-scroll px-1 self-center pb-3 max-h-90 grid grid-cols-4 pt-1 gap-2">
      <template v-for="result in searchResult" :key="result.item">
        <PopoverClose as-child>
          <LazySplashIcon v-model:model-value="selectIcon" :result="result" class="!size-17 border-0 shrink-0 hover:ring-b3/80" hydrate-on-visible @update:selected-icon="handleChange($event)" />
        </PopoverClose>
      </template>
    </div>

    <div v-if="!searchResult && !searchQuery" class="w-full  px-2  pt-3 pb-4">
      <p>Search for a champion to select a splash art.</p>
    </div>
  </CustomPopoverContent>
</template>