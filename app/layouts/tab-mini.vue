<script lang="ts" setup>
const { champion, pocket, summonerState: ss } = defineProps<{
  summonerState?: SummonerApi
  pocket?: Pocket
  champion?: Champion
}>()
const el = useTemplateRef<HTMLElement>('el')
useScrollProvider(el)

const bg = computed (() => ss ? ss.splash.value : pocket ? pocket.icon : champion ? getSplash(champion.key, 'uncentered') : getRandomBg())
</script>

<template>
  <div
    id="app"
    class="relative h-screen min-h-screen w-screen max-w-screen overflow-y-auto">
    <!-- navbar -->
    <Navbar />
    <!-- sidebar -->
    <AppSidebar />

    <!-- bg -->
    <div class="bg-b2/40 absolute top-0 left-0 z-5 h-31 w-full overflow-hidden" />

    <!-- Scrollable content -->
    <div
      ref="el"
      class="absolute inset-0 top-0 h-screen max-w-screen overflow-x-hidden overflow-y-auto pt-16">
      <button class="absolute top-62 right-0 grid size-20 place-items-center">
        <Icons
          name="gear-solid"
          class="size-6.5 translate-y-0 text-white/80" />
      </button>
      <!-- Sticky Tabs (now ABOVE parent header) -->
      <div
        class="
          pointer-events-none sticky z-13 flex h-15 min-h-15 w-full items-end
          gap-4 overflow-hidden pl-66
        ">
        <Separator class="bg-b3/60 absolute bottom-0 left-0 z-0 w-full" />
        <NavFileTabs />
      </div>

      <!-- Context wrapper -->
      <div class="bg-b1 relative z-1 -mt-px flex min-h-screen w-screen max-w-screen flex-col">
        <!-- page -->
        <slot />
      </div>
      <SiteFooter />
    </div>
  </div>

  <div class="fixed right-24 bottom-24 z-4 grid gap-4">
    <UpFAB />
  </div>
</template>
