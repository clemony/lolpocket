<script lang="ts" setup>
import type { MatchStatValue } from "#shared/types"
import MatchOutcome from "~/domain/summoner/components/history/match/ui/MatchOutcome.vue"
import KDA from "~/domain/summoner/components/history/ui/KDA.vue"
const { k, teams, v } = defineProps<{
  teams: MatchTeam[]
  k: string
  v: MatchStatValue
}>()

const highest = computed(() => 0)

const bans = computedOnce(() => {
  return teams.flatMap((t) => t.bans)
})
console.log("🥸 - bans:", bans)

const teamValue = (team: MatchTeam, key: string) =>
  (team as unknown as Record<string, number | string | undefined>)[key]
</script>

<template>
  <div
    :class="
      cn(
        'match-row grid w-full grid-flow-col grid-cols-[2.14fr_repeat(10,1fr)]! place-items-center border-b border-p3/50!',
        { 'h-12 border-b-transparent!': k === 'bans' }
      )
    ">
    <div
      :data-type="v.name"
      data-placement="left"
      data-theme="mini-tip neutral line"
      :class="
        cn(
          'match-cell col-start-1 inline-flex! justify-start bg-transparent! px-2 text-left opacity-80 hover:underline hover:opacity-100',
          {
            'items-center gap-3 font-semibold': v.name === 'kills',
            '': k === 'bans',
          }
        )
      ">
      <div
        class="relative w-full justify-start truncate pl-5 text-left text-xs capitalize">
        {{ v.name }}
      </div>
    </div>

    <template v-if="k === 'bans'">
      <ChampionBan v-for="champion in bans" :id="champion" :key="champion" />
    </template>
    <template v-else>
      <div
        v-for="(team, i) in teams"
        :key="team.teamId"
        :class="
          cn(
            'match-cell z-0 size-full items-center last-of-type:border-0! hover:z-3 hover:bg-p3/30',
            teamValue(team, k) === 0 ? 'match-null' : '',
            i === 0 && k === 'bans'
              ? 'col-span-5 col-start-2'
              : k === 'bans'
                ? 'col-span-5 col-start-7'
                : i === 0
                  ? 'col-start-4'
                  : 'col-start-9',
            {}
          )
        ">
        <div v-if="k === 'teamId'" class="font-semibold capitalize">
          {{ matchTeams[team.teamId as 100 | 200]?.name }} team
        </div>
        <MatchOutcome
          v-else-if="k === 'win'"
          class="justify-self-start text-sm!"
          :style="{
            color: `color-mix(in lch, ${matchTeams[team.teamId as 100 | 200]?.color} 97%, black 3%)`,
          }"
          :stats="team" />

        <KDA
          v-else-if="k === 'kda'"
          class="text-sm font-bold"
          data-type="Team KDA"
          data-placement="top"
          :stats="team" />

        <span
          v-else
          :style="{
            backgroundColor:
              (team as any)?.[k] === highest && highest > 0
                ? `color-mix(in lch, ${matchTeams[team.teamId as 100 | 200]?.color} 30%, transparent 70%)`
                : 'transparent',
          }"
          :class="
            cn({
              'badge text-xs drop-shadow-none saturate-120':
                teamValue(team, k) === highest && highest > 0,
            })
          ">
          {{ teamValue(team, k)?.toLocaleString() }}{{ v?.unit }}
        </span>
      </div>
    </template>
  </div>
</template>
