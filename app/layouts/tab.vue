<script lang="ts" setup>
import { useScrollProvider } from "#layers/lib/app/composables/navigation/useElementScroll"
import type { NavigationMenuItem, TabsItem } from "@nuxt/ui"
import {
  getRandomBg,
  getSplash,
  getSplashFromSkinKey,
} from "~/domain/utils/img"

const { champion, pocket, routes } = defineProps<{
  pocket?: Pocket
  champion?: Champion
  navItem?: NavigationMenuItem
  routes?: TabsItem[]
}>()

const route = useRoute()
const activeRoute = shallowRef<string>(String(route.name))

const scrollRef = useState<HTMLElement>("scrollRef")
const { scrollToHash, scrollY } = useScrollProvider(scrollRef, { offset: -100 })
const isSummonerRoute = computed(() =>
  Boolean(route.params.region && route.params.slug)
)
const pocketSplash = computed(() => {
  if (!pocket) return ""
  if (pocket.skin) return getSplashFromSkinKey(pocket.skin, "uncentered")
  if (pocket._champion) return getSplash(pocket._champion, "uncentered")
  return ""
})

const bg = computed(() =>
  isSummonerRoute.value
    ? sData().splash
    : pocket
      ? pocketSplash.value
      : champion
        ? getSplash(champion.key, "uncentered")
        : getRandomBg()
)
</script>

<template>
  <div class="contents">
    <Navbar>
      <template #center-leading>
        <slot name="center-leading" />
      </template>
    </Navbar>
    <!-- bg -->
    <div
      class="pointer-events-none relative z-0 -mt-15 grid h-95 w-full overflow-hidden border-b border-p4/60">
      <BgSplash :src="bg" />
      <UContainer class="z-0 grid items-center px-25! py-16">
        <LazySummonerHeader v-if="isSummonerRoute" />
        <LazyPocketHeader v-else-if="pocket" :pocket />
        <LazyChampionHeader v-else-if="champion" :champion />
      </UContainer>
    </div>
    <!-- Sticky Tabs  -->
    <UTabs
      v-if="routes"
      v-model="activeRoute"
      size="xl"
      :content="false"
      :ui="{
        root: 'pointer-events-none sticky top-20 z-11 -mt-13.75 flex h-fit w-full justify-center gap-4 overflow-hidden',
        list: 'max-w-(--ui-container) px-20',
        trigger: 'max-w-52',
      }"
      :items="routes"
      variant="lift" />

    <UMain class="z-0 bg-p0">
      <!-- page -->
      <UContainer>
        <slot />
      </UContainer>
      <div class="absolute right-24 bottom-24 z-4 grid gap-4">
        <!--    <LazyFloatingSummonerUtilities v-if="isSummonerRoute" /> -->
        <!--         <ToTop /> -->
      </div>
    </UMain>
    <SiteFooter />
  </div>
</template>
