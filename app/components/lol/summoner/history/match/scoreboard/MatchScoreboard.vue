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
      <div class="flex w-full items-center justify-between px-2">
        <TeamObjectives :team="match.teams[0]" />

        <div class="flex h-full w-fit items-center justify-end gap-1">
          <Icon
            name="x"
            class="mr-0.5 size-4 translate-y-px opacity-50 **:stroke-[2.6]" />
          <ChampionBan
            v-for="champion, i in match.teams[0].bans"
            :id="champion"
            :key="champion"
            :style="{ zIndex: i }" />
        </div>
      </div>
      <!--   teammate -->

      <TeammateCard
        v-for="(player, i) in teams.blue"
        :key="i"
        :match
        :player="player" />
    </div>
    <!-- red Stats -->

    <div class="grid w-full auto-rows-max place-items-center gap-y-3">
      <TeamEndStatTotals :team="match.teams[1]" />
      <div class="flex w-full items-center justify-between px-2">
        <TeamObjectives :team="match.teams[1]" />

        <div class="flex h-full w-fit items-center justify-end gap-1">
          <Icon
            name="ban"
            class="mr-1 size-5 translate-y-px opacity-50" />
          <ChampionBan
            v-for="champion, i in match.teams[1].bans"
            :id="champion"
            :key="champion"
            :style="{ zIndex: i }" />
        </div>
      </div>
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
