<script lang="ts" setup>
import { matchStatIndex } from '~~/shared'

const { class: className, group, ix, match, stat, subStat } = defineProps<{
  class?: HTMLAttributes['class']
  match: MatchDataCurrentPlayer
  stat?: number
  group?: string
  subStat?: boolean
  ix?: string | number
}>()

function formatMatchStat(stat: number, name: string) {
  const a = stat

  if (a === 0)
    return '⎯'

  const fix = ['kda']
  // units
  const p = [
    'Team damage percentage',
    'Damage taken of team total',
    'kill participation',
  ]

  if (fix.includes(name))
    return (Math.round(a * 100) / 100).toLocaleString()
  else if (p.includes(name))
    return `${Math.round(a * 100)}%`
  else if (name === 'effective healing and shielding')
    return Math.round(a).toLocaleString()
  else if (name === 'Crowd-control duration on enemies')
    return `${a}s`
  else if (a)
    return a.toLocaleString()
}
</script>

<template>
  <div
    v-if="subStat"
    class="match-row">
    <div
      class="match-cell col-start-1 pl-5! opacity-70">
      {{ matchStatIndex[ix] }}
    </div>

    <div
      v-for="player, i in match.participants"
      :key="i"
      :class="
        cn('match-cell text-center last-of-type:border-0!',
           player.stats.kills.stats[ix] === 0 ? 'match-null' : '',
        )
      ">
      {{ formatMatchStat(player.stats.kills.stats?.[ix], matchStatIndex[ix]) }}
    </div>
  </div>

  <div
    v-else
    class="match-row border-b3/50! group-not-last/row:border-b">
    <div
      :data-tip="matchStatIndex[ix]"
      data-placement="left"
      :class="cn('match-cell px-2 opacity-80 hover:underline hover:opacity-100', { 'font-semibold gap-3 inline-flex! items-center justify-between': matchStatIndex[ix] === 'kills' })">
      {{ matchStatIndex[ix] }}
      <slot></slot>
    </div>

    <div
      v-for="player, i in match.participants"
      :key="i"
      :data-id="player.championId"
      data-tip="champion"
      :data-tag="matchStatIndex[ix]"
      :class="
        cn('match-cell rounded-md text-center last-of-type:border-0! hover:bg-b3/30 hover:ring hover:ring-bc/70',
           player[group][ix] === 0 ? 'match-null' : '',
        )
      ">
      {{ player[group][ix].value || formatMatchStat(player[group][ix], matchStatIndex[ix]) }}
    </div>
  </div>
</template>