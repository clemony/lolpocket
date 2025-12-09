<script lang="ts" setup>
import { matchStatIndex } from '~~/shared'
import { formatMatchStat } from '~/utils/formatting/formatMatchStat'

const { class: className, group, ix, match, stat, subStat } = defineProps<{
  class?: HTMLAttributes['class']
  match: MatchDataCurrentPlayer
  stat?: number
  group?: string
  subStat?: boolean
  ix?: string | number
}>()
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
    class="match-row">
    <div
      :class="cn('match-cell px-2 opacity-80', { 'font-semibold gap-3 inline-flex items-center justify-between': matchStatIndex[ix] === 'kills' })">
      {{ matchStatIndex[ix] }}
      <slot></slot>
    </div>

    <div
      v-for="player, i in match.participants"
      :key="i"
      :class="
        cn('match-cell text-center last-of-type:border-0!',
           player[group][ix] === 0 ? 'match-null' : '',
        )
      ">
      {{ player[group][ix].value || formatMatchStat(player[group][ix], matchStatIndex[ix]) }}
    </div>
  </div>
</template>