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
  <UCard
    color="p1"
    :ui="{
      body: 'p-0! grow w-full ',
    }"
    class="">
    <UCollapsible
      v-if="player"
      v-model:open="isOpen"
      :ui="{
        root: ' group/collapse relative p-0!',
      }"
      :class="
        cn(
          'relative size-full min-w-134 cursor-pointer rounded-xl border-p3/70 bg-linear-to-r to-transparent to-40% bg-cover bg-clip-padding text-sm **:select-none',
          'before:pointer-events-none before:absolute before:left-0 before:z-3 before:h-full before:w-1/2 before:rounded-xl before:border before:mask-r-from-0 before:opacity-40 before:shadow-sm before:shadow-black before:brightness-94',
          player?.win === 'remake' ? 'from-p3 before:border-p3'
          : player?.win === true
            ? 'from-inspiration/80 before:border-inspiration'
            : 'from-domination/80 before:border-domination',
        )
      ">
      <UButton
        color="transparent"
        variant="solid"
        class="pointer-events-auto relative z-2 flex h-36 w-full cursor-pointer items-center justify-between gap-6 overflow-hidden pr-4 pl-5 text-sm text-pc open:rounded-b-none">
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
      </UButton>

      <LazyMatchContent
        :match
        :player />
    </UCollapsible>
  </UCard>
</template>
