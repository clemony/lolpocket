<script lang="ts" setup>
const { class: className, team } = defineProps<{
  team: MatchTeam
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn('mb-1.25 w-full overflow-hidden rounded-xl border border-bc/10 border-r-b3! bg-linear-to-r to-transparent px-3 shadow-warm-soft inset-shadow-xxs',
         {
           'from-inspiration/60 ': team.teamId === 100,
           'from-domination/60 ': team.teamId === 200,
         },
         className) ">
    <div class="inline-flex h-8 w-full items-center justify-between gap-8 align-baseline">
      <!-- WIN / LOSS -->
      <div
        :class="cn('flex items-center gap-4')">
        <h3 class="text-xl leading-none font-bold text-white/86 dst">
          {{ team.win ? "WIN" : "LOSS" }}
        </h3>

        <!-- TEAM COLOR -->
        <span
          :class=" cn('flex justify-start leading-4 font-bold tracking-wide! brightness-70', {
            'light:text-inspiration dark:text-tint-inspiration/50': team.teamId === 100,
            'light:text-domination dark:text-tint-domination/50 ': team.teamId === 200,
          }) ">
          {{ team.teamId === 100 ? "Blue" : "Red" }}
        </span>
      </div>

      <div class="flex w-full items-center justify-between px-2">
        <TeamObjectives :team="team" />
      </div>

      <!-- GOLD -->
      <span
        v-if="team.gold"
        :class=" cn('inline-flex items-center gap-1 align-baseline text-sm leading-none font-semibold') ">
        <Icon
          name="lol:gold"
          :class=" cn('inline size-4 dst', {
            'text-inspiration! brightness-80 saturate-125': team.teamId === 100,
            'text-domination! brightness-90': team.teamId === 200,
          }) " />
        {{ roundDecimal(team.gold / 1000) }}K
      </span>

      <!-- KDA -->
      <KDA
        class="align-baseline text-md leading-none opacity-90"
        :stats="team" />
    </div>
  </div>
</template>
