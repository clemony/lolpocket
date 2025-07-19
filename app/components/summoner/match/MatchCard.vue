<script setup lang="ts">
const { match } = defineProps<{
  match: MatchData
}>()

const as = useAccountStore()
const player = computed(() => {
  return match?.info?.participants.find(p => p.puuid == as.userAccount.riot.puuid)
})

const playerWin = computed (() => {
  const a = match?.teams[0].win ? 100 : 200
  const b = player.value.teamId

  return a == b
})

const isOpen = ref(false)

const modelValue = ref<string | number>('Scoreboard')
</script>

<template>
  <div v-if="match" class="size-fit " :class="{ 'min-h-42': !isOpen, 'min-h-245': isOpen }">
    <Collapsible
      v-if="player && match" :key="match.metadata.matchId" v-model:open="isOpen" as="div"
      :class="cn(
        'field-box fade-in group w-220 justify-start max-w-220 group/collapse  bg-clip-padding justify-center **:select-none text-2 overflow-hidden p-0  @container/match min-w-134  cursor-pointer group/collapse',

        'before:absolute before:h-full before:w-1/2 before:brightness-94 before:opacity-40 before:mask-r-from-0 before:border before:rounded-box before:shadow-sm before:shadow-black',

        playerWin ? 'before:border-inspiration ' : 'before:border-domination')">
      <CollapsibleTrigger
        class="flex gap-7 py-3 w-full relative items-center justify-items-start overflow-hidden  cursor-pointer group/collapse pl-5 justify-start"
        :class="cn('bg-linear-to-r to-transparent to-40%', playerWin ? 'from-inspiration/80 ' : 'from-domination/80')">
        <div class="flex w-30  **:antialiased-subpixel h-full  **:select-none flex-col justify-start gap-1 py-1">
          <MatchOutcome :win="playerWin" />

          <div class=" font-semibold *:text-left opacity-76  *:w-full w-full *:space-y-1 h-full justify-between flex flex-col">
            <span>
              <MatchQueue v-if="match.queueId" as="p" class="text-4    text-left text-nowrap  font-bold" :queue-id="match.queueId" />

              <MatchMap v-if="match.info.mapId" :id="match.info.mapId" as="p" class="text-2 leading-5" />
            </span>

            <span>
              <GameDuration as="p" :duration="match.info.gameDuration" class="tracking-wide" />

              <GameEndTime v-if="match.info.gameEndTimestamp" as="p" class="text-2 italic capitalize" :end-time="match.info.gameEndTimestamp" />
            </span>
          </div>
        </div>

        <div class="flex  flex-col gap-1 grow ">
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

          <div class="flex gap-3 min-w-64 ">
            <MatchItems v-if="player.item0" :player="player" />
          </div>
        </div>

        <TeamsOverview :match="match" />

        <div class="h-full relative w-8 absolute flex items-center overflow-visible justify-self-end">
          <icon name="up-sm" class="dst group-hover/collapse:stroke-[1.3] tldr-20" :class="{ '-rotate-180': isOpen }" />
        </div>
      </CollapsibleTrigger>

      <LazyCollapsibleContent class=" CollapsibleContent w-full !px-0">
        <Tabs v-model:model-value="modelValue" class="relative">
          <IndicatorTabsList class=" grid-flow-col rounded-none justify-start auto-cols-min w-full  bg-b3/36 border border-b3 !mb-0">
            <IndicatorTabsTrigger v-for="tab in ['Scoreboard', 'Data', 'Credits']" :key="tab" :value="tab" class="cursor-pointer">
              {{ tab }}
            </IndicatorTabsTrigger>

            <TabIndicator />
          </IndicatorTabsList>

          <TabsContent value="Scoreboard" class="p-0 !m-0">
            <LazyMatchScoreboard :match="match" />
          </TabsContent>

          <TabsContent value="Credits">
            <LazyMatchTributes :match="match" />
          </TabsContent>

          <TabsContent value="Data" class="">
            <LazyMatchDataTable :match="match" />
          </TabsContent>
        </Tabs>
      </LazyCollapsibleContent>
    </Collapsible>
  </div>
</template>

<style scoped></style>
