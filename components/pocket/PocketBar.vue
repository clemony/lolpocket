<script lang="ts" setup>
import PocketBrowser from './file-tree/PocketFileTree.vue'
import ChampSelectSheet from './sheet/ChampSelectSheet.vue'
import EditPocketDrawer from './sheet/EditPocketDrawer.vue'

const props = defineProps<{
  pocket: pocket
}>()
const component = shallowRef(null)
watch(
  () => component.value,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
const target = ref(null)

const isHovered = useElementHover(target)
const isOpen = ref(false)

const browser = ref(null)
const isBHovered = useElementHover(browser)

const champions = ref(null)
const isCHovered = useElementHover(champions)

const edit = ref(null)
const isEHovered = useElementHover(edit)

watch(
  () => isHovered.value,
  (newVal) => {
    if (newVal) {
      isOpen.value = true
    }
  },
)

watch(
  () => isBHovered.value,
  (newVal) => {
    if (newVal) {
      component.value = PocketBrowser
    }
  },
)

watch(
  () => isCHovered.value,
  (newVal) => {
    if (newVal) {
      component.value = ChampSelectSheet
    }
  },
)

watch(
  () => isEHovered.value,
  (newVal) => {
    if (newVal) {
      component.value = EditPocketDrawer
    }
  },
)
</script>

<template>
  <Sheet id="sheet" v-model:open="isOpen" class=" w-20 h-screen">
    <SheetPortal :disabled="true" to="#sheet">
      <SheetTrigger ref="target" class="outline-0 z-59 pointer-events-none">
        <MenubarSpacer />

        <div class=" w-16 h-screen bg-b1 flex flex-col py-4 items-center gap-3">
          <PocketIcon :image="pocket.icon" class="size-10" />
          <icon name="infinity" class="size-6.5 " />

          <Label ref="champions" variant="ghost" class="pointer-events-auto">

            <i-no-champ class="size-10" />
          </Label>

          <i-rune class="size-6.5 dst" />
          <div class=" size-5.5   relative ">
            <icon name="grommet-icons:square" class="absolute z-0 size-5.5" />
            <div class="top-0 size-1.75 bg-b1  absolute right-0  z-10"></div>
            <div class=" bottom-0 size-1.75 bg-b1  absolute left-0  z-10"></div>
          </div>

          <Label ref="browser" variant="ghost" class="pointer-events-auto">

            <icon name="folders" class="size-5.5 overflow-hidden " />
          </Label>

          <Label ref="edit" variant="ghost" class="pointer-events-auto">
            <icon name="gear" class="size-6" />
          </Label>
        </div>
      </SheetTrigger>
      <BasicSheet class="top-[5vh] left-16 outline-0 border-r-b2 min-w-105">
        <component :is="component" :pocket="pocket" />
      </BasicSheet>
    </SheetPortal>
  </Sheet>
</template>

<style scoped>

</style>
