<script lang="ts" setup>
import type { GridApi } from 'ag-grid-community'

definePageMeta({
  title: 'All',
})

const route = useRoute()
const ss = useSidebarStore()

const isButtonHovered = ref()
const previousIndex = ref(0)
const totalTranslateY = ref(0)
const transitionName = ref('pocket-move-down')

watch(
  () => route.path, // Watch the value, not the ref itself
  (newRoute) => {
    console.log('💠 - newVal:', newRoute)
    const newIndex = defaultFolders.findIndex(p => p.link === newRoute)
    if (newIndex === -1)
      return
    const oldIndex = previousIndex.value
    const diff = newIndex - oldIndex
    totalTranslateY.value += diff * 30
    transitionName.value = newIndex > previousIndex.value ? 'pocket-move-up' : 'pocket-move-down'
    previousIndex.value = newIndex
  },
)

const translateY = computed(() => {
  return `translateY(${totalTranslateY.value}%) `
})

const NewPocket = defineAsyncComponent(() => import('components/pocket/sheet/NewPocket.vue'))

const ColumnDisplay = defineAsyncComponent(() => import('components/table/panels/ColumnDisplay.vue'))

const { arrowup, arrowdown } = useMagicKeys()

watch(arrowup, (v) => {
  if (v) {
    const index = defaultFolders.findIndex(p => p.link === route.path)
    if (index == 0) {
      navigateTo(defaultFolders[3].link)
    }
    else {
      navigateTo(defaultFolders[index - 1].link)
    }
  }
})

watch(arrowdown, (v) => {
  if (v) {
    const index = defaultFolders.findIndex(p => p.link === route.path)
    if (index == 3) {
      navigateTo(defaultFolders[0].link)
    }
    else {
      navigateTo(defaultFolders[index + 1].link)
    }
  }
})
</script>

<template>
  <div class=" size-full">
    <NeutralButton
      class="size-12  aspect-square rounded-full" :class="{ 'bg-neutral/80 text-nc': ss.isSidebarOpen }"
      @mouseenter="ss.sidebarComponent = NewPocket"
      @mouseleave="ss.onSidebarButtonLeave()"
    >
      <icon
        name="add-sm"
        class="size-6  stroke-[1.2]  drop-shadow-sm "
      />
    </NeutralButton>

    <button class="size-14 pointer-events-auto btn rounded-full" @mouseenter="ss.sidebarComponent = ColumnDisplay" @mouseleave="ss.onSidebarButtonLeave()">
      <icon
        name="ph:text-columns-light" class="size-7 dst"
        :class="{ 'bg-b2/70': ss.isSidebarOpen && ss.sidebarComponent == ColumnDisplay }"
      />
    </button>

    <Grow />

    <div class="size-full">
      <PageHeader :title="route.meta.title.toString()" class="" />
      <NuxtPage
        :transition="{
          name: 'push-up',
          mode: 'out-in',
        }"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
