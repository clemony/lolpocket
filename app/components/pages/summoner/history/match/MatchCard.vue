<script setup lang="ts">
import { queueIndex } from '#shared/appdata/index/queue-index'

const { puuid, match } = defineProps<{
  match: MatchData
  puuid: string
}>()

const player = computed(() => {
  return match?.participants.find(p => p.puuid === puuid)
})

const isOpen = ref(false)

const queue = computed(() => {
  const foundQueue = queueIndex.find(q => q.queueId === match.queueId)
  if (!foundQueue)
    return null
  return foundQueue
})
</script>

<template>
  <Collapsible
    v-model:open="isOpen"
    :class="
      cn(
        ' group size-full border-b3/70 justify-start max-w-220 group/collapse  overflow-hidden bg-clip-padding items-center relative **:select-none text-xs flex-col field-box  min-w-134   cursor-pointer group/collapse',
      )
    ">
    <CollapsibleTrigger
      :for="match.matchId"
      :class="
        cn(
          ' h-40 flex gap-7 z-2 w-full text-xs  relative bg-linear-to-r pointer-events-auto to-transparent to-40% rounded-xl overflow-hidden bg-clip-padding relative items-center justify-items-start bg-transparent   cursor-pointer  px-5 justify-start rounded-box cursor-pointer  data-[state=open]:rounded-b-none ',
          player.win ? 'from-inspiration/80 ' : 'from-domination/80',
          'before:absolute before:left-0 before:z-3  before:h-full before:w-1/2 before:pointer-events-none before:brightness-94 before:opacity-40 before:mask-r-from-0 before:border before:rounded-xl before:shadow-sm before:shadow-black',

          player.win
            ? 'before:border-inspiration '
            : 'before:border-domination',
          isOpen === true ? 'max-h-240' : 'h-40',
        )
      ">
      <div
        class="flex w-30 **:antialiased h-fit self-center  **:select-none flex-col justify-start gap-1 py-1">
        <h3
          class="text-lg dst text-start text-nowrap text-white/86 font-bold uppercase">
          {{ player.win ? "Win" : "Loss" }}
        </h3>

        <div class="font-semibold *:text-left opacity-76 w-full flex flex-col">
          <p class="text-md text-left text-nowrap flex items-center font-bold flex gap-1.5">
            {{ queue?.description || queue?.map?.name || '' }}
          </p>

          <p
            class="!text-[0.92rem] leading-4 flex flex-col mt-1 py-1 justify-center text-start">
            <span>
              {{ queue?.map?.name }}
            </span>
            <span class="capitalize">
              {{ formatTimeAgo(match.gameEndTimestamp) }}
            </span>
          </p>
          <p class="tracking-wide font-bold">
            {{
              (match.gameDuration / 60).toFixed(2).toString().replace(".", ":")
            }}
          </p>
        </div>
      </div>

      <div class="flex h-full flex-col  py-6 gap-2 justify-between grow">
        <div class="flex items-start">
          <!-- champ image -->
          <ChampionIcon
            :id="player?.championId"
            v-tippy="{
              content: ix().champNameById(player?.championId),
              placement: 'top',
            }"
            alt="champion-icon"
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
          name="up"
          :class="
            cn('dst transition-rotate duration-200 size-5 mx-4', {
              '-rotate-180': isOpen,
            })
          " />
      </div>
    </CollapsibleTrigger>

    <LazyMatchContent
      :is-open
      :match
      :player />
  </Collapsible>
</template>
