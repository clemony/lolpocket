<script lang="ts" setup>
const { k, teams, v } = defineProps<{
  teams: MatchTeam[]
  k: string
  v: MatchStat
}>()

const highest = computed (() =>
  0
)

const bans = computedOnce(() => {
  return teams.flatMap(t => t.bans)
})
console.log('🥸 - bans:', bans)
</script>

<template>
  <div
    :class="cn('match-row grid w-full grid-flow-col grid-cols-[2.14fr_repeat(10,1fr)]! place-items-center border-b border-b3/50!', { 'border-b-transparent! h-12': k === 'bans' })">
    <div
      :data-type="v.name"
      data-placement="left"
      data-theme="mini-tip neutral line"
      :class="cn('match-cell col-start-1 inline-flex! justify-start bg-transparent! px-2 text-left opacity-80 hover:underline hover:opacity-100', { 'font-semibold gap-3 items-center': v.name === 'kills', '': k === 'bans' })">
      <div
        class="relative w-full justify-start truncate pl-5 text-left text-xs capitalize">
        {{ v.name }}
      </div>
    </div>

    <template v-if=" k === 'bans'">
      <ChampionBan
        v-for="champion in bans"
        :id="champion"
        :key="champion" />
    </template>
    <template v-else>
      <div
        v-for="team, i in teams"
        :key="team.teamId"
        :class="
          cn('match-cell z-0 size-full items-center last-of-type:border-0! hover:z-3 hover:bg-b3/30',
             team?.[k] === 0 ? 'match-null' : '', i === 0 && k === 'bans' ? 'col-start-2 col-span-5' : k === 'bans' ? 'col-start-7 col-span-5' : i === 0 ? 'col-start-4' : 'col-start-9', {}) ">
        <div
          v-if="k === 'teamId'"
          class="font-semibold capitalize">
          {{ matchTeams[team.teamId]?.name }} team
        </div>
        <MatchOutcome
          v-else-if="k === 'win'"
          :style="{ color: `color-mix(in lch, ${matchTeams[team.teamId].color} 97%, black 3%)` }"
          class="justify-self-start text-sm!"
          :stats="team" />

        <KDA
          v-else-if="k === 'kda'"
          data-type="Team KDA"
          data-placement="top"
          :stats="team"
          class="text-sm font-bold" />

        <span
          v-else
          :style="{
            backgroundColor: team?.[k] === highest && highest > 0 ? `color-mix(in lch, ${matchTeams[team.teamId].color} 30%, transparent 70%)` : 'transparent',
          }"
          :class="cn({ '  saturate-120 drop-shadow-none text-xs badge ': team?.[k] === highest && highest > 0 })">
          {{ team?.[k]?.toLocaleString() }}{{ v?.unit }}
        </span>
      </div>
    </template>
  </div>
</template>