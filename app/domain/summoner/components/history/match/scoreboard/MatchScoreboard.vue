<script lang="ts" setup>
const { match } = defineProps<{
  match: MatchData
}>()

const blue = computed<{ players: Player[]; stats: MatchTeam }>(() =>
  safeObject({
    players: match.participants.filter((p) => p.teamId === 100),
    stats: (match.teams?.[0] as MatchTeam) ?? ({} as MatchTeam),
  })
)
const red = computed(() => ({
  players: match.participants.filter((p) => p.teamId === 200),
  stats: (match.teams?.[1] as MatchTeam) ?? ({} as MatchTeam),
}))
</script>

<template>
  <div class="grid w-full gap-4 pt-3">
    <!--   teammate -->

    <div v-for="(t, i) in [blue, red]" :key="i" class="-mt-1 w-full">
      <div class="w-full p-2">
        <TeamEndStatTotals v-if="t" :team="t.stats" />
      </div>
      <div
        class="relative grid w-full max-w-full auto-cols-max auto-rows-max place-items-center items-center gap-x-2 gap-y-4 overflow-hidden px-3! py-2.25! **:select-none">
        <LazyTeammateCard
          v-for="player in t.players"
          :key="player.puuid"
          hydrate-on-visible
          :match
          :player="player" />
      </div>
    </div>
  </div>
</template>
