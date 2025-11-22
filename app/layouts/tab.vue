<script lang="ts" setup>
const { pocket, summonerState: ss } = defineProps<{
  summonerState?: SummonerInject
  pocket?: Pocket

}>()
const el = useTemplateRef<HTMLElement>('el')
useScrollProvider(el)

const bg = computed (() => ss ? ss.splash.value : pocket ? pocket.icon : getRandomBg())
</script>

<template>
  <div
    id="app"
    class="relative h-screen min-h-screen w-screen max-w-screen overflow-y-auto">
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <AppSidebarTrigger />

    <!-- bg -->
    <div class="absolute top-0 left-0 z-5 h-15 w-full overflow-hidden">
      <BgSplash
        size="full"
        :img="bg" />
    </div>

    <BgSplash
      size="full"
      :img="bg" />

    <!-- Header block -->
    <div
      class="
        pointer-events-none z-0 grid size-full h-70 max-h-70 min-h-70
        grid-cols-2 overflow-hidden
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
      </div>
    </div>

    <div class="fixed top-0 left-[45px] z-12 flex h-15 w-56 items-center">
      <SummonerDropdown
        v-if="ss"
        :data="ss.summoner.value" />
      <PocketMenubar
        v-else-if="pocket" />
    </div>

    <!-- Scrollable content -->
    <div
      ref="el"
      class="absolute inset-0 top-0 h-screen max-w-screen overflow-x-hidden overflow-y-auto pt-70">
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
      <div class="relative z-1 -mt-px flex min-h-screen w-screen max-w-screen flex-col bg-b1">
        <!-- page -->
        <slot />
      </div>
      <SiteFooter />
    </div>
  </div>

  <div class="fixed right-24 bottom-24 z-4 grid gap-4">
    <SummonerFAB
      v-if="ss"
      :state="ss" />
    <UpFAB />
  </div>
</template>
