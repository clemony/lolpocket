<script lang="ts" setup>
import { vMouseInElement } from '@vueuse/components'

const props = defineProps<{
  pocket: pocket
}>()

const emit = defineEmits(['update:hovered', 'update:open', 'update:component'])

const ts = useTempStore()
const ps = usePocketStore()

const FilterSheet = defineAsyncComponent(() => import('components/pocket/sheet/FilterSheet.vue'))
const PocketBrowser = defineAsyncComponent(() => import('components/pocket/file-tree/PocketFileTree.vue'))
const EditPocketSheet = defineAsyncComponent(() => import('components/pocket/sheet/EditPocketSheet.vue'))

const pocket = ref(props.pocket)
const component = shallowRef(null)
const sidebarComponent = shallowRef(null)

const trigger = ref(null)

const isOpen = ref(false)
const sheet = ref(null)

const isOutsideTrigger = ref(true)
const isOutsideSheet = ref(true)

watchEffect(() => {
  if (!isOutsideTrigger.value) {
    setTimeout(() => {
      if (!isOutsideTrigger.value) {
        isOpen.value = true
        emit('update:open', isOpen.value)
      }
    }, 500)
  }
})

watch(
  () => isOutsideSheet.value,
  (newVal) => {
    if (isOpen.value == true && newVal == true) {
      setTimeout(() => {
        if (isOutsideTrigger.value && isOutsideSheet.value) {
          isOpen.value = false
          emit('update:open', isOpen.value)
        }
      }, 200)
    }
  },
)

watchEffect(() => {
  const hovered = hoverStates.find(el => el.isHovered.value)
  emit('update:hovered', hovered ? { title: hovered.title, hovered: true } : { title: null, hovered: false })
})

/* const overview = ref(null)
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
}) */

function onMouseInTrigger({ isOutside }) {
  isOutsideTrigger.value = isOutside
}

function onMouseInSheet({ isOutside }) {
  isOutsideSheet.value = isOutside
}

const isBtnHovered = computed(() => {
  const hovered = hoverStates.find(el => el.isBtnHovered.value)
  return hovered ? hovered.title : null
})

watchEffect(() => {
  !isOpen.value ? sidebarComponent.value = null : ''
})
// const lock = false
</script>

<template>
  <Sheet id="sheet" v-model:open="isOpen" class=" w-24 max-w-24 min-w-24  h-screen max-h-screen ">
    <div ref="trigger" v-mouse-in-element="onMouseInTrigger" class=" w-22  flex-col pointer-events-none flex h-screen bg-b1 flex-nowrap pb-2  z-65  outline-0 ">
      <MenubarSpacer class="!h-[5.8vh]" />

      <div class="mt-1 flex w-full flex-col transition-all duration-300  items-center     **:[&_svg]:shrink-0 mb-12">
        <button class="relative btn size-14 aspect-square group btn-ghost px-2  ">
          <div class="group-data-[state=open]:bg-transparent bg-neutral border ring ring-neutral border-neutral transition-all duration-300 size-8 group-hover:bg-transparent grid place-items-center dst  rounded-full ">
            <icon name="lines" class="stroke-[1.3] size-4.5  dst   group-hover:text-bc group-data-[state=open]:!text-bc text-nc" />
          </div>
        </button>

        <button
          class="pointer-events-auto relative btn size-14 aspect-square btn-ghost  group  "
          :class="{ 'bg-b2/60 border-b2': isOpen && sidebarComponent == PocketBrowser }"
          @click.stop="sidebarComponent = PocketBrowser; isOpen = true"
        >
          <div class="relative size-full place-items-center grid group-hover:rotate-180 transition-all duration-300 ">
            <icon
              name="teenyicons:compass-outline" class="size-9 opacity-0  dst  absolute transition-all duration-300 group-hover:opacity-100"
              :class="{ 'opacity-100': isOpen && sidebarComponent == PocketBrowser }"
            />
            <icon
              name="teenyicons:compass-solid" class=" size-9 dst  absolute transition-all duration-300 group-hover:opacity-0"
              :class="{ 'opacity-0': isOpen && sidebarComponent == PocketBrowser }"
            />
          </div>
        </button>
      </div>

      <slot />

      <Grow />

      <div class="flex w-full flex-col   items-center  *:pointer-events-auto **:[&_svg]:shrink-0 ">
        <button
          class="relative btn size-14 aspect-square btn-ghost  group  p-2 mt-2"
          :class="{ 'bg-b2/60 border-b2': isOpen && sidebarComponent == EditPocketSheet }"
        >
          <div class="relative size-full place-items-center grid transition-all duration-300 ">
            <icon
              name="teenyicons:edit-circle-outline" class="size-9  dst  absolute transition-all duration-300 opacity-0 group-hover:opacity-100"
              :class="{ 'opacity-100': isOpen && sidebarComponent == EditPocketSheet }"
            />
            <icon
              name="teenyicons:edit-circle-solid" class=" size-9  dst  absolute transition-all duration-300 group-hover:opacity-0"
              :class="{ 'opacity-0': isOpen && sidebarComponent == EditPocketSheet }"
            />
          </div>
        </button>
      </div>
    </div>
    <BasicSheet side="left" class="!left-22 min-w-107 !w-full max-w-90" :class="{ '!max-w-120 w-120': sidebarComponent == PocketBrowser }">
      <div
        ref="sheet"
        v-mouse-in-element="onMouseInSheet"
        class=" *:w-full h-full pt-5.5 pl-6 pr-6"
      >
        <component :is="sidebarComponent" v-if="sidebarComponent" :pocket="pocket" />

        <div v-else class="flex flex-col sheet">
          <div class="flex flex-col gap-2 *:font-medium  ">
            <div class="-mt-1.5">
              <button class=" cursor-pointer size-full h-16 text-left">
                Pocket Browser
              </button>
            </div>
            <div class="h-8"></div>
            <button v-for="comp in pocketComponents" :key="comp.title" :ref="comp.ref" class=" w-full h-16 py-3 cursor-pointer  flex items-center group" @click="emit('update:component', comp.compRef)">
              <LinkButtonLine :active="isBtnHovered === comp.title" class="w-fit   font-medium justify-start text-left">
                {{ comp.title }}
              </LinkButtonLine>
            </button>
          </div>
        </div>
      </div>
    </BasicSheet>
  </Sheet>
</template>

<style scoped>

</style>
