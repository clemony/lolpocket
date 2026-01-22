<script setup lang="ts">
const { puuid, match: m } = defineProps<{
  match: MatchData
  puuid: string
}>()

const player = computed<Player>(() => {
  return m?.participants.find(p => p.puuid === puuid)
})

const isOpen = ref(false)
</script>

<template>
  <div class="field-box match-card mb-8 w-full rounded-xl">
    <Collapsible
      v-model:open="isOpen"
      :class="cn('group/collapse collapse-class relative',
                 player?.win === 'remake' ? 'from-b3 before:border-b3'
                 : player?.win === true ? 'from-inspiration/80 before:border-inspiration ' : 'from-domination/80 before:border-domination')">
      <!--  -->
      <CollapsibleTrigger
        ref="container"
        :for="match?.matchId"
        class="trigger-style">
        <MatchInfo
          :match
          :player />
        <PlayerMatchCardInfo
          :match
          :player />

        <TeamsCardOverview :match />
        <div class="grid h-full w-8 place-items-center">
          <CaretFlip />
        </div>
      </CollapsibleTrigger>

      <LazyMatchContent
        :match
        :player />
    </Collapsible>
  </div>
</template>
