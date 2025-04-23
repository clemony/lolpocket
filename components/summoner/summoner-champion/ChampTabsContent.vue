<script lang="ts" setup>
const ms = useMatchStore()
const {bayesianChampions} = useMatchChampions(computed (() => ms.championTabsQueue))
</script>

<template>
<TabsContent :value="ms.championTabsQueue" as="div">
  
        <Field slide class="grid h-fit gap-6  px-6 py-8">
<template v-if="bayesianChampions.length">
            <div
              v-for="champion in bayesianChampions"
              :key="champion.champion.name"
              class="  grid shrink-0 w-full grid-cols-[0.5fr_1.25fr_0.75fr_1.25fr] items-center gap-4">
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

              <div class="flex flex-col justify-center">
                <p class="flex items-center dst font-medium text-nowrap">
                  <span class="grow !text-2 opacity-80">{{ champion.wins }}W</span>
                  <icon
                    name="ion:caret-up-outline"
                    class="text-inspiration size-4"/>
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
  <div v-else class=" grid shrink-0 w-full grid-cols-[0.5fr_1.25fr_0.75fr_1.25fr] items-center gap-4">
     <Placeholder
                class="  rounded-full  size-17 palce-items-center grid">
<i-no-champ  class="size-8 opacity-40"/>
  </Placeholder>

    <div class="flex  flex-col dst  justify-center font-medium">
      <p>Tiny Poro</p>
      <p>0 Games </p>
    </div>

    <div class="flex flex-col justify-center">
                <p class="flex items-center dst font-medium text-nowrap">
                  <span class="grow !text-2 opacity-80">0W</span>
                  <icon
                    name="ion:caret-up-outline"
                    class="text-bc/20  size-4"/>
                </p>
                <p class="flex  dst font-medium items-center text-nowrap">
                  <span class="grow !text-2 opacity-80"> 0L </span>
                  <icon
                    name="ion:caret-down-outline"
                    class="text-bc/20 size-4" />
                </p>

              </div>
                  <div class=" border-b3 bg-b3/20 w-32 h-8 rounded-lg  inset-shadow-xs  shadow-xxs ">
                  </div>
</div>
        </Field>
      </TabsContent>
  
</template>