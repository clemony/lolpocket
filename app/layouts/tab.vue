<script lang="ts" setup>
const { champion, pocket, summonerState: ss } = defineProps<{
  summonerState?: SummonerInject
  pocket?: Pocket
  champion?: Champion
}>()
const scrollRef = useState('scrollRef', () => shallowRef<HTMLElement>(null))

useScrollProvider(scrollRef)
const bg = computed (() => ss ? ss.splash.value : pocket ? pocket.icon : champion ? getSplash(champion.key, 'uncentered') : getRandomBg())
</script>

<template>
  <div
    id="app"
    class="relative w-screen max-w-screen overflow-x-hidden overflow-y-hidden">
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <AppSidebarTrigger />

    <!-- bg -->
    <div class="absolute top-0 left-0 z-5 h-15 w-full overflow-hidden">
      <BgSplash :src="bg" />
    </div>

    <BgSplash :src="bg" />

    <!-- Header block -->
    <div
      class="
        pointer-events-none z-0 grid size-full h-70 max-h-70 min-h-70
        grid-cols-2
      ">
      <div
        class="
          w-40% z-1 flex size-full grow flex-col items-start justify-center
          pt-16 pl-68 *:z-1
        ">
        <SummonerHeader
          v-if="ss"
          :summoner="ss.summoner.value" />
        <PocketHeader
          v-else-if="pocket"
          :pocket />
        <ChampionHeader
          v-else-if="champion"
          :champion />
      </div>
    </div>

    <div class="fixed top-0 left-[47px] z-10 flex h-15 w-56 items-center gap-3">
      <SummonerDropdown
        v-if="ss"
        size="c-11"
        :data="ss.summoner.value" />

      <PocketMenubar
        v-else-if="pocket" />
    </div>

    <!-- Scrollable content -->
    <div

      ref="scrollRef"
      :style="{ overflowAnchor: 'none' }"
      class="absolute inset-0 top-0 size-full max-w-screen overflow-auto pt-70">
      <!--  <ProfileSettingsSidebar /> -->
      <!-- Sticky Tabs (now ABOVE parent header) -->
      <div
        class="
          pointer-events-none sticky -top-70 z-13 flex h-15 min-h-15 w-full
          items-end gap-4 overflow-hidden pl-66
        ">
        <Separator class="absolute bottom-0 left-0 z-0 w-full bg-b3/60" />
        <NavFileTabs />
      </div>

      <!-- Context wrapper -->
      <div
        class="relative z-1 -mt-px flex min-h-screen w-screen max-w-screen flex-col bg-b1">
        <!-- page -->
        <slot />
      </div>
      <SiteFooter />
    </div>
  </div>

  <div class="fixed right-24 bottom-24 z-4 grid gap-4">
    <UpdateSummoner
      v-if="ss"
      placement="left"
      size="c-14"
      :state="ss" />
    <UpFAB />
  </div>
</template>
