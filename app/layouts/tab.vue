<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui"
import { getRandomBg, getSplash } from "~/domain/utils/img"

const { champion, pocket } = defineProps<{
  pocket?: Pocket
  champion?: Champion
  navItem?: NavigationMenuItem
}>()

const route = useRoute()

const scrollRef = useState<HTMLElement>("scrollRef")
const { scrollToHash, scrollY } = useScrollProvider(scrollRef, { offset: -100 })

const bg = computed(() =>
  route.path.match(/\/summoner/)
    ? sData().splash
    : pocket
      ? pocket.icon
      : champion
        ? getSplash(champion.key, "uncentered")
        : getRandomBg()
)
</script>

<template>
  <div class="contents">
    <!-- bg -->
    <div
      class="pointer-events-none relative z-0 grid h-95 w-screen overflow-hidden">
      <BgSplash class="" :src="bg" />
      <UContainer class="z-0 grid items-center py-16">
        <SummonerHeader v-if="route.path.match(/\/summoner/)" />
        <PocketHeader v-else-if="pocket" :pocket />
        <ChampionHeader v-else-if="champion" :champion />
      </UContainer>
    </div>
    <!-- Sticky Tabs  -->
    <div
      class="pointer-events-none sticky top-0 z-16 -mt-15 flex h-15 w-screen items-end justify-start gap-4 overflow-hidden pl-20">
      <Separator class="absolute bottom-0 left-0 z-0 w-full bg-p3/40" />
      <UContainer>
        <SummonerChampionNavTabs
          v-if="route.fullPath.match(/\/summoner\/.+/)" />
        <NavFileTabs v-else />
      </UContainer>
    </div>
    <UMain class="bg-p0">
      <!-- page -->
      <UContainer>
        <slot />
      </UContainer>
      <div class="fixed right-24 bottom-24 z-4 grid gap-4">
        <FloatingSummonerUtilities v-if="route.path.match(/\/summoner\/.+/)" />
        <ToTop />
      </div>
    </UMain>
    <SiteFooter />
  </div>
</template>
