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
    :style="{
      '--status': `var(--color-${player?.win === 'remake' ? 'p3' : player?.win === true ? 'insp' : 'dom'})`,
    }"
    :ui="{
      body: 'flex grow rounded-6xl! bg-linear-to-l from-(--status)/80 to-transparent to-63% bg-cover bg-clip-padding p-0! ring-pc/8',
      root: 'shadow-black/3',
    }"
    as-child>
    <UCollapsible
      v-if="player"
      v-model:open="isOpen"
      :ui="{
        root: 'relative min-w-134 grow cursor-pointer',
        content: 'bg-transparent',
      }">
      <UButton
        block
        color="transparent"
        :ui="{
          base: 'text-p pointer-events-auto relative z-2 h-40! min-h-36! grow justify-between gap-2 pr-4 pl-3 text-sm shadow-none ring-0! fx-0 **:select-none open:rounded-b-none hover:ring-0',
        }">
        <div
          class="relative grid h-[93%] w-7 place-items-center rounded-xl bg-(--status)/20 backdrop-blur-md duration-300 ease-spring group-hover/collapse:bg-(--status)/90">
          <Icon
            name="i-right"
            class="transition-rotate absolute size-5 text-white drop-shadow-xs duration-300 ease-spring-soft **:stroke-[11%] group-open/collapse:rotate-90" />
        </div>
        <div class="flex items-center px-3">
          <PlayerLoadout :match :player />
        </div>

        <div class="flex items-center gap-2 pl-3">
          <TeamsCardOverview :match />
          <MatchInfo :match :player />
        </div>
      </UButton>

      <template #content>
        <LazyMatchContent v-if="isOpen" :match :player hydrate-on-visible />
      </template>
    </UCollapsible>
  </UCard>
</template>
