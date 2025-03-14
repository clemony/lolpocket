<script setup lang="ts">
import { summoner } from 'shared/data/summonerData'

const ds = useDataStore()
const as = useAccountStore()
const us = useUiStore()
// Default width

const modelValue = ref<string | number>(`Season ${new Date().getUTCFullYear()}`)
const list = [`Season ${new Date().getUTCFullYear()}`, 'Solo/Duo', 'Flex']
</script>

<template>
  <LayoutGroup>
    <SlidingTabs
      v-model:model-value="modelValue"
      :store="us.champTabs"
      :list="list" :default-value="`Season ${new Date().getUTCFullYear()}`">
      <TabsContent
        v-for="queue in summoner.champions"
        :key="queue.queue" :value="queue.queue"
        as-child>
        <Field class="bg-b2/40 border-b2  px-6 py-8">
          <Motion
            :key="queue.queue" :layout="true"
            :initial="{ x: -100, opacity: 0.7 }"
            :animate="{ x: 0, opacity: 1 }"
            :transition="{
              duration: 1,
              x: { type: 'spring', stiffness: 200, damping: 20 },
            }" class="justify-center grid gap-y-8">
            <Motion
              v-for="champion in queue.champions"
              :key="champion.champion" :layout="true"

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
          </Motion>
        </Field>
      </TabsContent>
    </SlidingTabs>
  </LayoutGroup>
</template>

<style scoped></style>
