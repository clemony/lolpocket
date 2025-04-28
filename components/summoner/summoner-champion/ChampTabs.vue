<script setup lang="ts">
const { summoner } = defineProps<{
  summoner: Summoner
}>()

const tabs = ref(0)
const { bayesianChampions } = useMatchChampions(computed (() => tabs.value), summoner.puuid, computed (() => summoner.simplifiedMatches))

const recentCount = ref([20])
const displayChampions = computedAsync (() => {
  if (!bayesianChampions)
    return

  return bayesianChampions.value.sort((a, b) => (b.games - a.games)).slice(0, 5)
}, [])
</script>

<template>
  <Tabs v-model:model-value="tabs" class="w-110">
    <Field class="p-0">
      <IndicatorTabsList class="bg-transparent h-13  w-full grid grid-cols-4  mb-2">
        <IndicatorTabsTrigger :value="0">
          Recent
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger :value="420">
          Solo/Duo
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger :value="440">
          Flex
        </IndicatorTabsTrigger>

        <IndicatorTabsTrigger :value="400">
          Normal
        </IndicatorTabsTrigger>

        <TabIndicator />
      </IndicatorTabsList>

      <TabsContent :value="tabs" as="div" class="overflow-hidden">
        <transition-slide group class="grid overflow-hidden h-fit gap-6.5 pt-2 px-8 pb-6">
          <template v-if="displayChampions.length">
            <div
              v-for="champion in displayChampions"
              :key="champion.champion.name"
              class="  grid shrink-0 w-full grid-cols-[0.5fr_1.5fr_1.15fr_1fr] items-center gap-4">
              <div
                class=" size-fit rounded-full shadow-sm drop-shadow-sm  ">
                <div class="size-17 overflow-hidden items-center rounded-full">
                  <img
                    :src="`/img/champion/${champion.champion.name}.webp`"
                    class="size-17 scale-114" />
                </div>
              </div>
              <div class="flex w-18 flex-col dst  justify-center font-medium">
                <p>
                  {{ champion.champion.name }}
                </p>
                <p class="text-nowrap">
                  {{ `${champion.games} Games` }}
                </p>
              </div>

              <div class="flex flex-col justify-center px-3">
                <p class="flex items-center dst font-medium text-nowrap">
                  <span class="grow !text-2 opacity-80">{{ champion.wins }}W</span>
                  <icon
                    name="ion:caret-up-outline"
                    class="text-inspiration size-4" />
                </p>
                <p class="flex  dst font-medium items-center text-nowrap">
                  <span class="grow !text-2 opacity-80"> {{ champion.games - champion.wins }}L </span>
                  <icon
                    name="ion:caret-down-outline"
                    class="text-domination  size-4" />
                </p>
              </div>

              <ChampWinrate :champion="champion" />
            </div>
          </template>
          <div v-else class=" grid shrink-0 w-full grid-cols-[0.5fr_1.5fr_1.15fr_1fr]  items-center gap-4">
            <Placeholder
              class="  rounded-full  size-17 palce-items-center grid">
              <i-no-champ class="size-8 opacity-40" />
            </Placeholder>

            <div class="flex  flex-col dst  justify-center font-medium">
              <p>Krug</p>
              <p>0 Games </p>
            </div>

            <div class="flex flex-col justify-center">
              <p class="flex items-center dst font-medium text-nowrap">
                <span class="grow !text-2 opacity-80">0W</span>
                <icon
                  name="ion:caret-up-outline"
                  class="text-bc/20  size-4" />
              </p>
              <p class="flex  dst font-medium items-center text-nowrap">
                <span class="grow !text-2 opacity-80"> 0L </span>
                <icon
                  name="ion:caret-down-outline"
                  class="text-bc/20 size-4" />
              </p>
            </div>
            <DonutSkeleton class="size-18 dst " label="0%">
            </DonutSkeleton>
          </div>
        </transition-slide>
      </TabsContent>
    </Field>
  </Tabs>
</template>

<style scoped></style>
