<script lang="ts" setup>
const { class: className, color, match, stat } = defineProps<{
  class?: HTMLAttributes['class']
  match: MatchData
  stat: [string, MatchStat]
  color?: string
}>()

const highest = computed (() =>
  match.participants.map(p => p.stats[stat[0]]).sort((a, b) => b - a)[0]
)
</script>

<template>
  <div
    :style="{ '--stat-color': color }"
    class="match-row border-b group-not-last/row:border-b3/50! group-last/row:border-transparent">
    <div
      :data-type="stat[1].name"
      data-placement="left"
      data-theme="mini-tip neutral line"
      class="match-cell inline-flex! justify-start bg-transparent! px-2 text-left opacity-80 hover:underline hover:opacity-100">
      <div
        class="relative w-full justify-start truncate text-left"
        :class="cn('pl-5', { 'pl-10': stat[1].group === 'kills' })">
        <slot />
        {{ stat[1].name }}
      </div>
    </div>

    <div
      v-for="player, i in match.participants"
      :key="i"
      :data-id="player.championId"
      data-type="champion"
      data-placement="bottom-start"
      data-theme="mini-tip neutral no-arrow"
      :data-tag="stat[1].name"
      :class="
        cn('match-cell group/stat',
           { 'match-null': player.stats?.[stat[0]] === 0 }) ">
      <div
        v-if="player.stats?.[stat[0]] === highest && highest > 0"
        :style="{
          backgroundColor: player.stats?.[stat[0]] === highest && highest > 0 ? `color-mix(in lch, ${color} 30%, transparent 70%)` : 'transparent',
        }"
        :class="cn({ 'group-hover/stat:scale-500 origin-center transition-all duration-300  absolute border-0! place-self-center  saturate-120 drop-shadow-none text-bc/0!  badge ': player.stats?.[stat[0]] === highest && highest > 0 })">
        {{ player.stats?.[stat[0]]?.toLocaleString() }}{{ stat[1]?.unit }}
      </div>

      <span
        class="absolute place-self-center">
        {{ player.stats?.[stat[0]]?.toLocaleString() }}{{ stat[1]?.unit }}
      </span>
    </div>
  </div>
</template>
