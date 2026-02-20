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
const isSummonerRoute = computed(() =>
  Boolean(route.params.region && route.params.slug)
)

const bg = computed(() =>
  isSummonerRoute.value
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
    <Navbar>
      <template #center-leading>
        <slot name="center-leading" />
      </template>
    </Navbar>
    <!-- bg -->
    <div
      class="pointer-events-none relative z-0 -mt-15 grid h-95 w-screen overflow-hidden border-b border-p4/60">
      <BgSplash class="" :src="bg" />
      <UContainer class="z-0 grid items-center py-16">
        <SummonerHeader v-if="isSummonerRoute" />
        <PocketHeader v-else-if="pocket" :pocket />
        <ChampionHeader v-else-if="champion" :champion />
      </UContainer>
    </div>
    <!-- Sticky Tabs  -->
    <div
      class="pointer-events-none sticky top-0 z-11 -mt-15 flex h-15 w-screen items-end justify-start gap-4 overflow-hidden pl-20">
      <UContainer>
        <SummonerChampionNavTabs v-if="isSummonerRoute" />
        <NavFileTabs v-else />
      </UContainer>
    </div>
    <UMain class="z-0 bg-p0">
      <!-- page -->
      <UContainer>
        <slot />
      </UContainer>
      <div class="fixed right-24 bottom-24 z-4 grid gap-4">
        <FloatingSummonerUtilities v-if="isSummonerRoute" />
        <ToTop />
      </div>
    </UMain>
    <SiteFooter />
  </div>
</template>
