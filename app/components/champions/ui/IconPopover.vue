<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    pocketKey?: string
    pocket?: Pocket
    alignOffset?: number
    align?: Align
    sideOffset?: number
    side?: Side
    class?: HTMLAttributes['class']
    popoverClass?: HTMLAttributes['class']
  }>(),
  {
    side: 'bottom',
    sideOffset: 0,
    align: 'start',
    alignOffset: 0,
  }
)

const emit = defineEmits(['update:open'])

const pocket = computed(() => {
  return props.pocketKey ? ps().getPocket(props.pocketKey) : props.pocket
})

const selectedChampion = ref<string>(null)
const searchQuery = ref<string>('')
const { results } = useSimpleSearch(ix().champions, searchQuery)

const itemsPerPage = 8
const currentPage = ref<number>(1)

const pagedSearchItems = computed(() => {
  if (!results.value)
    return null
  const start = (currentPage.value - 1) * itemsPerPage
  return results.value.slice(start, start + itemsPerPage)
})

watch(
  () => results.value.length,
  (newVal) => {
    if (newVal)
      currentPage.value = 1
  }
)

function handleInput() {
  if (selectedChampion.value)
    selectedChampion.value = null
}

onMounted(() => {
  ix().loadSkins()
})

const isOpen = ref<boolean>(false)

function handleImg(img: string) {
  pocket.value.icon = img
  searchQuery.value = ''
  selectedChampion.value = null
  isOpen.value = false
}
</script>

<template>
  <Popover
    v-model:open="isOpen"
    @update:open="(e) => emit('update:open', e)">
    <PopoverTrigger
      :class="
        cn(
          'group/icon z-0 shrink-0 cursor-pointer self-center  size-14   rounded-full pointer-events-auto  aspect-square  grid place-items-center relative',
          props.class,
        )
      ">
      <slot>
        <!-- TODO default splash -->
        <PocketIcon
          :url="pocket ? pocket?.icon : ''"
          alt="pocket icon"
          class="group-hover/icon:brightness-50 pointer-events-none z-1 group-data-[state=open]/icon:brightness-50 transition-all duration-200 group-data-[state=open]/icon:ring group-data-[state=open]/icon:ring-offset-2 ring-neutral/40 ring-offset-b1 size-full rounded-full" />

        <icon
          name="images"
          class="size-6 !text-nc absolute opacity-0 group-hover/icon:opacity-80 z-2 transition-all pointer-events-none duration-300 group-data-[state=open]/icon:opacity-100" />
      </slot>
    </PopoverTrigger>

    <LazyPopPopoverContent
      :side-offset="props.sideOffset"
      :align-offset="props.alignOffset"
      :align="props.align"
      :side="props.side"
      :class="
        cn(
          'w-96 p-0 h-max overflow-hidden flex flex-col h-max  *:shrink-0  p-px overflow-y-scroll',
          popoverClass,
        )
      ">
      <Input
        v-model="searchQuery"
        class="w-full !h-12 !border-x-0 !border-y-0 border-b border-b-b3 rounded-none !ring-0"
        placeholder="Search Splash Library..."
        @clear:input="searchQuery = ''"
        @input="handleInput()">
        <icon name="search" />
      </Input>
      <Separator />
      <SlideInTopOutBottom
        v-if="!selectedChampion && searchQuery"
        group
        class="pt-3 px-1 overflow-y-scroll w-full flex flex-col">
        <Label
          v-for="item in pagedSearchItems"
          :key="item.id"
          variant="ghost"
          size="sm"
          class="justify-start hover:border-b4/80 duration-0">
          <input
            v-model="selectedChampion"
            type="radio"
            class="peer hidden"
            :value="item.key" />

          <span class="size-8">
            <LazyChampionIcon
              :id="item.id"
              :alt="item.name"
              class="size-8 pointer-events-none rounded-lg" />
          </span>
          {{ item.name }}
        </Label>

        <Pagination
          v-model:page="currentPage"
          :total="ix().champions.length"
          :default-page="1"
          :sibling-count="1"
          :show-edges="false"
          :items-per-page="itemsPerPage"
          class="max-w-220 justify-center justify-self-start mx-0">
          <PaginationContent>
            <PaginationPrev
              size="xs"
              class="disabled:opacity-40 btn-square size-8" />
            <PaginationNext
              size="xs"
              class="disabled:opacity-40 btn-square size-8" />
          </PaginationContent>
        </Pagination>
      </SlideInTopOutBottom>

      <div
        v-else-if="selectedChampion"
        class="mt-3 overflow-y-scroll px-1 self-center pb-3 max-h-90 grid grid-cols-4 pt-1 gap-2">
        <PocketIcon
          v-for="skin in ix().skins[selectedChampion]"
          :key="skin.name"
          v-tippy="skin.name"
          :alt="skin.name"
          :url="getSkinSplash(selectedChampion, skin, 'tile')"
          class="size-20.5 cursor-pointer rounded-md shrink-0 hover:ring-b3/80"
          @click="
            handleImg(getSkinSplash(selectedChampion, skin, 'tile'))
          "></PocketIcon>
      </div>

      <div
        v-else
        class="w-full min-h-24 h-24 grid place-items-center px-2 pt-3 pb-4">
        <p>Search for a champion to select a skin.</p>
      </div>
    </LazyPopPopoverContent>
  </Popover>
</template>
