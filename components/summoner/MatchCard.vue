<script setup lang="ts">
const as = useAccountStore()
const ds = useDataStore()

const match = computed (() => {
  return matchData.info
})
const queue = computed(() => {
  const foundQueue = queues.find(q => q.queueId == match.value.queueId)
  if (!foundQueue)
    return null

  // Get the map replacement
  /*     const mapReplacement = mapDictionary[0][foundQueue.map] || foundQueue.map; */

  // Get the queue replacement if the map is "Summoner's Rift"
  const queueReplacement = foundQueue.map === 'Summoner\'s Rift'
    ? queueDictionary[0][foundQueue.description] || foundQueue.description
    : foundQueue.description

  return {
    ...foundQueue,
    /*        map: mapReplacement, */
    description: queueReplacement,
  }
})

const player = computed(() => {
  return match.value.participants.find(p => p.puuid == as.userAccount.puuid)
})
</script>

<template>
  <Motion
    :layout="true" :transition="{
      type: useSpring(0, {
        stiffness: 200,
        damping: 100,
        mass: 10,
      }),

    }">
    <Collapsible v-if="player && match" class="group w-180 max-w-180 px-4 py-4 w-full" as-child>
      <Field class="bg-b2/40 border-b3/40 w-full">
        <CollapsibleTrigger class="flex gap-7 h-34 w-full">
          <div class="flex h-full **:select-none flex-col justify-start gap-1.5">
            <WinLossButton v-if=" player.teamId && match" :player="player" :match="match" />
            <div class="font-medium dst tracking-tight text-left w-20  ">
              <RankedQueue v-if="match.queueId" as="p" class="text-2 text-left text-nowrap" :match="match" />
              <RankedMap v-if="match.queueId" as="p" class="text-2" :match="match" />
              <GameDuration as="p" :match="match" class="tracking-wide" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-6">
              <ChampionImage :champ-name="player.championName" />
              <KDA :kills="player.kills" :deaths="player.deaths" :assists="player.assists" />
            </div>

            <MatchItems v-if="player.item0" :player="player" />
          </div>
        </CollapsibleTrigger>

        <Motion
          :layout="true" :transition="{
            type: useSpring(0, {
              stiffness: 200,
              damping: 100,
              mass: 10,
            }),

          }">
          <CollapsibleContent class="h-64 !tldr-20  CollapsibleContent py-3">
            <Separator class="!bg-b3/40" />
            hi
          </CollapsibleContent>
        </Motion>
      </Field>
    </Collapsible>
  </Motion>
</template>

<style scoped></style>
