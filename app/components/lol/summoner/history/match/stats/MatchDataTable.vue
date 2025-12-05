<script lang="ts" setup>
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '#components'
import { matchDataStats } from '~~/shared/data/match-data-stats'

const { match } = defineProps<{
  match: MatchDataCurrentPlayer
}>()

const gameOutcome = computed(() => {
  return {
    player: match.player?.win ? 'Ally' : 'Enemy',
    win: match?.teams[0]?.win === true ? 'Blue Team Win' : 'Red Team Win',
  }
})

const players = computed(() => match.participants as Player[])

const statGroups = computed (() => {
  return [
    {
      name: 'Stats',
      stats: Object.keys(match.player.stats)
    },
    {
      name: 'Offense',
      stats: Object.keys(match.player.offense),
    }
  ]
})
console.log('🥸 - statGroups:', statGroups)
</script>

<template>
  <div
    class="
      group/head grid-cols-[2.3fr_repeat(10,1fr) mt-2 grid h-18 w-full
      grid-flow-col gap-1 px-2 py-1">
    <div class="size-full items-center pl-2">
      <div class="text-1 font-semibold text-bc/60 uppercase">
        {{ gameOutcome.player }}
      </div>
      <div :class=" cn('font-medium dst', match.teams[0].win ? 'text-inspiration' : 'text-domination') ">
        {{ gameOutcome.win }}
      </div>
    </div>

    <div
      v-for="p in match.participants"
      :key="p.puuid"
      :class=" cn('z-0 grid size-full place-items-center rounded-xl', p.teamId === 100 ? 'bg-inspiration/30' : 'bg-domination/30') ">
      <div
        class="grid aspect-square size-13 shrink-0 place-items-center overflow-hidden rounded-lg">
        <ChampionIcon
          :id="p.championId"
          :alt="champNameById(p.championId)"
          class="size-full! rounded-lg" />
      </div>
    </div>
  </div>

  <div class="relative w-full overflow-auto">
    <div
      class="
        z-auto grid h-max grid-flow-row auto-rows-max
        grid-cols-[2fr_repeat(10,1fr)] pr-4 pb-3 pl-2 **:text-1
      ">
      <template
        v-for="group in statGroups"
        :key="group.name">
        <div
          class="
            sticky! top-0 left-0 col-span-full mt-2 -mr-4 mb-3 -ml-2 grid
            items-center bg-b2 px-2 py-1 font-semibold text-nowrap capitalize
            italic
          ">
          {{ group.name }}
        </div>
        <div
          v-for="stat in group.stats"
          :key="stat"
          class="contents">
          <div
            class="
              col-start-1 truncate pl-2 font-medium tracking-tight
              whitespace-nowrap capitalize
            ">
            {{ stat }}
          </div>

          <div
            v-for="p in players"
            :key="p.puuid"
            :class="
              cn('py-1 text-end text-1! font-medium tracking-tight *:text-1!',
                 {
                   'text-bc/15 **:text-bc/15': p[stat] === 0,
                 },
              )
            ">
            {{ }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
