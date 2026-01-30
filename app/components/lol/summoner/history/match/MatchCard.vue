<script setup lang="ts">
const { match: m } = defineProps<{
  match: MatchData
}>()

const { summoner } = storeToRefs(s_session())
const player = computed<Player>(() => {
  return m?.participants.find(p => p.puuid === summoner.value?.puuid)
})

const isOpen = ref(false)
</script>

<template>
  <div class="field-box match-card mb-8 w-full rounded-xl">
    <UCollapsible
      v-if="player"
      v-model:open="isOpen"
      :class="
        cn(
          'collapse-class group/collapse relative',
          player?.win === 'remake' ? 'from-b3 before:border-b3'
          : player?.win === true
            ? 'from-inspiration/80 before:border-inspiration'
            : 'from-domination/80 before:border-domination',
        )
      "
    >
      <UButton color="transparent" variant="solid" class="pointer-events-auto relative z-2 flex h-36 w-full cursor-pointer items-center justify-between gap-6 overflow-hidden bg-clip-padding pr-4 pl-5 text-sm text-bc open:rounded-b-none">
        <MatchInfo :match :player />
        <PlayerMatchCardInfo :match :player />

        <TeamsCardOverview :match />
        <div class="grid h-full w-8 place-items-center">
          <CaretFlip />
        </div>
      </UButton>

      <LazyMatchContent :match :player />
    </UCollapsible>
  </div>
</template>
