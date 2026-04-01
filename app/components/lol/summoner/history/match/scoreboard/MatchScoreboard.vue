<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()

const blue = computed<{ players: Player[]; stats: MatchTeam }>(() =>
  safeObject({
    players: match.participants.filter((p) => p.teamId === 100),
    stats: (match.teams?.[0] as MatchTeam) ?? ({} as MatchTeam)
  })
)
const red = computed(() => ({
  players: match.participants.filter((p) => p.teamId === 200),
  stats: (match.teams?.[1] as MatchTeam) ?? ({} as MatchTeam)
}))
</script>

<template>
  <div class="grid w-full gap-4 pt-3">
    <!--   teammate -->

    <UCard
      v-for="(t, i) in [blue, red]"
      :key="i"
      :ui="{
        header: 'p-2!',
        root: cn(
          '-mt-1 w-full border-0 bg-p0/60 shadow-md ring ring-p0/60 ring-offset-1 ring-offset-p0 backdrop-blur-md',
          {}
        ),
        body: 'relative grid w-full max-w-full auto-cols-max auto-rows-max place-items-center items-center gap-x-3 gap-y-4 overflow-hidden px-3! py-2.25! **:select-none'
      }">
      <template #header>
        <!-- Blue Stats -->
        <TeamEndStatTotals v-if="t" :team="t.stats" />
      </template>
      <TeammateCard
        v-for="player in t.players"
        :key="player.puuid"
        :match
        :player="player" />
    </UCard>
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
