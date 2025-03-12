<script setup lang="ts">
import { summoner } from 'shared/data/summonerData'

const ds = useDataStore()
const as = useAccountStore()
</script>

<template>
  <Tabs default-value="all">
    <TabsList class="mt-3 mb-2 [&_button]:rounded-md shadow-warm-soft btn bg-b2/40 btn-lg">
      <CustomTabTrigger value="all">
        All Ranked
      </CustomTabTrigger>
      <CustomTabTrigger value="soloDuo">
        Solo/Duo
      </CustomTabTrigger>
      <CustomTabTrigger value="flex">
        Flex
      </CustomTabTrigger>
    </TabsList>

  
    <TabsContent
      v-for="queue in summoner.champions"
      :key="queue.queue" :value="queue.queue"
      as-child>
      <Field class="bg-b2/40 border-b2 justify-center grid gap-y-8 px-6 py-8">

        <Motion
          v-for="champion in queue.champions" :key="champion.champion"
          class="grid  w-full grid-cols-[0.5fr_1.25fr_0.75fr_1.25fr] items-center gap-4">
          <div
            class=" size-fit rounded-full shadow-sm drop-shadow-sm  ">
            <div class="size-17 overflow-hidden items-center rounded-full">
              <img
                :src="`/img/champion/${
                  computed(() => {
                    return ds.champions.find((champ) => champ.name == champion.champion);
                  }).value.apiname
                }.webp`"
                class="size-17 scale-114" />
            </div>
          </div>
          <div class="flex w-18 flex-col dst  justify-center font-medium">
            <p>
              {{ champion.champion }}
            </p>
            <p class="text-nowrap">
              {{ `${champion.games} Games` }}
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <p class="flex items-center dst font-medium text-nowrap">
              <span class="grow !text-2 opacity-80">{{ champion.wins }}W</span>
              <icon
                name="ion:caret-up-outline"
                class="text-resolve size-4"
                :class="{
                  'text-inspiration': as.colorBlindMode,
                }" />
            </p>
            <p class="flex  dst font-medium items-center text-nowrap">
              <span class="grow !text-2 opacity-80"> {{ champion.games - champion.wins }}L </span>
              <icon
                name="ion:caret-down-outline"
                class="text-domination  size-4" />
            </p>
          </div>

          <ChampWinrate :champion="champion" />
        </Motion>
      </Field>
    </TabsContent>
  </Tabs>
</template>

<style scoped></style>
