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
  <div class="grid w-full grid-cols-2 gap-3 px-3 pt-4">
    <!-- Blue Stats -->
    <div class="grid w-full auto-rows-max place-items-center gap-y-3">
      <TeamEndStatTotals :team="match.teams[0]" />
      <TeamObjectives :team="match.teams[0]" />

      <!--   teammate -->

      <TeammateCard
        v-for="(player, i) in teams.blue"
        :key="i"
        :match
        :player="player" />

      <div class="grid h-full w-fit -translate-y-0.25 grid-cols-5 place-items-center gap-1.5 px-1">
        <ChampionBan
          v-for="champion in match.teams[0].bans"
          :id="champion"
          :key="champion" />
      </div>
    </div>
    <!-- red Stats -->

    <div class="grid w-full auto-rows-max place-items-center gap-y-3">
      <TeamEndStatTotals :team="match.teams[1]" />
      <TeamObjectives :team="match.teams[1]" />

      <!--   teammate -->

      <TeammateCard
        v-for="(player, i) in teams.red"
        :key="i"
        :match
        :player="player" />

      <div class="grid h-full w-fit -translate-y-0.25 grid-cols-5 place-items-center gap-1.5 overflow-hidden px-1">
        <ChampionBan
          v-for="champion in match.teams[1].bans"
          :id="champion"
          :key="champion" />
      </div>
    </div>
  </div>
<!--
   <div class="flex w-full flex-col gap-2 overflow-visible pb-1">

    <TeamMatchEndStats
      :team="match.teams[0]"
      class="mt-3 from-inspiration/60 shadow-warm-soft" />

    <div class="size-full">
      <MatchTeammate
        v-for="(player, i) in teams.blue"
        :key="i"
        :match
        :player="player" />
    </div>

    <TeamMatchEndStats
      :team="match.teams[1]"
      class="from-domination/60 shadow-warm-soft" />

    <div class="size-full">
      <MatchTeammate
        v-for="(player, i) in teams.red"
        :key="i"
        :player="player"
        :match />
    </div>
  </div> -->
</template>
