<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchDataCurrentPlayer
}>()

const teams = computed(() => {
  return {
    blue: match.participants.filter(p => p.teamId === 100),
    red: match.participants.filter(p => p.teamId === 200),
  }
})
</script>

<template>
  <div class="flex w-full flex-col gap-2 overflow-visible pb-1">
    <!-- Blue Stats -->

    <TeamMatchEndStats
      :team="match.teams[0]"
      class="border-t-0! from-inspiration/60 shadow-warm-soft" />

    <!--   teammate -->

    <div class="size-full">
      <MatchTeammate
        v-for="(player, i) in teams.blue"
        :key="i"
        :match
        :player="player" />
    </div>

    <!-- red Stats -->

    <TeamMatchEndStats
      :team="match.teams[1]"
      class="from-domination/60 shadow-warm-soft" />

    <!--   teammate -->

    <div class="size-full">
      <MatchTeammate
        v-for="(player, i) in teams.red"
        :key="i"
        :player="player"
        :match />
    </div>
  </div>
</template>
