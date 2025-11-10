<script setup lang="ts">
import { queueIndex } from '~~/shared/references'

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
        `
          group group/collapse field-box relative size-full max-w-220 min-w-134
          cursor-pointer flex-col items-center justify-start overflow-hidden
          border-b3/70 bg-clip-padding text-2
          **:select-none
        `,
      )
    ">
    <CollapsibleTrigger
      :for="match.matchId"
      :class="
        cn(
          `
            pointer-events-auto relative z-2 flex h-40 w-full cursor-pointer
            items-center justify-start justify-items-start gap-7 overflow-hidden
            rounded-box rounded-xl bg-transparent bg-linear-to-r to-transparent
            to-40% bg-clip-padding px-5 text-2
            data-[state=open]:rounded-b-none
          `,
          player.win ? 'from-inspiration/80 ' : 'from-domination/80',
          `
            before:pointer-events-none before:absolute before:left-0 before:z-3
            before:h-full before:w-1/2 before:rounded-xl before:border
            before:mask-r-from-0 before:opacity-40 before:shadow-sm
            before:shadow-black before:brightness-94
          `,

          player.win
            ? 'before:border-inspiration '
            : 'before:border-domination',
          isOpen === true ? 'max-h-240' : 'h-40',
        )
      ">
      <div
        class="
          flex h-fit w-30 flex-col justify-start gap-1 self-center py-1
          **:antialiased **:select-none
        ">
        <h3
          class="
            text-start text-5 font-bold text-nowrap text-white/86 uppercase dst
          ">
          {{ player.win ? "Win" : "Loss" }}
        </h3>

        <div
          class="
            flex w-full flex-col font-semibold opacity-76
            *:text-left
          ">
          <p
            class="
              flex items-center gap-1.5 text-left text-4 font-bold text-nowrap
            ">
            {{ queue?.description || queue?.map?.name || '' }}
          </p>

          <p
            class="
              mt-1 flex flex-col justify-center py-1 text-start !text-[0.92rem]
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

      <div class="flex h-full grow flex-col justify-between gap-2 py-6">
        <div class="flex items-start">
          <!-- champ image -->
          <ChampionIcon
            :id="player?.championId"
            v-tippy="{
              content: ix().champNameById(player?.championId),
              placement: 'top',
            }"
            alt="champion-icon"
            class="
              size-17 rounded-xl transition-all duration-300
              hover:scale-105
            " />

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
        <div class="flex min-w-64 gap-3">
          <MatchItems :player />
        </div>
      </div>
      <TeamsCardOverview :match />

      <div class="grid w-8 place-items-center">
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
      :is-open
      :match
      :player />
  </Collapsible>
</template>
