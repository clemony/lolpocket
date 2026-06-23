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

  const base = `Based on available data, ${item.name}'s <b>${pairName}</b> `

  if (item.bestPair.length === 1)
    return `${base} synergizes best with ${summonerName}.`

  if (item.bestPair.length > 1)
    return `${base} are tied for best synergy with ${summonerName}. They share the same winrate and playrate!`

  if (games > 0 && games < 5)
    return `${base}, but they've only played this pairing ${games} times. Play it more and see where it leads!`

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
  <div class="grid auto-rows-auto gap-3 px-1 pt-2 pb-3">
    <div
      class="-mb-1 grid grid-cols-4 place-items-center items-center gap-x-4 gap-y-1 border-b border-b-n3 py-1 pr-1">
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
        <div class="text-xl font-bold tabular-nums">
          {{ v }}
        </div>
        <div class="text-2xs capitalize">
          {{ k }}
        </div>
      </div>
    </div>
    <p
      class="border-b border-b-n3 pt-1 pb-2 text-2xs font-normal! text-pretty whitespace-normal text-p5">
      <Icon
        name="i-info"
        class="-mt-0.25 mr-1 inline size-4 align-middle text-p5" />
      <span v-html="bestPairDescription(item)" />
    </p>
    <div class="-mb-0.5 flex items-center justify-between px-1">
      <LazyUAvatarGroup :ui="{ base: 'ring-n1', root: 'gap-x-2' }">
        <UAvatar
          v-for="(c, i) in item.bestPair"
          :key="i"
          :src="`/img/champion/${c.championId}.webp`"
          size="2xs"
          icon="i-lol-champ" />
      </LazyUAvatarGroup>
      <div class="inline-flex items-center gap-1 font-bold">
        {{ item.name }}
        <Icon name="i-x" class="mt-0.5 inline size-3.75 text-nc" />
        {{ sSession().summoner?.name }}
      </div>
    </div>
  </div>
</template>
