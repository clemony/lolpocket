<script setup lang="ts">
const route = useRoute()
const pocket = computed(() =>
  ps().getPocket(String(route.params.pocket_key)),
).value
</script>

<template>
  <div class="inset-0 z-auto grid grid-cols-[1fr_2.5fr] gap-22">
    <div class="grid w-full grid-cols-[2.5fr_1fr] gap-4 pt-22">
      <div class="flex w-full flex-col gap-3">
        <div class="mb-2 h-16">
          <h1 class="leading-10 tracking-tight dst">
            {{ pocket._champion }}
          </h1>
          <div class="text-4 font-medium italic">
            {{ ix().getChampionTitle(pocket._champion) }}
          </div>
        </div>
        <HoverCard>
          <HoverCardTrigger>
            <Champion
              :k="pocket._champion"
              type="tile"
              class="
                aspect-square h-auto w-full max-w-80 inset-shadow-sm
                inset-shadow-black/20
                *:scale-[130%]
              " />
          </HoverCardTrigger>
          <HoverCardContent
            align="start"
            side="bottom"
            class="
              open:animate-in open:fade-in
              closed:fade-out
              h-[calc(var(--reka-hover-card-trigger-height)+3px)]
              w-[calc(var(--reka-hover-card-trigger-width)+3px)]
              -translate-x-0.75
              -translate-y-[calc(var(--reka-hover-card-trigger-height)+6px)]
              border-b3 shadow-none drop-shadow-none
              closed:animate-out
            ">
          </HoverCardContent>
        </HoverCard>
        <ChampionAbilityTabs :k="pocket._champion" />
      </div>

      <div
        class="
          grid-rows-max grid h-fit w-full place-items-center pt-20.5
          *:w-full
        ">
        <MainRuneSelect :pocket>
          <CoreRuneTrigger :pocket />
        </MainRuneSelect>
        <MainSpellSelect
          class="size-14"
          :pocket />
      </div>
    </div>
    <div class="flex w-full flex-col gap-4 pt-22">
      <div class="h-16">
        <h2 class="leading-10 tracking-tight dst">
          Pocket Stats
        </h2>
        <div class="text-4 font-medium italic"></div>
      </div>
      <div class="grid grid-cols-3 gap-8">
        <!--        <Card>
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
        </Card> -->
      </div>
    </div>
  </div>
</template>
