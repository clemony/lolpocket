<script lang="ts" setup>
import type { MatchStatValue } from "#shared/types"
const {
  color,
  class: className,
  match,
  stat,
} = defineProps<{
  class?: HTMLAttributes["class"]
  match: MatchData
  stat: [string, MatchStatValue]
  color?: string
}>()

const statKey = computed(() => stat[0] as keyof PlayerStats)
const statNumber = (value: PlayerStats[keyof PlayerStats] | undefined) => {
  if (typeof value === "number") return value
  return value ? 1 : 0
}
const highest = computed(() => {
  const key = statKey.value
  return match.participants
    .map((p) => statNumber(p.stats?.[key]))
    .sort((a, b) => b - a)[0]
})
</script>

<template>
  <div
    class="match-row border-b group-not-last/row:border-p3/50! group-last/row:border-transparent"
    :style="{ '--stat-color': color }">
    <div
      class="match-cell inline-flex! justify-start bg-transparent! px-2 text-left opacity-80 hover:underline hover:opacity-100"
      :data-type="stat[1].name"
      data-placement="left"
      data-theme="mini-tip neutral line">
      <div
        class="relative w-full justify-start truncate text-left"
        :class="cn('pl-5', { 'pl-10': stat[1].group === 'kills' })">
        <slot />
        {{ stat[1].name }}
      </div>
    </div>

    <div
      v-for="(player, i) in match.participants"
      :key="i"
      :data-id="player.championId"
      data-type="champion"
      data-placement="bottom-start"
      data-theme="mini-tip neutral no-arrow"
      :data-tag="stat[1].name"
      :class="
        cn('match-cell group/stat', {
          'match-null': statNumber(player.stats?.[statKey]) === 0,
        })
      ">
      <div
        v-if="statNumber(player.stats?.[statKey]) === highest && highest > 0"
        :style="{
          backgroundColor:
            statNumber(player.stats?.[statKey]) === highest && highest > 0
              ? `color-mix(in lch, ${color} 30%, transparent 70%)`
              : 'transparent',
        }"
        :class="
          cn({
            'absolute badge origin-center place-self-center border-0! text-pc/0! drop-shadow-none saturate-120 transition-all duration-300 group-hover/stat:scale-500':
              statNumber(player.stats?.[statKey]) === highest && highest > 0,
          })
        ">
        {{ statNumber(player.stats?.[statKey])?.toLocaleString()
        }}{{ stat[1]?.unit }}
      </div>

      <span class="absolute place-self-center">
        {{ statNumber(player.stats?.[statKey])?.toLocaleString()
        }}{{ stat[1]?.unit }}
      </span>
    </div>
  </div>
</template>
