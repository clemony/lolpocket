<script setup lang="ts">
definePageMeta({
  name: 'pocket-core',
  title: 'core',
  order: 0,
  search: 'hidden',
})

const route = useRoute()
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