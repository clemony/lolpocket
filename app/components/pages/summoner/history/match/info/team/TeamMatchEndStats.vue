<script lang="ts" setup>
const { team, class: className } = defineProps<{
  team: MatchTeam
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex items-center border-y border-y-b4/50 gap-2 px-5 h-9 bg-linear-to-r to-transparent w-full justify-between flex overflow-hidden inset-shadow-xxs', className)">
    <h3
      class="text-5  dst text-start text-nowrap text-white/86   font-bold uppercase  ">
      {{ team.win ? 'Win' : 'Loss' }}
    </h3>
    <div
      class="font-bold brightness-70 w-24 pl-2 flex  !tracking-wide justify-start"
      :class="cn('', { 'text-inspiration': team.teamId == 100, 'text-domination': team.teamId == 200 })">
      {{ team.teamId == 100 ? 'Blue' : 'Red' }}
    </div>

    <TeamKDA :team="team" />

    <TeamObjectives
      :team="team"
      :team-object="team" />

    <p class="flex gap-2 justify-end">
      <i-ui-gold-icon class="size-4 text-[#C2A76E]  " />

      <span
        v-if="team.gold"
        class="flex font-semibold  items-center tracking-wide">
        {{ team.gold.toLocaleString() }}
      </span>
    </p>
  </div>
</template>