<script lang="ts" setup>
const props = defineProps<{
  pocket?: pocket

}>()

const emit = defineEmits(['update:hovered', 'update:open', 'update:component'])

const ss = useSidebarStore()
const pocket = ref(props.pocket)

const PocketBrowser = defineAsyncComponent(() => import('components/pocket/file-tree/PocketFileTree.vue'))
const EditPocketSheet = defineAsyncComponent(() => import('components/pocket/sheet/EditPocketSheet.vue'))

const pocketMenu = ref(null)
const isPMHovered = useElementHover(pocketMenu)
const pocketBrowser = ref(null)
const isPBHovered = useElementHover(pocketBrowser)

watchEffect(() => {
  ss.sidebarComponent = isPMHovered.value ? EditPocketSheet : null
})

watchEffect(() => {
  ss.sidebarComponent = isPBHovered.value ? EditPocketSheet : null
})
</script>

<template>
  <SidebarBase>
    <button
      ref="pocketMenu"
      class=" aspect-square size-12 mb-8 rounded-full !cursor-pointer grayscale hover:grayscale-0 shadow-sm drop-shadow-sm  transition-all duration-300 "
      :class="{ 'grayscale-0  !brightness-115 !contrast-85 !opacity-90': ss.isSidebarOpen }"
    >
      <PocketIcon :image="pocket.icon" class="size-12 pointer-events-none" />
    </button>

    <slot />
    <div class="flex flex-col gap-12 items-center justify-start size-full">
      <SelectedChampions :pocket="pocket" :is-open="ss.isSidebarOpen" />
      <SummonerSpellDisplay :pocket="pocket" :is-open="ss.isSidebarOpen" />
      <PocketRuneDisplay :pocket="pocket" :is-open="ss.isSidebarOpen" />
    </div>

    <Grow />

    <button
      ref="pocketBrowser"
      class="pointer-events-auto relative btn size-14 aspect-square btn-ghost  group  "
      :class="{ 'bg-b2/60 border-b2': ss.isSidebarOpen && ss.sidebarComponent == PocketBrowser }"
      @click.stop="ss.sidebarComponent = PocketBrowser; ss.isSidebarOpen = true"
    >
      <div class="relative size-full place-items-center grid group-hover:rotate-180 transition-all duration-300 ">
        <icon
          name="teenyicons:compass-outline" class="size-9 opacity-0  dst  absolute transition-all duration-300 group-hover:opacity-100"
          :class="{ 'opacity-100': ss.isSidebarOpen && ss.sidebarComponent == PocketBrowser }"
        />
        <icon
          name="teenyicons:compass-solid" class=" size-9 dst  absolute transition-all duration-300 group-hover:opacity-0"
          :class="{ 'opacity-0': ss.isSidebarOpen && ss.sidebarComponent == PocketBrowser }"
        />
      </div>
    </button>
    <SidebarSheet>
      <!-- <component :is="ss.sidebarComponent" v-if="ss.sidebarComponent" :key="ss.sidebarComponent" :pocket="pocket" class="pt-2" /> -->
      <div class="grid grid-rows-[70px_auto_170px] sheet size-full **:font-medium px-6">
        <div class="-mt-2">
          <button class=" cursor-pointer justify-start btn btn-ghost btn-lg w-full !text-3 text-left">
            Edit Pocket
          </button>
        </div>

        <div class="  flex grow flex-col gap-2.5 w-full h-full ">
          <button v-for="comp in pocketComponents" :key="comp.title" :ref="comp.linkRef" class=" btn btn-ghost btn-lg w-full text-left justify-start !text-3  cursor-pointer  flex items-center group" @click="ss.pageComponent = comp.compRef">
            {{ comp.title }}
          </button>
        </div>

        <PocketUtilityMenu :pocket="pocket" />
      </div>
    </SidebarSheet>
  </SidebarBase>
</template>

<style scoped>

</style>
