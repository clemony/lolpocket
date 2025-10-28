<script setup lang="ts">
definePageMeta({
  name: 'pocket-core',
  title: 'core',
  order: 0,
  search: 'hidden',
})

const route = useRoute()
<<<<<<< HEAD
const pocket = computed(() => ps().getPocket(String(route.params.pocket_key)))

const el = useTemplateRef<HTMLElement>('el')
useScrollProvider(el)
</script>

<template>
  <div
    class="relative  max-w-screen size-full">
    <div class="fixed top-0  left-[45px]  z-12 h-15  flex items-center w-56">
      <icon
        name=""
        class="stroke-2 size-6.5 -mx-1" />
      <PocketMenubar />
    </div>
    <div class="absolute top-0 left-0 w-full h-15 z-5 overflow-hidden">
      <BackgroundSplashFixed
        size="full"
        :img="pocket.icon" />
    </div>

    <BackgroundSplashFixed
      size="full"
      :img="pocket.icon" />

    <!-- Header block -->
    <div
      :class="cn('grid grid-cols-2 z-0 size-full overflow-hidden pointer-events-none h-[70vh] min-h-[70vh] max-h-[70vh]')">
      <div class="flex w-40% justify-center items-start pl-68 flex-col pt-16 z-1 grow *:z-1 size-full">
        <BlurReveal>
          <h1 class="!text-[3.4rem] dst">
            {{ pocket.name }}
          </h1>
        </BlurReveal>
      </div>
    </div>

    <!-- Scrollable content -->
    <div
      ref="el"
      :class="cn('absolute max-w-screen overflow-x-hidden inset-0 top-0 overflow-y-auto pt-[70vh]', {
      })">
      <!-- Sticky Tabs (now ABOVE parent header) -->
      <div
        class="flex w-full gap-4 pointer-events-none overflow-hidden h-15 min-h-15 sticky -top-[70vh] z-13 items-end pl-66">
        <Separator class="absolute left-0 w-full z-0 bottom-0 bg-b3/60" />
        <NavFileTabs />
      </div>

      <!-- Context wrapper -->
      <div class="relative -mt-px w-screen max-w-screen min-h-screen z-1 bg-b1">
        <CoreContent />
        <SiteFooter />
      </div>
      <slot name="fab" />
    </div>
  </div>
</template>
=======
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key))
).value
</script>

<template>
  <div class="inset-0 z-auto grid grid-cols-[1fr_2.5fr] gap-22">
    <div class="grid-cols-[2.5fr_1fr] grid pt-22 w-full gap-4">
      <div class="flex w-full flex-col gap-3">
        <div class="h-16 mb-2">
          <h1 class="leading-10 tracking-tight dst">
            {{ pocket.main?.champion }}
          </h1>
          <div class="italic text-4 font-medium">
            {{ ix().getChampionTitle(pocket.main?.champion) }}
          </div>
        </div>
        <HoverCard>
          <HoverCardTrigger>
            <Champion
              :k="pocket.main?.champion"
              type="tile"
              class="w-full max-w-80 h-auto inset-shadow-sm inset-shadow-black/20 *:scale-[130%] aspect-square" />
          </HoverCardTrigger>
          <HoverCardContent
            align="start"
            side="bottom"
            class="-translate-y-[calc(var(--reka-hover-card-trigger-height)+6px)] h-[calc(var(--reka-hover-card-trigger-height)+3px)] -translate-x-0.75 w-[calc(var(--reka-hover-card-trigger-width)+3px)] shadow-none open:animate-in open:fade-in closed:animate-out closed:fade-out drop-shadow-none border-b3">
          </HoverCardContent>
        </HoverCard>
        <ChampionAbilityTabs :k="pocket.main?.champion" />
      </div>

      <div class="w-full  *:w-full grid grid-rows-max place-items-center pt-20.5 h-fit">
        <MainRuneSelect :pocket>
          <CoreRuneTrigger
            :pocket />
        </MainRuneSelect>
        <MainSpellSelect
          class="size-14"
          :pocket />
      </div>
    </div>
    <div class="w-full flex flex-col gap-4 pt-22">
      <div class="h-16">
        <h2 class="leading-10 tracking-tight dst">
          Pocket Stats
        </h2>
        <div class="italic text-4 font-medium">
        </div>
      </div>
      <div class="grid grid-cols-3 gap-8">
        <Card>
          <CardContent class="p-6">
            <CardTitle>Games Played</CardTitle>
            <CardDescription></CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle>Player Winrate</CardTitle>
            <CardDescription></CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
>>>>>>> refs/remotes/origin/main
