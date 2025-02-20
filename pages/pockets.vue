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


const { arrowup, arrowdown  } = useMagicKeys()

watch(arrowup, (v) => {
  if (v){
        const index = defaultFolders.findIndex(p => p.link === route.path)
        if (index == 0){
          navigateTo(defaultFolders[3].link)
        } else {
           navigateTo(defaultFolders[index - 1].link)
      
        }
  }
})

watch(arrowdown, (v) => {
  if (v){
        const index = defaultFolders.findIndex(p => p.link === route.path)
        if (index == 3){
          navigateTo(defaultFolders[0].link)
        } else {
           navigateTo(defaultFolders[index + 1].link)
      
        }
  }
})
</script>

<template>
  <div class="sidebar relative">
    <SidebarBase>
      <NeutralButton
        class="size-12  aspect-square mb-8 rounded-full" :class="{ 'bg-neutral/80 text-nc': ss.isSidebarOpen }"
        @mouseenter="ss.sidebarComponent = NewPocket"
        @mouseleave="ss.onSidebarButtonLeave()"
      >
        <icon
          name="add-sm"
          class="size-6  stroke-[1.2]  drop-shadow-sm "
        />
      </NeutralButton>

      <ul class="timeline timeline-vertical pointer-events-none justify-center items-center relative self-center w-fit py-0 px-2 rounded-full bg-b2 border-b3 shadow-sm ">
        <div class="absolute pointer-events-none **:pointer-events-none w-1  bg-b3/30 h-4/5 overflow-hidden justify-center">
          <div class="size-full duration-1000 transition-all " :style="{ transform: translateY }">
            <div
              class="  size-5 bg-neutral shadow-[0px_0px_30px_5px_var(--color-bc)]"
            >
            </div>
          </div>
        </div>

        <li v-for="page in defaultFolders" :key="page.name" class="h-18 group ">
          <label :ref="page.buttonRef" for="pocket-page" class=" !pointer-events-auto timeline-middle cursor-pointer sidebar-button" @click.prevent="navigateTo(page.link)">
            <input
              type="radio"
              name="pocket-page"
              :value="page.link"
              class="hidden peer"
            />
            <div class="size-fit rounded-full bg-b1 pointer-events-none **:pointer-events-none">
              <div class="!size-10 rounded-full shadow-sm   transition-all duration-700  bg-b3 group-hover:bg-neutral/40    z-1 [&_svg]:!text-nc" :class="{ 'bg-neutral/40': isButtonHovered == page.buttonRef, 'drop-shadow-sm  scale-115': route.path == page.link }">

                <div class="grid place-items-center size-full rounded-full relative z-0 !overflow-hidden">

                  <Transition :name="transitionName" mode="out-in">
                    <div v-if=" route.path == page.link" class="size-10 pointer-events-none bg-neutral z-10 absolute" />
                  </Transition>

                  <icon :name="page.icon" class="size-5 z-20 text-nc dst" />
                </div>
              </div>
            </div>
          </label>
        </li>
      </ul>

      <button class="size-14 mt-6 pointer-events-auto btn rounded-full" @mouseenter="ss.sidebarComponent = ColumnDisplay" @mouseleave="ss.onSidebarButtonLeave()">
        <icon
          name="ph:text-columns-light" class="size-7 dst"
          :class="{ 'bg-b2/70': ss.isSidebarOpen && ss.sidebarComponent == ColumnDisplay }"
        />
      </button>

      <Grow />

      <SidebarSheet>
        <transition-slide group>
          <component :is="ss.sidebarComponent" v-if="ss.sidebarComponent != null" :key="ss.sidebarComponent" :grid="route.meta.title" class="pt-2" />
          <DefaultTableMenu v-else />
        </transition-slide>
      </SidebarSheet>
    </SidebarBase>

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
