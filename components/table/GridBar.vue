<script lang="ts" setup>
import ColumnDisplay from './panels/ColumnDisplay.vue'

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

const elements = [
  { ref: ref(null), component: ColumnDisplay },
  { ref: ref(null), component: '' },
  { ref: ref(null), component: '' },
  { ref: ref(null), component: '' },
  { ref: ref(null), component: '' },
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
  <Sheet id="sheet" v-model:open="isOpen" class=" w-20 h-full">
    <SheetTrigger ref="target" class="outline-0 z-59 pointer-events-none   border-b2 border-t">
      <div class=" w-16 h-screen bg-b1 flex flex-col py-4 items-center gap-3.5 *:pointer-events-auto **:[&_svg]:shrink-0">
        <PocketBarButton :ref="elements[0].ref">
          <icon name="infinity" class="size-6.5 " />
        </PocketBarButton>

        <PocketBarButton :ref="elements[1].ref">
          <icon name="search" class="size-5" />
        </PocketBarButton>

        <PocketBarButton :ref="elements[2].ref">
          <icon name="filter" class="size-5" />
        </PocketBarButton>

        <PocketBarButton :ref="elements[3].ref">
          <icon name="heart" class="size-5.5" />
        </PocketBarButton>

        <PocketBarButton :ref="elements[4].ref">
          <icon name="folders" class="size-5.5 overflow-hidden " />
        </PocketBarButton>
      </div>
    </SheetTrigger>
    <BasicSheet>
      <div
        class="min-w-110 w-110 *:w-full h-full pt-7.5 pl-3 pr-6"
      >
        <component :is="component" @update:drag="(e) => isOpen = false" />
      </div>
    </BasicSheet>
  </Sheet>
</template>

<style scoped>

</style>
