<script setup lang="ts">
  import { summoner } from 'shared/data/summonerData';
  const ds = useDataStore();
  const as = useAccountStore();
</script>

<template>
  <Tabs default-value="all">
    <TabsList class="mt-2 mb-2 [&_button]:rounded-md">
      <TabsTrigger value="all">All Ranked</TabsTrigger>
      <TabsTrigger value="soloDuo">Solo/Duo</TabsTrigger>
      <TabsTrigger value="flex">Flex</TabsTrigger>
    </TabsList>

    <TabsContent
      v-for="queue in summoner.champions"
      :value="queue.queue"
      as-child>
      <Card class="grid gap-y-8 px-6 py-8">
        <div
          v-for="champion in queue.champions"
          class="grid w-full grid-cols-[0.5fr_1.25fr_0.75fr_1.25fr] items-center gap-4">
          <div
            class="ring-neutral/15 size-fit rounded-full ring-1 ring-offset-3"
            :class="{
              'ring-offset-master': champion.wins / champion.games > 0.54,
              'ring-offset-challenger/90': 0.54 > champion.wins / champion.games && champion.wins / champion.games > 0.51,
              'ring-offset-gold': 0.51 > champion.wins / champion.games && champion.wins / champion.games > 0.49,
              'ring-offset-red-600/80': champion.wins / champion.games < 0.49,
            }">
            <div class="size-17 overflow-hidden rounded-full">
              <img
                :src="`/img/champions/${
                  computed(() => {
                    return ds.champions.find((champ) => champ.name == champion.champion);
                  }).value.apiname
                }.webp`"
                class="size-17 scale-114" />
            </div>
          </div>
          <div class="flex w-18 flex-col">
            <p class="!font-4 font-medium">
              {{ champion.champion }}
            </p>
            <p class="text-nowrap">
              {{ champion.games + ' Games' }}
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <p class="flex items-center text-nowrap">
              <span class="grow">{{ champion.wins }}W</span>
              <icon
                name="ion:caret-up-outline"
                class="text-resolve"
                :class="{
                  'text-inspiration': as.colorBlindMode,
                }" />
            </p>
            <p class="flex items-center text-nowrap">
              <span class="grow"> {{ champion.games - champion.wins }}L </span>
              <icon
                name="ion:caret-down-outline"
                class="text-domination" />
            </p>
          </div>

          <ChampBar :champion="champion" />
        </div>
      </Card>
    </TabsContent>
  </Tabs>
</template>
<style scoped></style>
