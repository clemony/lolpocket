<script setup lang="ts">
const as = useAccountStore()
const ds = useDataStore()

const match = computed (() => {
  return matchData.info
})

const player = computed(() => {
  return match.value.participants.find(p => p.puuid == as.userAccount.puuid)
})

const isOpen = ref(false)
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
    <Collapsible v-if="player && match" v-model:open="isOpen" class="group w-200 max-w-200 px-4  w-full group/collapse" as-child>
      <Field class="bg-b2/40 border-b3/40 w-full group-hover/collapse:bg-b2/80 tldr-30 cursor-pointer group/collapse">
        <CollapsibleTrigger class="flex gap-7 h-34 w-full items-center  cursor-pointer group/collapse">
          <div class="flex h-full **:select-none flex-col justify-start gap-1.5">
            <WinLossButton v-if=" player.teamId && match" :player="player" :match="match" />
            <div class="font-medium dst tracking-tight text-left w-20  ">
              <MatchQueue v-if="match.queueId" as="p" class="text-2 text-left text-nowrap" :match="match" />
              <MatchMap v-if="match.queueId" as="p" class="text-2" :match="match" />
              <GameDuration as="p" :match="match" class="tracking-wide" />
            </div>
          </div>
          <div class="flex flex-col gap-4 grow">
            <div class="flex items-center">
              <!-- champ image -->

              <ChampionImage :champ-name="player.championName" />

              <!--  spells -->

              <PlayerSpells :match="match" :player="player" class="mr-2 ml-2" />

              <!-- runes -->

              <PlayerRunes :match="match" :player="player" />

              <!--   kda -->

              <KDA :kills="player.kills" :deaths="player.deaths" :assists="player.assists" />
            </div>

            <MatchItems v-if="player.item0" :player="player" />
          </div>
          <div class="h-full relative w-8 flex items-center overflow-visible justify-self-end">
            <icon name="up-sm" class="dst group-hover/collapse:stroke-[1.3] tldr-20" :class="{ '-rotate-180': isOpen }" />
          </div>
        </CollapsibleTrigger>

        <Motion
          :layout="true" :transition="{
            type: useSpring(0, {
              stiffness: 0,
              damping: 0,
              mass: 400,
            }),

          }" as-child>
          <CollapsibleContent class="tldr-20 ease-in-out CollapsibleContent w-full py-3">
            <Separator class="!bg-b3/60" />
            <MatchCollapse :match="match" />
          </CollapsibleContent>
        </Motion>
      </Field>
    </Collapsible>
  </Motion>
</template>

<style scoped></style>
