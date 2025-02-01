<script lang="ts" setup>

const props = defineProps<{
  pocket: pocket
}>()

const FilterSheet = defineAsyncComponent(() => import('./sheet/FilterSheet.vue'))
const  PocketBrowser= defineAsyncComponent(() => import('./file-tree/PocketFileTree.vue'))
const  ChampSelectSheet= defineAsyncComponent(() => import('./sheet/ChampSelectSheet.vue'))
const EditPocketDrawer = defineAsyncComponent(() => import('./sheet/EditPocketDrawer.vue'))
const FavoriteSheet = defineAsyncComponent(() => import('./sheet/FavoriteSheet.vue'))

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
</script>

<template>
  <Sheet id="sheet" v-model:open="isOpen" class=" w-20 h-screen">
    <SheetTrigger ref="target" class="outline-0 z-59 pointer-events-none ">
      <MenubarSpacer />

      <div class=" w-16 h-screen bg-b1 flex flex-col py-4 items-center gap-3.5 *:pointer-events-auto **:[&_svg]:shrink-0">
        <ShineButton :ref="elements[0].ref">
          <PocketIcon :image="pocket.icon" class="size-10" />
        </ShineButton>

        <PocketBarButton ref="overview">
          <icon name="infinity" class="size-6.5 " />
        </PocketBarButton>

        <PocketBarButton :ref="elements[1].ref">
          <i-no-champ class="size-10" />
        </PocketBarButton>

        <PocketBarButton :ref="elements[2].ref">
          <icon name="teenyicons:filter-outline" class="size-5" />
        </PocketBarButton>

        <PocketBarButton :ref="elements[3].ref">
          <icon name="teenyicons:heart-outline" class="size-5.5" />
        </PocketBarButton>

        <PocketBarButton :ref="elements[4].ref">
          <icon name="folders" class="size-5.5 overflow-hidden " />
        </PocketBarButton>

        <PocketBarButton :ref="elements[0].ref">
          <icon name="gear" class="size-6" />
        </PocketBarButton>
      </div>
    </SheetTrigger>
    <BasicSheet>
      <div
        class="min-w-110 w-110 *:w-full h-full pt-7.5 pl-3 pr-6"
      >
        <component :is="component" :pocket="pocket" @update:drag="(e) => isOpen = false" />
      </div>
    </BasicSheet>
  </Sheet>
</template>

<style scoped>

</style>
