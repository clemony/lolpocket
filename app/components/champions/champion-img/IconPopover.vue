<script lang="ts" setup>
import Fuse from 'fuse.js'
// adjust the path as needed

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

const ix = useIndexStore()

const champs = computed(() => Object.values(ix.skins || {}))

console.log('💠 - champs:', champs)
const selectIcon = ref()
const champSearch = ref(null)
const selectedResult = ref(null)
const splashIcons = ref<string[]>([])

const champFuse = computed(() => new Fuse(champs.value, {

  keys: ['name'],
  findAllMatches: true,
  threshold: 0.3,
}))

const searchQuery = computed(() => {
  if (!champSearch.value)
    return []
  return champFuse.value.search(champSearch.value)
})

const searchResult = computed(() => {
  const champName = selectedResult.value
  if (!champName)
    return null

  //   const entry = champs.value.find(champ => champ.name === champName)
  //   if (!entry)
  //     return null

  //   const splashes = ix.skins.map(s => s.splashPath)

  //   return new Fuse(splashes, { threshold: 0.3 }).search(champName).map(r => ({ splash: r.item, id: entry.id }))
  // })

  // watch(searchResult, (results) => {
  //   const champName = selectedResult.value
  //   const entry = champs.value.find(champ => champ.name === champName)
  //   if (entry)
  //     splashIcons.value = entry.skins.map(s => s.splashPath)
  // no fix
  // TODO FIX
  return 1
})

function handleInput(e: string) {
  if (selectedResult.value)
    selectedResult.value = null
  champSearch.value = e
}

onMounted(() => {
  selectIcon.value = props.pocket?.icon ?? props.selectedIcon ?? '/img/lp/192.webp'

  ix.loadSkins()
})
</script>

<template>
  <LazyCustomPopoverContent :side-offset="props.sideOffset" :align-offset="props.alignOffset" :align="props.align" :side="props.side" :class="cn('w-(--reka-popover-trigger-width) px-2 py-2 flex flex-col max-h-96 overflow-y-scroll  ', props.class)">
    <ContrastSearchInput v-model:model-value="champSearch" placeholder="Search Splash Icons..." @update:input="handleInput($event)" />

    <div v-if="!searchResult" class="pt-2 overflow-y-scroll w-full flex flex-col">
      <!-- <label v-for="result in searchQuery" :key="result.item.id" class="justify-start btn btn-ghost max-h-90 hover:opacity-80 hover:!bg-b3/1   hover:!border-accent/20 hover:text-nc gap-3 text-3">
        <input v-model="selectedResult" type="radio" class="peer hidden" :value="result.item" />
        <LazyChampionIcon :id="result.item.id" :alt="result.item.name" class="size-8" hydrate-on-visible />
        {{ result.item.name }}
      </label> -->
    </div>

    <div v-else-if="searchResult" class="mt-3  overflow-y-scroll px-1 self-center pb-3 max-h-90 grid grid-cols-4 pt-1 gap-2">
      <template v-for="splash in splashIcons" :key="splash">
        <PopoverClose as-child>
          <LazySplashIcon
            alt="champion splash"
            :img="splash"
            class="!size-17 border-0 shrink-0 hover:ring-b3/80">
            <input v-model="selectIcon" type="radio" :value="splash" class="peer hidden" hydrate-on-visible @change="pocket.icon = selectIcon" />
          </LazySplashIcon>
        </PopoverClose>
      </template>
    </div>
    <div v-else class="w-full  px-2  pt-3 pb-4">
      <p>Search for a champion to select a splash art.</p>
    </div>
  </LazyCustomPopoverContent>
</template>