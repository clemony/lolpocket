<script setup lang="ts">
const { puuid, match: m } = defineProps<{
  match: MatchData
  puuid: string
}>()

const queue = computed(() => {
  const foundQueue = queueIndex.find(q => q.queueId === m.queueId)
  if (!foundQueue)
    return null
  return foundQueue
})

const match = computed<MatchDataCurrentPlayer>(() => {
  const player = m?.participants.find(p => p.puuid === puuid)
  return {
    ...m,
    player,
    queue: queue.value,
  }
})

const isOpen = ref(false)
</script>

<template>
  <Collapsible
    v-model:open="isOpen"
    :class="
      cn('group group/collapse field-box relative mb-8 size-full max-w-210 min-w-134 cursor-pointer flex-col items-center justify-start overflow-hidden border-b3/70 bg-clip-padding text-2 **:select-none',
      )
    ">
    <CollapsibleTrigger
      :for="match.matchId"
      :class="
        cn('pointer-events-auto relative z-2 flex h-36 w-full cursor-pointer items-center justify-start justify-items-start gap-4 overflow-hidden rounded-xl bg-transparent bg-linear-to-r to-transparent to-40% bg-clip-padding px-5 text-2 data-[state=open]:rounded-b-none',
           match.player.win ? 'from-inspiration/80 ' : 'from-domination/80',
           `
            before:pointer-events-none before:absolute before:left-0 before:z-3
            before:h-full before:w-1/2 before:rounded-xl before:border
            before:mask-r-from-0 before:opacity-40 before:shadow-sm
            before:shadow-black before:brightness-94
          `,

           match.player.win
             ? 'before:border-inspiration '
             : 'before:border-domination',
           isOpen === true ? 'max-h-240' : 'h-36',
        )
      ">
      <div
        class="
          flex h-fit w-30 flex-col justify-start self-center **:antialiased
          **:select-none
        ">
        <h3
          class="
            text-start text-5 font-bold text-nowrap text-white/86 uppercase dst
          ">
          {{ match.player.win ? "Win" : "Loss" }}
        </h3>

        <div
          class="flex w-full flex-col font-semibold opacity-76 *:text-left">
          <p
            class="
              flex items-center gap-1.5 text-left text-4 font-bold text-nowrap
            ">
            {{ queue?.description || queue?.map?.name || "" }}
          </p>

          <p
            class="
              mt-1 flex flex-col justify-center text-start text-[0.92rem]!
              leading-4
            ">
            <span>
              {{ queue?.map?.name }}
            </span>
            <span class="capitalize">
              {{ formatTimeAgo(match.gameEndTimestamp) }}
            </span>
          </p>
          <p class="font-bold tracking-wide">
            {{
              (match.gameDuration / 60).toFixed(2).toString().replace(".", ":")
            }}
          </p>
        </div>
      </div>

      <div class="ml-2 flex h-max w-70 flex-col gap-1">
        <div class="flex w-full items-start">
          <!-- champ image -->
          <ChampionIcon
            :id="match.player?.championId"
            v-tippy="{
              theme: 'neutral',
              content: ix().champNameById(match.player?.championId),
              placement: 'top',
            }"
            alt="champion-icon"
            class="
              size-15 rounded-lg shadow-sm inset-shadow-xs drop-shadow-sm
              transition-all duration-300 hover:scale-105
            " />

          <!--  spells -->
          <PlayerSpells
            :player="match.player"
            class="ml-2 shrink-0" />

          <!-- runes -->
          <PlayerRunes
            :player="match.player" />

          <!--   kda -->
          <KDA
            :player="match.player" />

          <!--   stats
               <PlayerScoreboardStats :player /> -->
        </div>

        <!-- items -->

        <div
          v-if="match.player"
          class="flex h-full w-full items-start gap-1 *:rounded-md">
          <Item
            v-for="item in match.player.items"
            :id="item"
            :key="item"
            v-tippy="{ content: ix().itemNameById(item),
                       placement: 'bottom',
                       theme: 'neutral' }"
            :alt="item"
            :class="cn('size-9 rounded-md border-b3 inset-shadow-xs ring-bc/60 inset-shadow-black/4 transition-all duration-300 *:rounded-md hover:scale-105 hover:ring', { 'border pointer-events-none saturate-40 ': !item, 'bg-domination/10!': !match.player.win, 'bg-inspiration/10!': match.player.win })" />
        </div>
      </div>
      <TeamsCardOverview :match />

      <div class="absolute right-4 grid w-8 place-items-center">
        <icon
          name="up"
          :class="
            cn('transition-rotate mx-4 size-5 dst duration-200', {
              '-rotate-180': isOpen,
            })
          " />
      </div>
    </CollapsibleTrigger>

    <LazyMatchContent
      v-show="isOpen"
      :match />
  </Collapsible>
</template>
