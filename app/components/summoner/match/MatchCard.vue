<script setup lang="ts">
const { match, puuid } = defineProps<{
  match: MatchData
  puuid: string
}>()

const player = computed(() => {
  return match?.info?.participants.find(p => p.puuid == puuid)
})

const isOpen = ref(false)
</script>

<template>
  <Collapsible
    v-model:open="isOpen"
    :class="
      cn(
        'Collapsible field-box  drop-shadow-xs group w-220 border-b3/70 rounded-xl justify-start max-w-220 group/collapse overflow-hidden bg-clip-padding justify-center relative **:select-none text-2  p-0  min-w-134  cursor-pointer group/collapse',
        'before:absolute before:z-3  before:z-0 before:h-full before:w-1/2 before:pointer-events-none before:brightness-94 before:opacity-40 before:mask-r-from-0 before:border before:rounded-xl before:shadow-sm before:shadow-black',

        player.win ? 'before:border-inspiration ' : 'before:border-domination',
        isOpen == true ? 'h-240 min-h-240' : 'h-36',
      )
    ">
    <CollapsibleTrigger
      :for="match.metadata.matchId"
      :class="
        cn(
          ' h-40 flex gap-7 z-2 w-220 max-w-220 text-2 pt-3 pb-7 w-full relative bg-linear-to-r pointer-events-auto to-transparent to-40% rounded-xl overflow-hidden bg-clip-padding relative items-center justify-items-start bg-transparent   cursor-pointer  px-5 justify-start rounded-box cursor-pointer data-[state=open]:rounded-b-none ',
          player.win ? 'from-inspiration/80 ' : 'from-domination/80',
        )
      ">
      <div
        class="flex w-30 **:antialiased h-full **:select-none flex-col justify-start gap-1 py-1">
        <MatchOutcome :win="player?.win" />

        <div
          class="font-semibold *:text-left opacity-76 *:w-full w-full *:space-y-1 h-full justify-between flex flex-col">
          <span>
            <MatchQueue
              as="p"
              class="text-4 text-left text-nowrap font-bold"
              :queue-id="match.queueId" />

            <MatchMap
              :id="match.info.mapId"
              as="p"
              class="text-2 leading-5" />
          </span>

          <span>
            <GameDuration
              as="p"
              :duration="match.info.gameDuration"
              class="tracking-wide" />

            <GameEndTime
              as="p"
              class="text-2 italic capitalize"
              :end-time="match.info.gameEndTimestamp" />
          </span>
        </div>
      </div>

      <div class="flex flex-col gap-1 grow">
        <div class="flex items-start">
          <!-- champ image -->
          <ChampionIcon
            :id="player?.championId"
            v-tippy="{ content: player?.championName, placement: 'top' }"
            :alt="player?.championName"
            class="rounded-xl size-17" />

          <!--  spells -->
          <PlayerSpells
            :match
            :player
            class="mr-2 ml-2 shrink-0" />

          <!-- runes -->
          <PlayerRunes
            :match
            :player />

          <!--   kda -->
          <KDA :player />

          <!--   stats
               <PlayerScoreboardStats :player /> -->
        </div>

        <!-- items -->
        <div class="flex gap-3 min-w-64">
          <MatchItems :player />
        </div>
      </div>
      <TeamsCardOverview :match />

      <div class="w-8 grid place-items-center">
        <icon
          name="up-sm"
          :class="
            cn('dst transition-rotate duration-200 size-5 mx-4', {
              '-rotate-180': isOpen,
            })
          " />
      </div>
    </CollapsibleTrigger>

    <Match
      :match
      :player />
  </Collapsible>
</template>
