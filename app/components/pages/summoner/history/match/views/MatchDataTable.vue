<script lang="ts" setup>
import { matchDataStats } from '#shared/appdata/content/match-data-stats'

const { match } = defineProps<{
  match: any
}>()

const gameOutcome = computed(() => {
  return match.teams[0].win === true ? 'Blue Team Win' : 'Red Team Win'
})
const gameEnd = computed(() => {
  return match.teams[0].gameEndedInSurrender === true ? 'Enemy Surrender' : null
})

const statIndex = [0, 1, 2, 3, 4, 5, 6, 7]
</script>

<template>
  <div class="size-full">
    <div
      class="grid grid-cols-[2.3fr_repeat(10,1fr)] grid-flow-row w-full gap-1 px-2 py-1 h-18 group/head">
      <div class="size-full items-center">
        <p
          :class="
            cn('font-medium dst', {
              'text-inspiration': match.teams[0].win !== true,
              'text-domination': match.teams[0].win !== true,
            })
          ">
          {{ gameOutcome }}
        </p>
        {{ gameEnd ?? "" }}
      </div>

      <div
        v-for="player in match.participants"
        :key="player.playerId"
        :class="
          cn(' place-items-center grid size-full rounded-xl z-0', {
            'bg-inspiration/30': player.teamId === 100,
            'bg-domination/30': player.teamId === 200,
          })
        ">
        <div
          class="shrink-0 overflow-hidden rounded-lg size-13 aspect-square grid place-items-center">
          <ChampionIcon
            :id="player.championId"
            :alt="player.championName"
            class="rounded-lg !size-full" />
        </div>
      </div>
    </div>

    <div
      class="overflow-auto mt-2 **:text-xxs grid grid-cols-[2fr_repeat(10,1fr)] grid-flow-row overscroll-none relative grid px-2 h-180">
      <template
        v-for="category in matchDataStats"
        :key="category">
        <div
          v-for="stat in category"
          :key="stat.id"
          class="contents">
          <div
            v-if="statIndex.includes(stat.i)"
            class="capitalize top-0 bg-b2 font-semibold items-center rounded-lg text-nowrap py-1 px-2 !sticky left-0 grid col-span-11">
            <span class="">
              {{ stat.id }}
            </span>
          </div>

          <!--       <div v-if="statIndex.includes(stat.i)" class="bg-b2">
            </div>
 -->
          <div
            v-else
            class="capitalize pl-2 col-start-1 font-medium tracking-tight">
            {{ stat.id }}
          </div>

          <div
            v-for="player in match.participants"
            :key="player.id"
            :class="
              cn(
                'text-end !text-xxs *:!text-xxs py-1 tracking-tight last:pr-2 font-medium',
                {
                  'text-bc/15 **:text-bc/15': player[stat.data] === 0,
                },
              )
            ">
            {{
              computed(() => {
                const a = player[stat.data] ?? player.challenges[stat.data]

                const b = a && a.toString().length > 6 ? a : 0

                let c = b ? b.toFixed(2) : a
                c
                  = (
                    stat.data === "effectiveHealAndShielding"
                    || stat.data === "bountyGold"
                    || stat.data === "goldPerMinute"
                  )
                    ? Math.round(c)
                    : c

                // units

                c
                  = stat.data === "damageTakenOnTeamPercentage" && c
                    ? `${Math.round(c * 100)}%`
                    : c
                c = stat.data === "timeCCingOthers" ? `${c}s` : c

                c = c ? c.toLocaleString() : c
                return c
              })
            }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
