<script lang="ts" setup>
const props = defineProps<{
  team: any
  match: any
  enemy: any
  teamId: number
  index: number
}>()

const team = computed (() => {
  return props.team
})

const match = computed (() => {
  return props.match
})
</script>

<template>
  <div class="flex items-center gap-2 w-full h-14 ">
    <TeamWinLoss :match="match" :team="props.teamId" />
    <div class="font-medium opacity-60 w-24 pl-2 flex justify-start">
      {{ props.index == 0 ? 'Blue' : 'Red' }} Team
    </div>

    <TeamKDA :team="team" />
    <Grow />
    <TeamObjectives :team="match.teams[props.index]" :team-object="team" />
    <Grow />
    <TeamGold :team="team" :enemy="props.enemy" />
  </div>
</template>