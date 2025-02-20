<script setup lang="ts">
const emit = defineEmits(['update:hovered'])
const ss = useSidebarStore()
const route = useRoute()

const pocket = ref(getPocket(route.params.pocketKey))
const selectedRuneSet = ref(pocket.value?.runes.sets?.[0] ?? null)

const EditPocketSheet = defineAsyncComponent(() => import('components/pocket/sheet/EditPocketSheet.vue'))

const PocketBrowser = defineAsyncComponent(() => import('components/pocket/sheet/PocketBrowser.vue'))
</script>

<template>
  <Sidebar>
    <SidebarWrapper>
      <SidebarTrigger>
        <button
          class=" aspect-square size-12 mb-8 rounded-full !pointer-events-auto !cursor-pointer grayscale hover:grayscale-0 shadow-sm drop-shadow-sm  transition-all duration-300 "
          :class="{ 'grayscale-0  !brightness-115 !contrast-85 !opacity-90': ss.isSidebarOpen }"
          @mouseenter="ss.sidebarComponent = EditPocketSheet"
          @mouseleave="ss.onSidebarButtonLeave()"
        >
          <PocketIcon :image="pocket.icon" class="size-12 pointer-events-none" />
        </button>

        <SidebarNav :model-value="getPocketLinks(pocket)">
        </SidebarNav>

        <div class="flex flex-col gap-12 items-center justify-start size-full">
          <SelectedChampions :pocket="pocket" :is-open="ss.isSidebarOpen" />
          <SummonerSpellDisplay :pocket="pocket" :is-open="ss.isSidebarOpen" />
          <PocketRuneDisplay :pocket="pocket" :is-open="ss.isSidebarOpen" />
        </div>

        <Grow />

        <label

          class="pointer-events-auto relative btn size-14 aspect-square btn-ghost  group  "
          :class="{ 'bg-b2/60 border-b2': ss.isSidebarOpen && ss.sidebarComponent == PocketBrowser }"
        >
          <button for="pocket-menu" class="relative size-full place-items-center grid group-hover:rotate-180 transition-all duration-300 " @mouseenter="ss.sidebarComponent = PocketBrowser" @mouseleave="ss.onSidebarButtonLeave()">

            <icon
              name="teenyicons:compass-outline" class="size-9 opacity-0  dst  absolute transition-all duration-300 group-hover:opacity-100"
              :class="{ 'opacity-100': ss.isSidebarOpen && ss.sidebarComponent == PocketBrowser }"
            />
            <icon
              name="teenyicons:compass-solid" class=" size-9 dst  absolute transition-all duration-300 group-hover:opacity-0"
              :class="{ 'opacity-0': ss.isSidebarOpen && ss.sidebarComponent == PocketBrowser }"
            />
          </button>
        </label>
      </SidebarTrigger>

      <NuxtPage
        :selected-runes="selectedRuneSet"
        :pocket="pocket"
        :transition="{
          name: 'push-up',
          mode: 'out-in',
        }"
      />
    </SidebarWrapper>
    <SidebarContent :class="{ ' bg-b2/80': route.name == 'items' }">
      <transition-slide group class="size-full">
        <component :is="ss.sidebarComponent" v-if="ss.sidebarComponent != null" :key="ss.sidebarComponent" :pocket="pocket" class="pt-2" />
        <DefaultPocketMenu v-else :pocket="pocket" />
      </transition-slide>
    </SidebarContent>
  </Sidebar>
</template>

<style>

</style>
