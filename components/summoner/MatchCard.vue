<script setup lang="ts">
  import { summoner } from 'shared/data/summonerData';
  const as = useAccountStore();
  const ds = useDataStore();
  const match = {
    type: ['Ranked', 'Solo/Duo'],
    playerOutcome: 'win',
    KDA: '1/3/17',
    gameTime: '24:06',
    summoners: [
      { blueTeam: [] },
      {
        redTeam: [],
      },
    ],
  };
</script>
<template>
  <Card class="max-w-[600px] bg-gradient-to-r from-transparent from-80% px-5 py-4">
    <Collapsible class="group">
      <div class="flex gap-8">
        <div class="flex h-full flex-col justify-start gap-1.5">
          <Badge
            :class="{
              'bg-inspiration': match.playerOutcome == 'win',
              'bg-domination': match.playerOutcome == 'loss',
            }"
            class="!text-2 mb-2 items-center gap-2 pl-2 !font-medium !tracking-wide text-white capitalize">
            <icon
              name="uis:graph-bar"
              class="size-3.5" />

            {{ match.playerOutcome }}
          </Badge>
          <div>
            <p>{{ match.type[0] }}</p>
            <p v-if="match.type[1]">{{ match.type[1] }}</p>
          </div>

          <p class="">
            {{ match.gameTime }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <div class="flex gap-6">
            <div class="size-17 overflow-hidden rounded-lg">
              <img
                :src="`/img/champions/Sona.webp`"
                class="size-17 scale-115" />
            </div>

            <div class="grid h-full">
              <p class="text-4 flex gap-0.75 font-bold">
                <span>1</span>
                /
                <span class="text-red-700">3</span>
                /
                <span>15</span>
              </p>
              <p class="text-3 text-bc/80 pb-1 font-medium">
                {{ summoner.recentMatches[0].kdaRatio.toFixed(2) }}
                KDA
              </p>
            </div>
          </div>
          <div class="flex gap-1.5 *:rounded-md">
            <img
              src="https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3870.png"
              class="size-11" />

            <img
              src="https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3158.png"
              class="size-11" />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/6620.png"
              class="size-11" />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/6617.png"
              class="size-11" />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/3070.png"
              class="size-11" />
            <img
              src="https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/2055.png"
              class="size-11" />
          </div>
        </div>

        <CollapsibleTrigger
          as-child
          class="group bg-base-200/30 grid h-full w-7 place-items-center">
          <ExpandIndicator class="[&_svg]:!size-4 [&_svg]:!shrink-0" />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent as-child>
        <CardContent></CardContent>
      </CollapsibleContent>
    </Collapsible>
  </Card>
</template>
<style scoped></style>
