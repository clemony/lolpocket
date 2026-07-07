<script lang="ts" setup>
import { pick } from "valibot"

type Ally = AllyStatDetail & { bestPair: PairedChampionStat[] }

const { item } = defineProps<{
  item: Ally
}>()

const lastComma = /,(?!.*,)/

function bestPairDescription(item: Ally) {
  const summonerName = sSession().summoner?.name ?? "you"

  const pairNames = item.bestPair?.map((v) => v.championName)

  const pairName =
    item.bestPair.length < 3
      ? pairNames.join(" & ")
      : pairNames.join(", ").replace(lastComma, " &")

  const games = item.bestPair.at(0)?.games ?? 0

  const base = `Based on available data, <b>${summonerName}</b> wins most when <b>${item.name}</b> plays <b>${pairName}</b>`

  /*  if (item.bestPair.length === 1)
    return `.`*/

  /*  if (item.bestPair.length > 1)
    return `${base} are tied for best synergy with ${summonerName}. They share the same winrate and playrate!`

  if (games > 0 && games < 5)
    return `${base}, but they've only played this pairing ${games} times. Play it more and see where it leads!`*/

  return `${base}.`
}

const chart = computed(() => ({
  winrate: `${item.bestPair?.[0]?.winrate}%`,
  games: item.bestPair?.[0]?.games,
  pickrate: `${roundDecimalToPercent(
    Number(item.bestPair?.[0]?.games),
    item.games
  )}%`,
  synergy: item.bestPair?.[0]?.synergy,
}))
</script>

<template>
  <div class="grid auto-rows-auto gap-3 px-1 pt-2.5 pb-2">
    <div class="-mb-0.5 flex items-center gap-3 px-1">
      <UAvatar
        :src="`/img/champion/${item.bestPair?.[0]?.championId}.webp`"
        size="3xl"
        icon="i-lol-champ" />
      <div class="flex flex-col justify-center gap-0.75 tabular-nums">
        <div
          class="inline-flex items-center font-display text-3xl leading-none font-bold">
          {{ item.name }}
        </div>
        <span class="font-mono text-xs leading-none tracking-wide text-n5/80"
          >{{ sSession().summoner?.name }}&thinsp;&#x30FB;&thinsp;synergy
        </span>
      </div>
    </div>
    <p
      class="px-1 pt-1.5 text-xs font-normal! text-pretty whitespace-normal text-n5"
      v-html="bestPairDescription(item)" />

    <div
      class="grid grid-cols-4 place-items-center items-center gap-x-4 gap-y-1 border-t border-p2 pt-2 pr-1">
      <div
        v-for="([k, v], i) in Object.entries(chart)"
        :key="k"
        :class="
          cn(
            'grid items-center',
            i === 3
              ? 'justify-end'
              : i === 1
                ? 'justify-start'
                : 'justify-center'
          )
        ">
        <div class="text-center text-lg font-medium tabular-nums">
          {{ v }}
        </div>
        <div class="font-mono text-2xs tracking-wide text-n5 uppercase">
          {{ k }}
        </div>
      </div>
    </div>
  </div>
</template>
