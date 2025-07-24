<script lang="ts" setup>
import Fuse from 'fuse.js'
import { motion } from 'motion-v'
import { PopoverClose } from 'reka-ui'

const props = withDefaults(
  defineProps<{
    pocketKey?: string
    pocket?: Pocket
    selectedIcon?: string
    alignOffset?: number
    align?: Align
    sideOffset?: number
    side?: Side
    class?: HTMLAttributes['class']
    popoverClass?: HTMLAttributes['class']
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

console.log('💠 - pocket - pocket:', pocket)

const ix = useIndexStore()

const selectIcon = ref('/img/lp/192.webp')
const champSearch = ref(null)
const selectedChampion = ref(null)
const championSkins = ref<Skin[]>([])

watchEffect(() => {
  if (!selectedChampion.value)
    return
  championSkins.value = ix.skins[selectedChampion.value]
})
watch(() => selectIcon.value, (newVal) => {
  if (!pocket?.value)
    emit('update:selectedIcon', selectIcon.value)

  pocket.value.icon = newVal
})

const champFuse = computed(() => new Fuse(ix.champions, {

  keys: ['name'],
  findAllMatches: true,
  threshold: 0.3,
}))

const champSearchResults = computed(() => {
  if (!champSearch.value)
    return []
  return champFuse.value.search(champSearch.value)
})

function handleInput(e: string) {
  if (selectedChampion.value)
    selectedChampion.value = null
  champSearch.value = e
}

onMounted(() => {
  selectIcon.value = props?.pocket?.icon ?? props?.selectedIcon ?? '/img/lp/192.webp'

  ix.loadSkins()
})

const isOpen = ref(false)
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger :class="cn('group/picon z-0 shrink-0 cursor-pointer self-center  size-14   rounded-full pointer-events-auto  aspect-square  grid place-items-center relative', props.class) ">
      <PocketIcon
        :url=" pocket ? pocket?.icon : selectIcon"
        alt="pocket icon"
        class="group-hover/picon:brightness-50 pointer-events-none z-1 group-data-[state=open]/picon:brightness-50  tldr-30 shadow-sm drop-shadow-sm group-data-[state=open]/picon:ring group-data-[state=open]/picon:ring-offset-2 ring-n1/40 ring-offset-b1 rounded-full" />

      <icon
        name="images"
        class="size-6 !text-nc absolute opacity-0  group-hover/picon:opacity-80 z-2 transition-all pointer-events-none  duration-300 group-data-[state=open]/picon:opacity-100" />
    </PopoverTrigger>

    <LazyCustomPopoverContent
      hydrate-on-interaction
      :side-offset="props.sideOffset"
      :align-offset="props.alignOffset"
      :align="props.align"
      :side="props.side"
      :class="cn('w-96 py-2 overflow-hidden px-2', popoverClass)"
      as-child>
      <motion.div
        class=" flex flex-col  overflow-y-scroll"
        :style="{ maxHeight: !champSearch ? '60px' : '250px' }">
        <ContrastSearchInput
          v-model:model-value="champSearch"
          placeholder="Search Splash Icons..."
          @update:input="handleInput($event)" />

        <transition-slide
          v-if="!selectedChampion"
          group
          class="pt-2 overflow-y-scroll w-full flex flex-col">
          <label
            v-for="result in champSearchResults"
            :key="result.item.id"
            class="justify-start btn btn-ghost btn-ghost-dark  gap-3 text-3">
            <input
              v-model="selectedChampion"
              type="radio"
              class="peer hidden"
              :value="result.item.key" />

            <span class="size-8 ">
              <LazyChampionIcon
                :id="result.item.id"
                :alt="result.item.name"
                class="size-8 pointer-events-none rounded-lg"
                hydrate-on-visible />
            </span>
            {{ result.item.name }}
          </label>
        </transition-slide>

        <div
          v-else-if="selectedChampion"
          class="mt-3  overflow-y-scroll px-1 self-center pb-3 max-h-90 grid  grid-cols-4 pt-1 gap-2">
          <PocketIcon
            v-for="skin in ix.skins[selectedChampion]"
            :key="skin.name"
            v-tippy="skin.name"
            :alt="skin.name"
            :url="getSkinSplash(selectedChampion, skin, 'tile')"
            class="size-20.5  cursor-pointer rounded-md shrink-0 hover:ring-b3/80">
            <input
              v-model="selectIcon"
              type="radio"
              :value="getSkinSplash(selectedChampion, skin, 'tile')"
              class="peer hidden"
              @change="isOpen = false" />
          </PocketIcon>
        </div>

        <div
          v-else
          class="w-full  px-2  pt-3 pb-4">
          <p>Search for a champion to select a splash art.</p>
        </div>
      </motion.div>
    </LazyCustomPopoverContent>
  </Popover>
</template>