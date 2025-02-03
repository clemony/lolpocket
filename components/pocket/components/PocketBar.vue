<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const ts = useTempStore()

const FilterSheet = defineAsyncComponent(() => import('components/pocket/sheet/FilterSheet.vue'))
const PocketBrowser = defineAsyncComponent(() => import('components/pocket/file-tree/PocketFileTree.vue'))
const EditPocketSheet = defineAsyncComponent(() => import('components/pocket/sheet/EditPocketSheet.vue'))

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
  { ref: ref(null), component: PocketBrowser },
  { ref: ref(null), component: EditPocketSheet },
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
  <Sheet id="sheet" v-model:open="isOpen" class=" w-24 max-w-24 min-w-24  h-screen max-h-screen">
    <div class=" w-24  flex-col items-center flex h-screen bg-b1 flex-nowrap pb-2  z-59 outline-0">
      <MenubarSpacer class="!h-[5.8vh]" />

      <SheetTrigger ref="target" class="outline-0 pointer-events-none ">
        <div class="flex w-full flex-col   items-center  gap-4  **:[&_svg]:shrink-0 mb-12">
          <button
            :ref="elements[0].ref" class="pointer-events-auto relative btn btn-lg aspect-square btn-ghost  group  p-2 mt-2"
            :class="{ 'bg-b2/60 border-b2': isOpen && component == PocketBrowser }"
          >
            <div class="relative size-full place-items-center grid group-hover:rotate-180 transition-all duration-300 ">
              <icon
                name="teenyicons:compass-outline" class="size-7  opacity-0  dst  absolute transition-all duration-300 group-hover:opacity-100"
                :class="{ 'opacity-100': isOpen && component == PocketBrowser }"
              />
              <icon
                name="teenyicons:compass-solid" class=" size-7 dst  absolute transition-all duration-300 group-hover:opacity-0"
                :class="{ 'opacity-0': isOpen && component == PocketBrowser }"
              />
            </div>
          </button>
          <!--         <ShineButton :ref="elements[1].ref">
            <PocketIcon :image="pocket.icon" class="size-11 border border-neutral" />
          </ShineButton> -->
        </div>
      </SheetTrigger>

      <slot />
      <Grow />

      <SheetTrigger ref="target" class="outline-0 pointer-events-none mb-1">
        <div class="flex w-full flex-col   items-center  *:pointer-events-auto **:[&_svg]:shrink-0 ">
          <button
            :ref="elements[1].ref" class="relative btn btn-lg aspect-square btn-ghost  group  p-2 mt-2"
            :class="{ 'bg-b2/60 border-b2': isOpen && component == EditPocketSheet }"
          >
            <div class="relative size-full place-items-center grid transition-all duration-300 ">
              <icon
                name="teenyicons:edit-circle-outline" class="size-7  dst  absolute transition-all duration-300 opacity-0 group-hover:opacity-100"
                :class="{ 'opacity-100': isOpen && component == EditPocketSheet }"
              />
              <icon
                name="teenyicons:edit-circle-solid" class=" size-7  dst  absolute transition-all duration-300 group-hover:opacity-0"
                :class="{ 'opacity-0': isOpen && component == EditPocketSheet }"
              />
            </div>
          </button>
        </div>
      </SheetTrigger>

      <DropdownMenu>
        <DropdownMenuTrigger class="group">
          <button class="relative btn btn-lg aspect-square group btn-ghost px-2  ">
            <div class="group-data-[state=open]:bg-transparent bg-neutral border ring ring-neutral border-neutral transition-all duration-300 size-6.25 group-hover:bg-transparent grid place-items-center dst  rounded-full ">
              <icon name="lines" class="stroke-[1.3] size-4  dst   group-hover:text-bc group-data-[state=open]:!text-bc text-nc" />
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="right" :align-offset="0" :side-offset="15" class="w-70  pb-2">
          <LazyPocketDropdownMenu :pocket="pocket" />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    <BasicSheet side="left" class="!left-18 ">
      <div
        class="min-w-120 w-120  max-w-120 *:w-full h-full pt-5.5 pl-3 pr-6"
      >
        <component :is="component" :pocket="pocket" @update:drag="(e) => isOpen = false" />
      </div>
    </BasicSheet>
  </Sheet>
</template>

<style scoped>

</style>
