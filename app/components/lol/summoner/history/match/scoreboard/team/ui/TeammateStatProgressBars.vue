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
        class: "-translate-y-px scale-108 opacity-100"
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
      color: "heal",
      class:
        "hover:bg-[color-mix(in_oklab,var(--ui-insp)_30%,var(--color-res)_10%)] bg-blend-hue hover:text-pc! hover:ring-offset-insp-100! hover:ring-insp-200!",
      max:
        match.participants
          .map((p) => p.stats?.effectiveHealingAndShielding ?? 0)
          .sort((a, b) => b - a)[0] ?? 0,
      tip: "Effective Healing & Shielding",
      value: player.stats?.effectiveHealingAndShielding ?? 0,
      icon: { name: "i-stat-health" }
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
          'relative flex size-full grow flex-col justify-center gap-1 rounded-lg p-1',
          stat.class,
          className
        )
      ">
      <div
        class="flex w-full shrink-0 items-center gap-1 text-xs leading-4 font-bold *:shrink-0">
        <Icon
          :name="stat.icon?.name ?? ''"
          :class="cn('inline size-3.5 opacity-70', stat.icon?.class)" />
        <span>
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
        class="h-1.25 w-full bg-p3"
        :color="stat?.color"
        :model-value="roundDecimalToPercent(stat?.value, stat?.max)" />
    </div>
  </Tooltip>
</template>
