<script lang="ts" setup>
import { ListboxFilter, ListboxItem, ListboxItemIndicator, ListboxRoot, ListboxVirtualizer, PopoverClose } from 'reka-ui'
const {class: className } = defineProps<{
class?: HTMLAttributes['class']
}>()

const ix = useIndexStore()

const emit = defineEmits(['update:splash'])
const champQuery = ref<string | null>('')
const selectedChampion = ref<string | null>(null)

watch(() => selectedChampion.value, (newVal) => {
console.log("💠 - watch - newVal:", newVal)
}
)
const { championResult } = await useSearch(champQuery)

const result = computed(() => {
  const values = championResult?.value?.length ? championResult.value : ix.champions
  return [...values].sort((a, b) => a.name.localeCompare(b.name))
})

function reset(){
  champQuery.value = ''
  selectedChampion.value = null
}
</script>

<template>
  <Popover as="div" :class="cn('', className)">
<PopoverTrigger>
  <slot  />
</PopoverTrigger>
<LazyPopPopoverContent class="h-150 w-250 p-0" align="end" :side-offset="-160" :align-offset="-80">
  <article class="grid grid-cols-[1fr_4fr] size-full">
    <section class="p-1 relative w-70 max-h-150 h-150 bg-b2/30 border-r-b3 border-r  overflow-hidden ">


      <div class="grid justify-items-center w-full px-1.25  pt-2.25 h-fit">
        <div class="input shadow-none inset-shadow-xs group/input size-full border-b3 focus-within:ring-bc/50 rounded-md bg-b1/70 justify-self-end flex relative h-10   w-full">
        <icon name="search" class="absolute left-2 pointer-events-none transition-opacity duration-200  opacity-40 group-focus-within/input:opacity-80  size-4.25"/>
      <div class="search-wrapper group-not-focus-within/input:italic h-full group-not-focus-within/input:text-bc/70" />
      <button v-if="champQuery != ''" @click="reset()"  class="btn btn-ghost btn-xs btn-square absolute right-2">
<icon name="x-sm" class="shrink-0"/>
      </button>
        </div>
      </div>

  <ListboxRoot v-model:model-value="selectedChampion" :multiple="false" selection-behavior="replace" class=" overflow-y-auto transition-all duration-200  h-inherit w-full max-h-imherit ">

    <Teleport defer to=".search-wrapper">
      <ListboxFilter v-model:model-value="champQuery" type="text" class="size-full px-5 text-2"/>
</Teleport>

    <ListboxVirtualizer as-child :options="result" :text-content="(o) => o.name" v-slot="{option}" :estimate-size="40" class=" h-inherit max-h-imherit w-full">
 <SlideInTopOutBottom class="size-full">
      <ListboxItem :key="option.key" :value="option.key" :class="cn('h-[40px] w-full px-1 mt-2 flex items-center gap-3 font-medium')">
        <div  :class="cn('btn btn-ghost w-full justify-start h-[34px] ', {'btn-active': option.key == selectedChampion})">
        <ChampionIcon :id="option.id" :alt="option.name"  class="size-10 rounded-lg bg-black **:text-white"/>
        <span class="grow text-start truncate">
{{ option.name }}
</span>
        <ListboxItemIndicator>
          <icon name="right-sm" />
        </ListboxItemIndicator>
        </div>
      </ListboxItem>
</SlideInTopOutBottom>
    </ListboxVirtualizer>

  </ListboxRoot>
</section>



  <transition-fade as="section" group class=" overflow-hidden size-full max-h-150 col-start-2 inset-shadow-sm">
  <transition-slide group v-if="selectedChampion" class=" overflow-y-auto size-full max-h-150  w-full h-inherit h-min gap-8 grid grid-cols-4 p-8 ">
    <PopoverClose as-child v-for="skin in ix.skins[selectedChampion]" :key="skin.name" >
    <SplashCard
    :text="skin.name"
    @click="emit('update:splash', getSkinSplash(selectedChampion, skin, 'tile'))"
            :alt="skin.name" :skin-url="getSkinSplash(selectedChampion, skin, 'tile')"/>
            </PopoverClose>
  </transition-slide>

  <div v-else class="size-full grid place-items-end p-6">


    <Badge variant="n1" class=" **:text-2 font-medium ">
 Select or search a champion...
    </Badge>
  </div>
  </transition-fade>
  </article>
  </LazyPopPopoverContent>

  </Popover>
</template>