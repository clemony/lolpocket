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
  <div class="grid w-full grid-cols-2 gap-3 px-3">
    <!-- Blue Stats -->
    <div class="grid w-full auto-rows-max gap-y-2">
      <TeamEndStatTotals :team="match.teams[0]" />
      <TeamObjectives :team="match.teams[0]" />

      <!--   teammate -->

      <TeammateCard
        v-for="(player, i) in teams.blue"
        :key="i"
        :match
        :player="player" />
    </div>

    <!-- red Stats -->

    <div class="w-full">
      <TeamEndStatTotals :team="match.teams[1]" />
      <TeamObjectives :team="match.teams[1]" />

      <!--   teammate -->

      <TeammateCard
        v-for="(player, i) in teams.red"
        :key="i"
        :match
        :player="player" />
    </div>
  </div>
  <div class="flex w-full flex-col gap-2 overflow-visible pb-1">
    <!-- Blue Stats -->

    <TeamMatchEndStats
      :team="match.teams[0]"
      class="mt-3 from-inspiration/60 shadow-warm-soft" />

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
