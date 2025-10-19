<script lang="ts" setup>
const { match } = defineProps<{
  match: any
}>()

const teams = computed(() => {
  return {
    blue: match.participants.filter(p => p.teamId === 100),
    red: match.participants.filter(p => p.teamId === 200),
  }
})

const playerRank = computed(() => {
  const sort = [...match.participants]
    .map(p => ({
      puuid: p.puuid,
      mvpScore: p.mvpScore,
      team: p.teamId,
      win: p.win,
    }))
    .sort((a, b) => b.mvpScore - a.mvpScore)

  return {
    ace: computed(() => sort.filter(p => p.team !== sort[0].team)[0]).value.puuid,
    list: sort,
    mvp: sort[0].puuid,
  }
})
</script>

<template>
  <div class="gap-2 flex flex-col overflow-visible pb-3">
    <!-- Blue Stats -->

    <TeamMatchEndStats
      :team="match.teams[0]"
      class="!border-t-0 from-inspiration/60 shadow-warm-soft" />

    <!--   teammate -->

    <div class="size-full">
      <template
        v-for="(player, i) in teams.blue"
        :key="i">
        <MatchTeammate
          :player="player"
          :player-rank="playerRank" />

        <Separator
          v-show="i !== 4"
          class="bg-b3/60 !my-0" />
      </template>
    </div>

    <!-- red Stats -->

    <TeamMatchEndStats
      :team="match.teams[1]"
      class="from-domination/60 shadow-warm-soft" />

    <!--   teammate -->

    <div class="size-full">
      <template
        v-for="(player, i) in teams.red"
        :key="i">
        <MatchTeammate
          :player="player"
          :player-rank="playerRank" />
        <Separator
          v-show="i !== 4"
          class="bg-b3/60 !my-0" />
      </template>
    </div>
  </div>
</template>
