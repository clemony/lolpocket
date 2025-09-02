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
  return props.pocketKey ? ps().getPocket(props.pocketKey) : props.pocket
})

console.log('💠 - pocket - pocket:', pocket)

const ix = useIndexStore()

const selectIcon = ref('')
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

function handleInput() {
  if (selectedChampion.value)
    selectedChampion.value = null
}

onMounted(() => {
  selectIcon.value = props?.pocket?.icon ?? props?.selectedIcon ?? '/img/lp/192.webp'

  ix.loadSkins()
})

const isOpen = ref(false)
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger :class="cn('group/icon z-0 shrink-0 cursor-pointer self-center  size-14   rounded-full pointer-events-auto  aspect-square  grid place-items-center relative', props.class) ">
      <PocketIcon
        :url=" pocket ? pocket?.icon : selectIcon"
        alt="pocket icon"
        class="group-hover/icon:brightness-50 pointer-events-none z-1 group-data-[state=open]/icon:brightness-50  transition-all duration-200  group-data-[state=open]/icon:ring group-data-[state=open]/icon:ring-offset-2 ring-neutral/40 ring-offset-b1 size-full rounded-full" />

      <icon
        name="images"
        class="size-6 !text-nc absolute opacity-0  group-hover/icon:opacity-80 z-2 transition-all pointer-events-none  duration-300 group-data-[state=open]/icon:opacity-100" />
    </PopoverTrigger>

    <LazyPopPopoverContent
      hydrate-on-interaction
      :side-offset="props.sideOffset"
      :align-offset="props.alignOffset"
      :align="props.align"
      :side="props.side"
      :class="cn('w-96 p-0 overflow-hidden', popoverClass)"
      as-child>
      <motion.div
        class=" flex flex-col  p-px overflow-y-scroll"
        :style="{ maxHeight: !champSearch ? '60px' : '250px' }">
        <div class=" relative   w-full px-3 h-12 shrink-0 group/txt gap-3 flex items-center w-full ">
          <icon name="search" />
          <input
            v-model="champSearch"
            class="h-full placeholder:italic   w-full pr-4 text-2 focus:placeholder:opacity-0 transition-all duration-200"
            placeholder="Search Splash Icons..."
            @input="handleInput()"
            @keydown.stop
            @keydown.enter.prevent />

          <Button
            variant="ghost"
            size="xs"
            class="btn-square absolute top-3 right-2 shrink-0 group-has-[:placeholder-shown]/txt:opacity-0 opacity-100 size-6">
            <icon
              name="x-sm"
              class="size-4 **:stroke-[1.5]" />
          </Button>
        </div>

        <Separator />
        <transition-slide
          v-if="!selectedChampion"
          group
          class="py-3 px-1 overflow-y-scroll w-full flex flex-col">
          <Label
            v-for="result in champSearchResults"
            :key="result.item.id"
            variant="ghost"
            size="sm"
            class="justify-start  duration-0">
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
          </Label>
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
          <p>Search for a champion to select a skin.</p>
        </div>
      </motion.div>
    </LazyPopPopoverContent>
  </Popover>
</template>