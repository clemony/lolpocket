<script lang="ts" setup>
import KDA from "~/domain/summoner/components/history/ui/KDA.vue"

const { class: className, team } = defineProps<{
  team: MatchTeam
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    :class="
      cn(
        'inset-shadow-xxs w-full overflow-hidden rounded-xl border border-y-neutral/16! border-r-p3! border-l-neutral/16! bg-linear-to-r to-transparent px-3 shadow-warm-soft',
        {
          'from-insp/60': team.teamId === 100,
          'from-dom/60': team.teamId === 200,
        },
        className
      )
    ">
    <div
      class="inline-flex h-8 w-full items-center justify-between gap-8 align-baseline">
      <!-- WIN / LOSS -->
      <div :class="cn('flex w-48 items-center gap-4')">
        <h3
          class="text-xl leading-none font-bold text-white/86 drop-shadow-2xs">
          {{ team.win ? "WIN" : "LOSS" }}
        </h3>

        <!-- TEAM COLOR -->
        <span
          :class="
            cn(
              'flex justify-start leading-4 font-bold tracking-wide! brightness-70',
              {
                'dark:text-tint-insp/50 light:text-insp': team.teamId === 100,
                'dark:text-tint-domination/50 light:text-dom':
                  team.teamId === 200,
              }
            )
          ">
          {{ team.teamId === 100 ? "Blue" : "Red" }}
        </span>
      </div>

      <!-- KDA -->
      <KDA
        class="w-28 text-center align-baseline text-md opacity-90"
        :stats="team" />
      <div class="flex grow basis-1/3 items-center justify-center px-2">
        <TeamObjectives :team="team" />
      </div>

      <!-- GOLD -->
      <span
        v-if="team.gold"
        :class="
          cn(
            'inline-flex items-center gap-1 align-baseline text-sm leading-none font-semibold tabular-nums'
          )
        ">
        <Icon
          name="i-lp-gold"
          :class="
            cn('inline size-4 tabular-nums ds-2xs', {
              'text-insp! brightness-80 saturate-125': team.teamId === 100,
              'text-dom! brightness-90': team.teamId === 200,
            })
          " />
        {{ roundDecimal(team.gold / 1000) }}K
      </span>
    </div>
  </div>
</template>
