<script lang="ts" setup>
import Fuse from 'fuse.js'

const  championSkins = $fetch('./api/champion-skins.json') // adjust the path as needed

const props = withDefaults(
  defineProps<{
    pocketKey?: string
    pocket?: Pocket
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

const pocket = computed(() => {
  return props.pocketKey ? getPocket(props.pocketKey) : props.pocket
})

const ds = useDataStore()
const cs = useChampStore()

const selectIcon = ref()
const champSearch = ref(null)
const selectedResult = ref(null)
const splashIcons = ref<string[]>([])

function handleChange(image: string) {
  if (props.pocket) {
    pocket.value.icon = image
  } else {
    emit('update:selectedIcon', image)
  }
}

// Initial Fuse for champion name search
const champFuse = new Fuse(ds.championNames, {
  findAllMatches: true,
  threshold: 0.3,
})

const searchQuery = computed(() => {
  if (!champSearch.value) return
  return champFuse.search(champSearch.value)
})

// Fuse for splash icon search once a champ is selected
const fuse = ref<Fuse<string>>()

const searchResult = computedAsync(() => {
  const champName = selectedResult.value
  if (!champName) return null

  const entry = Object.values(championSkins).find(champ => champ.name === champName)
  if (!entry) return null

  const splashes = entry.skins.map(s => s.splashPath)
  splashIcons.value = splashes

  fuse.value = new Fuse(splashes, {
    threshold: 0.3,
  })

  return fuse.value.search(entry.name).map(r => ({ item: r.item }))
})

function handleInput(e: string) {
  if (selectedResult.value) selectedResult.value = null
  champSearch.value = e
}

onMounted(() => {
  selectIcon.value = props.pocket?.icon ?? props.selectedIcon ?? '/img/lp/192.webp'
})


//return entry.skins.map(s => ({ item: s })) // s contains name and splashPath
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

<!--     <div v-if="searchResult" class="mt-3 overflow-y-scroll px-1 self-center pb-3 max-h-90 grid grid-cols-4 pt-1 gap-2"> -->
<template v-for="result in searchResult" :key="result.item">
  <PopoverClose as-child>
    <LazySplashIcon
      v-model:model-value="selectIcon"
      :result="result"
      class="!size-17 border-0 shrink-0 hover:ring-b3/80"
      hydrate-on-visible
      @update:selected-icon="handleChange($event)"
    />
  </PopoverClose>
</template>

    <div v-if="!searchResult && !searchQuery" class="w-full  px-2  pt-3 pb-4">
      <p>Search for a champion to select a splash art.</p>
    </div>
  </CustomPopoverContent>
</template>