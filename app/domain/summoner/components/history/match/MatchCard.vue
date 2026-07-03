<script setup lang="ts">
const { match: m } = defineProps<{
  match: MatchData
}>()

const { summoner } = storeToRefs(sSession())
const player = computed<Player | undefined>(() => {
  return m?.participants.find((p) => p.puuid === summoner.value?.puuid)
})

const isOpen = ref(false)

/*   */
</script>

<template>
  <UCard
    color="primary"
    :ui="{
      body: 'flex grow rounded-6xl! p-0! ring-pc/8',
      root: 'shadow-black/4',
    }"
    as-child>
    <UCollapsible
      v-if="player"
      v-model:open="isOpen"
      :ui="{
        root: 'relative min-w-134 grow cursor-pointer',
        content: 'bg-p0',
      }">
      <UButton
        :style="{
          '--status': `var(--color-${player?.win === 'remake' ? 'p3' : player?.win === true ? 'insp' : 'dom'})`,
        }"
        block
        color="transparent"
        :ui="{
          base: cn(
            'relative bg-linear-to-l from-(--status)/80 to-transparent to-63% bg-cover bg-clip-padding **:select-none',
            //
            'pointer-events-auto relative z-2 h-40! min-h-36! grow pr-4 pl-5 shadow-none ring-0! fx-0 open:rounded-b-none hover:ring-0 data-[state=open]:border-b-0!',
            //
            //'after:to-(--status)/80',
            //
            'before:y-0 before:pointer-events-none before:absolute before:right-0 before:z-3 before:h-full before:w-3/4 before:rounded-5xl before:border-x before:border-t-0 before:border-b-2 before:border-pc/30 before:mask-l-from-0 before:opacity-40 before:mix-blend-darken before:shadow-sm before:shadow-black'
          ),
        }">
        <div
          class="grid grow grid-cols-2 items-center justify-between gap-4 text-sm text-pc">
          <div class="grid w-full grid-cols-[1fr_2fr] place-items-center pr-2">
            <PlayerLoadout :match :player />
          </div>

          <div class="grid w-full grid-cols-[2fr_1fr] items-center gap-4 pl-6">
            <TeamsCardOverview :match />
            <MatchInfo :match :player />
          </div>
        </div>
        <div class="absolute bottom-1 mx-auto rounded-full px-2.5">
          <Icon
            name="i-up"
            class="transition-rotate size-5 text-(--status)! group-open/collapse:-rotate-180" />
        </div>
      </UButton>

      <template #content>
        <LazyMatchContent v-if="isOpen" :match :player hydrate-on-visible />
      </template>
    </UCollapsible>
  </UCard>
</template>
