<script lang="ts" setup>
const props = defineProps<{
  match: any
  red: any
  blue: any
}>()
console.log('💠 - match:', props.match)

const match = computed (() => {
  return props.match
})

const blue = computed (() => {
  return props.blue
})

const red = computed (() => {
  return props.red
})
</script>

<template>
  <div class="w-full">
    <div class="grid gap-2 w-full">
      <template v-for="(player, i) in blue" :key="i">
        <MatchTeamMate v-if="match && blue && player" :player="player" />
      </template>
      <div class="flex w-full items-center gap-6 h-13 mt-5">
        <TeamWinLoss :match="match" :team="100" />
        <TeamKDA :team="blue" />
        <TeamObjectives :team="match.teams[0]" :team-object="red" />
        <TeamGold :team="blue" :enemy="red" />
      </div>
    </div>
    <Separator class="bg-b3/60  mb-2" />

    <div class="grid gap-2 w-full pt-2">
      <div class="flex w-full items-center gap-6 h-13 mb-3">
        <TeamWinLoss :match="match" :team="200" />
        <TeamKDA :team="red" />
        <TeamObjectives :team="match.teams[1]" :team-object="red" />
        <TeamGold :team="red" :enemy="blue" />
      </div>
      <template v-for="(player, i) in red" :key="i">
        <MatchTeamMate v-if="match && red && player" :player="player" />
      </template>
    </div>
  </div>
</template>