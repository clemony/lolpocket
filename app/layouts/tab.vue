<script lang="ts" setup>
import { summonerSections } from '~/components/lol/summoner/champion/summonerSections'

const { api, champion, pocket } = defineProps<{
  api?: SummonerApi
  pocket?: Pocket
  champion?: Champion
}>()

const route = useRoute()

const scrollRef = useState<HTMLElement | null>('scrollRef', () => null)

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

const { registerAll } = useScrollSectionsProvider(
  scrollRef,
  scrollY,
)

onMounted(() => {
  registerAll(summonerSections.map(s => s.id))
})

const bg = computed (() => api ? api.splash.value : pocket ? pocket.icon : champion ? getSplash(champion.key, 'uncentered') : getRandomBg())
</script>

<template>
  <div
    id="app"
    class="relative w-screen max-w-screen overflow-x-hidden overflow-y-hidden">
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <AppSidebar />

    <!-- bg -->
    <div class="absolute top-0 left-0 z-5 h-15 w-full overflow-hidden">
      <BgSplash :src="bg" />
    </div>

    <BgSplash
      :src="bg"
      class="mask-b-from-30% mask-b-to-70%" />

    <!-- Header block -->
    <div
      class="
        pointer-events-none z-0 grid size-full h-70 max-h-70 min-h-70
        grid-cols-2
      ">
      <div
        class="
          w-40% z-0 flex size-full grow flex-col items-start justify-center
          pt-16 pl-68 *:z-0
        ">
        <SummonerHeader
          v-if="api"
          :summoner="api.summoner.value" />
        <PocketHeader
          v-else-if="pocket"
          :pocket />
        <ChampionHeader
          v-else-if="champion"
          :champion />
      </div>
    </div>

    <!-- Scrollable content -->
    <div
      id="scrollRef"
      ref="scrollRef"
      :style="{ overflowAnchor: 'none' }"
      class="absolute inset-0 top-0 size-full h-screen max-w-screen overflow-auto pt-70"
      @scroll="onScroll">
      <!-- Sticky Tabs (now ABOVE parent header) -->
      <div
        class="
          pointer-events-none sticky -top-70 z-16 flex h-15 min-h-15 w-full
          items-end gap-4 overflow-hidden pl-66
        ">
        <Separator class="absolute bottom-0 left-0 z-0 w-full bg-b3/60" />
        <SummonerChampionNavTabs
          v-if="route.fullPath.match(/\/summoner\/.+/)" />
        <NavFileTabs
          v-else />
      </div>

      <!-- Context wrapper -->
      <div
        class="relative z-auto -mt-px flex min-h-screen w-screen max-w-screen flex-col bg-b1">
        <!-- page -->
        <slot :api />
      </div>
      <SiteFooter />
    </div>
  </div>
  <div class="fixed top-0 right-8 z-20 flex h-15 w-56 items-center gap-3">
    <LazySummonerDropdown
      v-if="api"
      :api />

    <PocketMenubar
      v-else-if="pocket" />
  </div>
  <div class="fixed right-24 bottom-24 z-4 grid gap-4">
    <FloatingSummonerUtilities
      v-if="route.path.match(/\/summoner\/.+/)"
      :api />
    <UpFAB />
  </div>
</template>
