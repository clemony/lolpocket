<script lang="ts" setup>
const { team, class: className } = defineProps<{
  team: MatchTeam
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('flex items-center border-y border-y-b4/50 gap-2 px-5 h-9 bg-linear-to-r to-transparent w-full justify-between flex overflow-hidden inset-shadow-xxs', className)">
    <MatchOutcome :win="team.win" />

    <div
      class="font-bold brightness-70 w-24 pl-2 flex  !tracking-wide justify-start"
      :class="cn('', { 'text-inspiration': team.teamId == 100, 'text-domination': team.teamId == 200 })">
      {{ team.teamId == 100 ? 'Blue' : 'Red' }}
    </div>

    <TeamKDA :team="team" />

    <TeamObjectives
      :team="team"
      :team-object="team" />

    <TeamGold
      :team="team"
      :enemy="team.teamId == 100 ? 1 : 0" />
  </div>
</template>