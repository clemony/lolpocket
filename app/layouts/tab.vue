<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const { champion, pocket } = defineProps<{
  pocket?: Pocket
  champion?: Champion
  navItem?: NavigationMenuItem
}>()

const route = useRoute()

const scrollRef = useState<HTMLElement>('scrollRef')
const { scrollToHash, scrollY } = useScrollProvider(scrollRef, { offset: -100 })

const isScrolling = useState('isScrolling', () => ref(false))
const isScrollingFast = useState('isScrollingFast', () => ref(false))

let lastScrollTop = 0
let lastTs = performance.now()
let scrollTimeout: number | undefined

const FAST_SCROLL_PX_PER_MS = 1.2

function onScroll(e: Event) {
  const el = e.target as HTMLElement
  const now = performance.now()
  const scrollTop = el.scrollTop

  const dy = Math.abs(scrollTop - lastScrollTop)
  const dt = now - lastTs || 1
  const velocity = dy / dt

  isScrolling.value = true
  isScrollingFast.value = velocity > FAST_SCROLL_PX_PER_MS

  lastScrollTop = scrollTop
  lastTs = now

  clearTimeout(scrollTimeout)
  scrollTimeout = window.setTimeout(() => {
    isScrolling.value = false
    isScrollingFast.value = false
  }, 100)
}
/*
 const { registerAll } = useScrollSectionsProvider(
  scrollRef,
  scrollY,
)

onMounted(() => {
  registerAll(summonerSections.map(s => s.id))
}) */

const bg = computed(() =>
  route.path.match(/\/summoner/)
    ? s_data().splash
    : pocket
      ? pocket.icon
      : champion
        ? getSplash(champion.key, 'uncentered')
        : getRandomBg()
)
</script>

<template>
  <div class="contents">
    <Navbar :nav-item>
      <PocketMenubar v-if="pocket" />
    </Navbar>
    <!-- bg -->
    <div
      class="pointer-events-none relative z-0 overflow-hidden grid w-screen h-95 ">
      <BgSplash
        class=""
        :src="bg" />
      <UContainer
        class=" z-0 grid  items-center   py-16 ">
        <SummonerHeader v-if="route.path.match(/\/summoner/)" />
        <PocketHeader
          v-else-if="pocket"
          :pocket />
        <ChampionHeader
          v-else-if="champion"
          :champion />
      </UContainer>
    </div>
    <!-- Scrollable content @scroll="onScroll"
-->
    <!-- Sticky Tabs  -->
    <div
      class="pointer-events-none sticky justify-start -mt-15 top-0 z-16 flex h-15  w-screen items-end gap-4 overflow-hidden pl-20">
      <Separator class="absolute bottom-0 left-0 z-0 w-full bg-b3/40" />
      <UContainer>
        <SummonerChampionNavTabs
          v-if="route.fullPath.match(/\/summoner\/.+/)" />
        <NavFileTabs v-else />
      </UContainer>
    </div>
    <UMain
      class="bg-b1 ">
      <!-- page -->
      <UContainer>
        <slot />
      </UContainer>
    </UMain>
    <SiteFooter />
    <div class="fixed right-24 bottom-24 z-4 grid gap-4">
      <FloatingSummonerUtilities
        v-if="route.path.match(/\/summoner\/.+/)" />
      <UpFAB />
    </div>
  </div>
</template>
