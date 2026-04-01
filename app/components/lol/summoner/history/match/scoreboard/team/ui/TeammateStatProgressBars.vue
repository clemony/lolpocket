<script lang="ts" setup>
import type { BarStat } from "../team.types"

const {
  match,
  player,
  class: className
} = defineProps<{
  class?: HTMLAttributes["class"]
  player: Player
  match: MatchData
}>()

const stats = computed<Record<string, BarStat>>(() => {
  return {
    dmg: {
      color: "dom",
      class:
        "hover:bg-dom-200! hover:text-pc! hover:ring-offset-domination-200!  hover:ring-domination-300!",
      max:
        match.participants
          .map((p) => p.stats?.totalDamage ?? 0)
          .sort((a, b) => b - a)[0] ?? 0,
      tip: "Total Damage Dealt to Champions",
      value: player.stats?.totalDamage ?? 0,
      icon: {
        name: "i-lp-scoreboard-sword",
        class: " scale-116 rotate-180 opacity-100"
      }
    },
    def: {
      color: "pre",
      class:
        "hover:bg-pre-200! hover:text-pc! hover:ring-offset-pre-200!  hover:ring-pre-400!",
      max:
        match.participants
          .map((p) => p.stats?.totalDamageTaken ?? 0)
          .sort((a, b) => b - a)[0] ?? 0,
      tip: "Total Damage Taken by Champions",
      value: player.stats?.totalDamageTaken ?? 0,
      icon: { name: "i-stat-armor" }
    },
    heal: {
      color: "insp",
      class:
        "hover:bg-insp-100  hover:backdrop-saturate-90  hover:text-pc! hover:ring-offset-insp-100! hover:ring-insp-200!",
      max:
        match.participants
          .map((p) => p.stats?.effectiveHealingAndShielding ?? 0)
          .sort((a, b) => b - a)[0] ?? 0,
      tip: "Effective Healing & Shielding",
      value: player.stats?.effectiveHealingAndShielding ?? 0,
      icon: { name: "i-mage-shield-plus", class: "**:stroke-[3.4] " }
    }
  }
})
</script>

<template>
  <Tooltip
    v-for="stat in stats"
    :key="stat.color"
    :label="stat.tip"
    class="size-full">
    <div
      :class="
        cn(
          'relative flex size-full grow flex-col items-center justify-end gap-1 rounded-lg px-1 pt-1 pb-2',
          stat.class,
          className
        )
      ">
      <div
        class="inline-flex w-full shrink-0 items-center justify-end gap-0.5 pr-2 text-end align-middle">
        <Icon
          :name="stat.icon?.name ?? ''"
          :class="cn('inline size-3 leading-4 opacity-70', stat.icon?.class)" />
        <span
          class="shrink-0 text-end align-middle text-2xs! leading-4 font-bold">
          {{
            stat?.value && roundDecimal(stat?.value / 1000) > 1
              ? `${roundDecimal(stat?.value / 1000)}k`
              : stat?.value && stat?.value < 1000
                ? stat?.value
                : 0
          }}
        </span>
      </div>
      <UProgress
        class="h-1.25 w-full max-w-12 shrink-0"
        :ui="{ base: 'bg-p3', root: 'px-0!' }"
        :color="stat?.color"
        :model-value="roundDecimalToPercent(stat?.value, stat?.max)" />
    </div>
  </Tooltip>
</template>
