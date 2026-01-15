<script setup lang="ts">
const { puuid, match: m } = defineProps<{
  match: MatchData
  puuid: string
}>()

const playerRank = computed(() => {
  const sort = [...m.participants]
    .map(p => ({
      puuid: p.puuid,
      mvpScore: p.stats.mvpScore,
      team: p.teamId,
      win: p.win,
    }))
    .sort((a, b) => b.mvpScore - a.mvpScore)

  return {
    ace: computed(() => sort.filter(p => p.team !== sort[0].team)[0]).value.puuid,
    mvp: sort[0].puuid,
    ranking: sort.map(p => p.puuid),
  }
})
const match = computed<Player>(() => {
  const player = m?.participants.find(p => p.puuid === puuid)
  return {
    ...m,
    ace: playerRank.value.ace,
    mvp: playerRank.value.mvp,
    player,
    ranking: playerRank.value.ranking,
  }
})

const isOpen = ref(false)
</script>

<template>
  <div class="field-box mb-8 w-full rounded-xl">
    <Collapsible
      v-model:open="isOpen"
      :class="cn('group/collapse collapse-class relative',
                 match.player?.win === 'remake' ? 'from-b3 before:border-b3'
                 : match.player?.win === true ? 'from-inspiration/80 before:border-inspiration ' : 'from-domination/80 before:border-domination')">
      <CollapsibleTrigger
        ref="container"
        :for="match?.matchId"
        class="trigger-style">
        <MatchInfo :match />
        <PlayerMatchCardInfo :match />

        <TeamsCardOverview :match />
        <div class="grid h-full w-8 place-items-center">
          <CaretFlip />
        </div>
      </CollapsibleTrigger>

      <LazyMatchContent :match />
    </Collapsible>
  </div>
</template>

<style scoped>
  @reference '@css/tailwind.css';
.collapse-class {
  @apply relative size-full min-w-134 cursor-pointer rounded-xl  bg-linear-to-r to-transparent bg-cover to-40% border-b3/70 bg-clip-padding text-2 **:select-none;
  &::before {
    @apply pointer-events-none absolute left-0 z-3 h-full w-1/2 rounded-xl border mask-r-from-0 opacity-40 shadow-sm shadow-black brightness-94;
  }
}
.trigger-style {
  @apply pointer-events-auto relative bg-clip-padding  z-2 flex h-36 w-full cursor-pointer items-center justify-between gap-6 overflow-hidden pr-4 pl-5 text-2 data-[state=open]:rounded-b-none;
}
</style>