<script lang="ts" setup>
const { class: className, match, stat } = defineProps<{
  class?: HTMLAttributes['class']
  match: MatchData
  stat: [string, MatchStat]
}>()

function formatMatchStat(stat: number, name: string) {
  const a = stat

  if (a === 0)
    return '⎯'

  // units
  const p = [
    'Team damage percentage',
    'Damage taken of team total',

  ]

  if (p.includes(name))
    return `${a}%`
  else if (name === 'kill participation')
    return `${Math.round(a * 100)}%`
  else if (a)
    return a.toLocaleString()
}
</script>

<template>
  <div
    v-if="stat[1].group === 'kills'"
    class="match-row">
    <div
      class="match-cell col-start-1 pl-5! opacity-70">
      {{ stat[1].name }}
    </div>

    <!--     <div
      v-for="player, i in match.participants"
      :key="i"
      :class="
        cn('match-cell text-center last-of-type:border-0!',
           player.stats.multiKills?.[ix] === 0 ? 'match-null' : '',
        )
      ">
      {{ formatMatchStat(player.stats.multiKills?.[ix], matchStatIndex[ix]) }}
    </div> -->
  </div>

  <div
    v-else
    class="match-row border-b3/50! group-not-last/row:border-b">
    <div
      :data-tip="stat[1].name"
      data-placement="left"
      :class="cn('match-cell px-2 opacity-80 hover:underline hover:opacity-100', { 'font-semibold gap-3 inline-flex! items-center justify-between': stat[1].name === 'kills' })">
      {{ stat[1].name }}
      <slot></slot>
    </div>

    <div
      v-for="player, i in match.participants"
      :key="i"
      :data-id="player.championId"
      data-tip="champion"
      :data-tag="stat[1].name"
      :class="
        cn('match-cell rounded-md text-center last-of-type:border-0! hover:bg-b3/30 hover:ring hover:ring-bc/70',
           player[stat[0]] === 0 ? 'match-null' : '',
        )
      ">
      {{ player[stat[0]] }}
    </div>
  </div>
</template>