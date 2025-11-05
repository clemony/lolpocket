<script lang="ts" setup>
import { matchDataStats } from '#shared/appdata/content/match-data-stats'

const { match, player } = defineProps<{
  match: any
  player: Player
}>()

const gameOutcome = computed(() => {
  return {
    player: player.win ? 'Ally' : 'Enemy',
    win: match.teams[0].win === true ? 'Blue Team Win' : 'Red Team Win'
  }
})
const gameEnd = computed(() => {
  return match.teams[0].gameEndedInSurrender === true ? 'Enemy Surrender' : null
})

const players = computed (() => match.participants as Player[])
</script>

<template>
  <div
    class="grid grid-cols-[2.3fr_repeat(10,1fr)] grid-flow-row w-full gap-1 px-2 py-1 h-18 group/head">
    <div class="size-full items-center pl-2">
      <div class="text-1 uppercase font-semibold text-bc/60">
        {{ gameOutcome.player }}
      </div>
      <p
        :class="
          cn('font-medium dst', {
            'text-inspiration': match.teams[0].win !== true,
            'text-domination': match.teams[0].win !== true,
          })
        ">
        {{ gameOutcome.win }}
      </p>
      {{ gameEnd ?? "" }}
    </div>

    <div
      v-for="p in match.participants"
      :key="p.pId"
      :class="
        cn(' place-items-center grid size-full rounded-xl z-0', {
          'bg-inspiration/30': p.teamId === 100,
          'bg-domination/30': p.teamId === 200,
        })
      ">
      <div
        class="shrink-0 overflow-hidden rounded-lg size-13 aspect-square grid place-items-center">
        <ChampionIcon
          :id="p.championId"
          :alt="p.championName"
          class="rounded-lg !size-full" />
      </div>
    </div>
  </div>

  <div class="h-171 w-full relative overflow-auto">
    <div
      class="auto-rows-max mt-2 pb-3 **:text-1 grid grid-cols-[2fr_repeat(10,1fr)] grid-flow-row  z-auto grid pl-2 pr-4 h-max">
      <template
        v-for="group in matchDataStats"
        :key="group">
        <div
          class="capitalize mt-2 mb-3 top-0 bg-b2 font-semibold items-center  text-nowrap py-1 px-2 -mr-4 -ml-2 !sticky left-0 grid col-span-full italic">
          {{ group.name }}
        </div>

        <template
          v-for="stat in group.stats"
          :key="stat.name">
          <div
            class="capitalize pl-2 col-start-1 whitespace-nowrap truncate font-medium tracking-tight">
            {{ stat.name }}
          </div>

          <div
            v-for="p in players"
            :key="p.puuid"
            :class="
              cn(
                'text-end !text-1 *:!text-1 py-1 tracking-tight font-medium',
                {
                  'text-bc/15 **:text-bc/15': p[stat.id] === 0,
                },
              )
            ">
            {{
              computed(() => {
                const a = p[stat.id] ?? p.challenges[stat.id]

                const b = a && a.toString().length > 6 ? a : 0

                let c = b ? b.toFixed(2) : a
                c
                  = (
                    stat.id === "effectiveHealAndShielding"
                    || stat.id === "bountyGold"
                    || stat.id === "goldPerMinute"
                  )
                    ? Math.round(c)
                    : c

                // units

                c
                  = ["damageTakenOnTeamPercentage", "killParticipation"].includes(stat.id) && c
                    ? `${Math.round(c * 100)}%`
                    : c
                c = stat.id === "timeCCingOthers" ? `${c}s` : c

                c = c ? c.toLocaleString() : c
                return c
              })
            }}
          </div>
        </template>
      </template>
    </div>
  </div>
</template>