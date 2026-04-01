<script setup lang="ts">
const { match: m } = defineProps<{
  match: MatchData
}>()

const { summoner } = storeToRefs(sSession())
const player = computed<Player | undefined>(() => {
  return m?.participants.find((p) => p.puuid === summoner.value?.puuid)
})

const isOpen = ref(false)

/*   :ui="{
        root: cn(
          'relative size-full min-w-134 cursor-pointer rounded-xl border-p3/70 bg-linear-to-r to-transparent to-23% bg-cover bg-clip-padding text-sm **:select-none',
          'before:pointer-events-none before:absolute before:left-0 before:z-3 before:h-full before:w-1/2 before:rounded-xl before:border-x before:border-t-0 before:border-b-2 before:mask-r-from-0 before:opacity-40 before:shadow-sm before:shadow-black',
          player?.win === 'remake'
            ? 'from-p3 before:border-p3'
            : player?.win === true
              ? 'from-insp/80 after:to-insp/80 before:border-insp-offset'
              : 'from-dom/80  after:to-dom/80 before:border-dom',
        ),
      }" */
</script>

<template>
  <UCard
    variant="muted"
    :ui="{
      body: 'flex w-full grow p-0! ring-pc/8'
    }"
    as-child>
    <UCollapsible v-if="player" v-model:open="isOpen">
      <UButton
        color="transparent"
        size="custom"
        :ui="{
          base: 'pointer-events-auto relative z-2 h-36 w-full cursor-pointer overflow-hidden pr-4 pl-5 shadow-none ring-0! fx-0 open:rounded-b-none hover:ring-0 data-[state=open]:border-b-0!'
        }">
        <div
          class="flex w-full items-center justify-between gap-6 text-sm text-pc">
          <MatchInfo :match :player />
          <PlayerMatchCardInfo :match :player />

          <TeamsCardOverview :match />
          <div class="grid h-full w-8 place-items-center">
            <CaretFlip />
          </div>
        </div>
      </UButton>

      <template #content>
        <LazyMatchContent :match :player hydrate-on-visible />
      </template>
    </UCollapsible>
  </UCard>
</template>
