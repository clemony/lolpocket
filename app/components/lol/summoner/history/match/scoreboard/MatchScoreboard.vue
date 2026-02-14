<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()

const teams = computed(() => {
  return {
    blue: match.participants.filter((p) => p.teamId === 100),
    red: match.participants.filter((p) => p.teamId === 200),
  }
})
const teamBlue = computed(() => match.teams?.[0])
const teamRed = computed(() => match.teams?.[1])
</script>

<template>
  <div class="grid w-full gap-3 px-3 pt-4">
    <!-- Blue Stats -->
    <div class="grid w-full auto-rows-max place-items-center gap-y-2">
      <TeamEndStatTotals v-if="teamBlue" :team="teamBlue" />
      <!--   teammate -->

      <TeammateCard
        v-for="(player, i) in teams.blue"
        :key="i"
        :match
        :player="player" />
    </div>
    <!-- red Stats -->

    <div class="grid w-full auto-rows-max place-items-center gap-y-1.75">
      <TeamEndStatTotals v-if="teamRed" :team="teamRed" />
      <!--   teammate -->

      <TeammateCard
        v-for="(player, i) in teams.red"
        :key="i"
        :match
        :player="player" />
    </div>
  </div>
  <!--
   <div class="flex w-full flex-col gap-2 overflow-visible pb-1">

    <TeamMatchEndStats
      :team="match.teams[0]"
      class="mt-3 from-insp/60 shadow-warm-soft" />

    <div class="size-full">
      <MatchTeammate
        v-for="(player, i) in teams.blue"
        :key="i"
        :match
        :player="player" />
    </div>

    <TeamMatchEndStats
      :team="match.teams[1]"
      class="from-dom/60 shadow-warm-soft" />

    <div class="size-full">
      <MatchTeammate
        v-for="(player, i) in teams.red"
        :key="i"
        :player="player"
        :match />
    </div>
  </div> -->
</template>
