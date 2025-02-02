<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const ts = useTempStore()

const FilterSheet = defineAsyncComponent(() => import('./sheet/FilterSheet.vue'))
const PocketBrowser = defineAsyncComponent(() => import('./file-tree/PocketFileTree.vue'))
const ChampSelectSheet = defineAsyncComponent(() => import('./sheet/ChampSelectSheet.vue'))
const EditPocketDrawer = defineAsyncComponent(() => import('./sheet/EditPocketDrawer.vue'))
const FavoriteSheet = defineAsyncComponent(() => import('./sheet/FavoriteSheet.vue'))
const ItemView = defineAsyncComponent(() => import('components/pocket/items/PocketItemView.vue'))

const pocket = ref(props.pocket)
const component = shallowRef(null)

const target = ref(null)
const isHovered = useElementHover(target)
const isOpen = ref(false)

watchEffect(() => {
  if (isHovered.value) {
    setTimeout(() => {
      if (isHovered.value) {
        isOpen.value = true
      }
    }, 1000)
  }
})

const overview = ref(null)
const elements = [
  { ref: ref(null), component: EditPocketDrawer },
  { ref: ref(null), component: ChampSelectSheet },
  { ref: ref(null), component: FilterSheet },
  { ref: ref(null), component: FavoriteSheet },
  { ref: ref(null), component: PocketBrowser },
]

const hoverStates = elements.map(el => ({
  ref: el.ref,
  isHovered: useElementHover(el.ref),
  component: el.component,
}))

watchEffect(() => {
  const hovered = hoverStates.find(el => el.isHovered.value)
  if (hovered) {
    component.value = hovered.component
  }
})

const isPopOpen = ref(false)
watch(
  () => ts.pocketItemSelect,
  (newVal) => {
    if (newVal) {
      isPopOpen.value = true
    }
  },
)
</script>

<template>
  <Sheet id="sheet" v-model:open="isOpen" class=" w-20 h-screen">
    <div class=" w-20  flex-col items-center flex h-screen bg-b1 flex-nowrap pb-2  z-59 outline-0">
      <SheetTrigger ref="target" class="outline-0 pointer-events-none ">
        <MenubarSpacer />
        <div class="flex w-full flex-col  py-6 items-center  gap-4 *:pointer-events-auto **:[&_svg]:shrink-0">
          <ShineButton :ref="elements[0].ref">
            <PocketIcon :image="pocket.icon" class="size-11 border border-neutral" />
          </ShineButton>

          <PocketBarButton ref="overview">
            <icon name="infinity" class="size-6.5 " />
          </PocketBarButton>

          <PocketBarButton :ref="elements[1].ref">
            <i-no-champ class="size-10" />
          </PocketBarButton>

          <PocketBarButton :ref="elements[2].ref">
            <icon name="teenyicons:filter-outline" class="size-5 stroke-[1.3]" />
          </PocketBarButton>

          <PocketBarButton :ref="elements[3].ref">
            <icon name="teenyicons:heart-outline" class="size-5.5 stroke-[1.3]" />
          </PocketBarButton>

          <PocketBarButton :ref="elements[4].ref">
            <icon name="folders" class="size-5.5 overflow-hidden stroke-[1.3]" />
          </PocketBarButton>
        </div>
      </SheetTrigger>

      <Grow />

      <Popover v-if="ts.pocketItemSelect" :open="isPopOpen">
        <PopoverTrigger @click="isPopOpen = true">
          <Button class="p-0 rounded-full shadow-sm border border-neutral">
            <img :src="`/img/item/${ts.pocketItemSelect.id}.webp`" class="size-11 rounded-full" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="left"
          :side-offset="18" :align-offset="-3" align="end" class="max-h-100 h-100 w-90 pr-0 rounded-xl" @click="isPopOpen = false"
          @interact-outside="isPopOpen = false"
        >
          <div class="max-h-90 h-90  overflow-y-auto pr-4">
            <LazyItemInfo />
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <BasicSheet side="right" class="!right-15 ">
      <div
        class="min-w-120 w-120 *:w-full h-full pt-7.5 pr-3 pl-6"
      >
        <component :is="component" :pocket="pocket" @update:drag="(e) => isOpen = false" />
      </div>
    </BasicSheet>
  </Sheet>
</template>

<style scoped>

</style>
