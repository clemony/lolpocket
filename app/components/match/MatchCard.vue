<script setup lang="ts">
import { motion } from 'motion-v'

const props = defineProps<{
  match: any
}>()
const as = useAccountStore()
const match = computed (() => {
  return props.match
})

const player = computed(() => {
  return match.value.info.participants.find(p => p.puuid == as.userAccount.puuid)
})

const isOpen = ref(false)
</script>

<template>
  <div class="size-fit " :class="{ 'min-h-53': !isOpen, 'min-h-267': isOpen }">
    <Collapsible v-if="player && match" :key="match.matchId" v-model:open="isOpen" as="div" class="animate-in fade-in group w-220 justify-start max-w-220 group/collapse ">
      <div
        class="field grid justify-center **:select-none text-2 shadow-warm-soft overflow-visible bg-b2/30 drop-shadow-xs border-b3/40 w-full p-0  @container/match min-w-134 cursor-pointer group/collapse ">
        <CollapsibleTrigger class="flex gap-7 py-6 w-full items-start overflow-hidden  cursor-pointer group/collapse pl-6 pr-4 ">
          <div class="flex w-38 h-full **:select-none flex-col justify-start gap-1.5">
            <WinLossButton v-if=" player.teamId && match" :player="player" :match="match" />
            <div class="font-medium dst tracking-tight text-left w-full space-y-1 ">
              <MatchQueue v-if="match.queueId" as="p" class="text-2 text-left text-nowrap" :queue-id="match.queueId" />
              <MatchMap v-if="match.info.mapId" :map-id="match.info.mapId" as="p" class="text-2" />
              <GameDuration as="p" :duration="match.info.gameDuration" class="tracking-wide" />
              <GameEndTime v-if="match.info.gameEndTimestamp" as="p" class="text-2 capitalize" :end-time="match.info.gameEndTimestamp" />
            </div>
          </div>
          <div class="flex gap-3 w-full">
            <div class="flex flex-col gap-3 grow ">
              <div class="flex items-start">
                <!-- champ image -->

                <ChampionImage v-if="player" :player="player" />

                <!--  spells -->

                <PlayerSpells :match="match" :player="player" class="mr-2 ml-2 shrink-0" />

                <!-- runes -->

                <PlayerRunes :match="match" :player="player" />
                <!--   kda -->

                <KDA :player="player" />

              <!--   stats -->

              <!--   <PlayerScoreboardStats :player="player" /> -->
              </div>

              <div class="flex gap-3 min-w-64">
                <MatchItems v-if="player.item0" :player="player" />
              </div>
            </div>
            <TeamsOverview :match="match" />
          </div>
          <div class="h-full relative w-8 absolute flex items-center overflow-visible justify-self-end">
            <icon name="up-sm" class="dst group-hover/collapse:stroke-[1.3] tldr-20" :class="{ '-rotate-180': isOpen }" />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent class=" CollapsibleContent w-full ">
          <Separator class="!bg-b3/60" />
          <MatchCollapse :match="match" />
        </CollapsibleContent>
      </div>
    </Collapsible>
  </div>
</template>

<style scoped></style>
