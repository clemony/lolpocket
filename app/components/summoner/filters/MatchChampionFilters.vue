<script lang="ts" setup>
import { ListboxContent, ListboxItem, ListboxRoot } from 'reka-ui'

const { summoner } = defineProps<{
  summoner: Summoner
}>()

const ms = useMatchStore()

const { bayesianChampions } = useMatchChampions(summoner.simplifiedMatches)

const displayChampions = computedAsync (() => {
  if (!bayesianChampions)
    return

  return bayesianChampions.value.sort((a, b) => (b.games - a.games)).slice(0, 5)
}, [])
</script>

<template>
  <Field expand class="p-0 gap-0">
    <ListboxRoot v-model:model-value="ms.mf.champion" class="w-full  p-0 " :multiple="false" @entry-focus.prevent>
      <ListboxContent class="w-full ">
        <transition-slide group class="grid overflow-hidden h-fit gap-1   px-1 py-2.5">
          <ListboxItem
            v-for="champion in displayChampions"
            :key="champion.champion.name"
            :value="champion.champion.name"
            class="rounded-box cursor-pointer  focus:outline-0 hover:border-b3 px-4 hover:bg-b3/30  py-2  grid shrink-0 w-full grid-cols-[0.5fr_1.5fr_1.15fr_0.5fr] items-center gap-5 list-champs" :class="{ 'bg-b3/40 border-b3 shadow-xs  inset-shadow-sides bg-noise inset-shadow-b3/10': champion.champion.name == ms.mf.champion }">
            <div
              class=" size-fit rounded-full shadow-sm drop-shadow-sm  ">
              <div class="size-15 overflow-hidden items-center rounded-full">
                <img
                  :src="`/img/champion/${champion.champion.name}.webp`"
                  class="size-15 scale-114" />
              </div>
            </div>
            <div class="grid size-full dst  gap-1.5  font-medium">
              <p class="!text-3 self-end">
                {{ champion.champion.name }}
              </p>
              <p class="text-nowrap text-2 ">
                {{ `${champion.games} Games` }}
              </p>
            </div>

            <div class="grid size-full justify-end *:text-end dst  gap-1.5  ">
              <p class=" self-end dst font-medium text-nowrap">
                {{ champion.wins }}&nbsp;Win
              </p>
              <p class=" font-medium  text-nowrap">
                {{ champion.games - champion.wins }}&nbsp;Loss
              </p>
            </div>

            <ChampWinrate :champion="champion" />
          </ListboxItem>

          <LilKrug v-if="!displayChampions.length" />
        </transition-slide>
      </ListboxContent>
    </ListboxRoot>
  </Field>
</template>