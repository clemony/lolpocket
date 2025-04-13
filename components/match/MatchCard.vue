<script setup lang="ts">
const props = defineProps<{
  match: any
}>()
const as = useAccountStore()
const ds = useDataStore()
const match = computed (() => {
  return props.match.info
})

const player = computed(() => {
  return match.value.participants.find(p => p.puuid == as.userAccount.puuid)
})

const isOpen = ref(false)
</script>

<template>
  <Collapsible v-if="player && match" :key="match.matchId" v-model:open="isOpen" class="group w-220 justify-start max-w-220 group/collapse" as-child>
    <Field class="bg-b2/30 drop-shadow-xs border-b3/40 w-full p-0  @container/match min-w-134 cursor-pointer group/collapse ">
      <CollapsibleTrigger class="flex gap-7 py-6 w-full items-start overflow-hidden  cursor-pointer group/collapse pl-6 pr-4 ">
        <div class="flex h-full **:select-none flex-col justify-start gap-1.5">
          <WinLossButton v-if=" player.teamId && match" :player="player" :match="match" />
          <div class="font-medium dst tracking-tight text-left w-20 space-y-1 ">
            <MatchQueue v-if="match.queueId" as="p" class="text-2 text-left text-nowrap" :match="match" />
            <MatchMap v-if="match.queueId" as="p" class="text-2" :match="match" />
            <GameDuration as="p" :match="match" class="tracking-wide" />
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

      <CollapsibleContent class="!duration-300 CollapsibleContent w-full ">
        <Separator class="!bg-b3/60" />
        <MatchCollapse :match="match" />
      </CollapsibleContent>
    </Field>
  </Collapsible>
</template>

<style scoped></style>
