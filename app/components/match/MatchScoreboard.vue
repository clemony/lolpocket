<script lang="ts" setup>
const { match } = defineProps<{
  match: any
}>()

const teams = computed (() => {
  return {
    blue: match.info.participants.filter(p => p.teamId == 100),
    red: match.info.participants.filter(p => p.teamId == 200),
  }
})
</script>

<template>
  <div class="gap-2 flex flex-col overflow-x-scroll ">
    <!--   teammate -->
    <div class=" size-full ">
      <template v-for="(player, i) in teams.blue" :key="i">
        <MatchTeammate v-if="match && teams.blue && player" :player="player" />

        <Separator v-if="i != 4" class="bg-b3/60 " />
      </template>
    </div>

    <div class="bg-linear-to-r h-14 from-inspiration/40 via-transparent to-domination/40 inset-shadow-xs w-full overflow-hidden max-w-full flex">
      <!-- Team Stats -->

      <div v-for="team, i in match.teams" :key="team.teamId" :class="cn('flex items-center gap-2 h-full')">
        <div class="h-full grid items-center ">
          <MatchOutcome :win="team.win" />

          <TeamKDA :team="team" />
        </div>

        <div class="font-medium opacity-60 w-24 pl-2 flex justify-start">
          {{ team.teamId == 100 ? 'Blue' : 'Red' }}
        </div>

        <div class="h-full grid items-center ">
          <TeamGold :team="team" :enemy="match.teams[i == 100 ? 1 : 0]" />

          <TeamObjectives :team="team" :team-object="team" />
        </div>
      </div>
    </div>
    <!--   teammate -->

    <div class=" size-fit mt-1">
      <template v-for="(player, i) in teams.red" :key="i">
        <MatchTeammate v-if="match && teams.red && player" :player="player" />
      </template>
    </div>
  </div>
</template>