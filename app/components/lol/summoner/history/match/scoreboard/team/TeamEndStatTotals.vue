<script lang="ts" setup>
import KDA from "~/components/lol/summoner/history/ui/KDA.vue"

const { class: className, team } = defineProps<{
  team: MatchTeam
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    :class="
      cn(
        'inset-shadow-xxs mb-1.25 w-full overflow-hidden rounded-xl border border-y-neutral/16! border-r-p3! border-l-neutral/16! bg-linear-to-r to-transparent px-3 shadow-warm-soft',
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
      <div :class="cn('flex items-center gap-4')">
        <h3 class="dst text-xl leading-none font-bold text-white/86">
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

      <div class="flex w-full items-center justify-between px-2">
        <TeamObjectives :team="team" />
      </div>

      <!-- GOLD -->
      <span
        v-if="team.gold"
        :class="
          cn(
            'inline-flex items-center gap-1 align-baseline text-sm leading-none font-semibold'
          )
        ">
        <Icon
          name="lol:gold"
          :class="
            cn('inline size-4 ds-2xs', {
              'text-insp! brightness-80 saturate-125': team.teamId === 100,
              'text-dom! brightness-90': team.teamId === 200,
            })
          " />
        {{ roundDecimal(team.gold / 1000) }}K
      </span>

      <!-- KDA -->
      <KDA
        class="align-baseline text-md leading-none opacity-90"
        :stats="team" />
    </div>
  </div>
</template>
