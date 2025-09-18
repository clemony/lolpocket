<script lang="ts" setup>
import { ListboxContent, ListboxItem, ListboxRoot } from 'reka-ui'

const state = inject<PlayerData>(SummonerKey)!

// bind the role filter directly
const championModel = computed({
  get: () => state.filter.champion,
  set: val => state.setFilter('champion', val),
})

const champions = computed(() =>
  state
    .filteredChampions()
    .stats()
    .sort((a, b) => b.games - a.games)
    .splice(0, 5)
)
console.log('champions: ', champions)
</script>

<template>
  <ListboxRoot
    v-if="champions"
    v-model:model-value="championModel"
    class="w-full w-120 max-w-120 gap-0 field-box p-0"
    :multiple="false"
    @entry-focui.prevent>
    <ListboxContent class="w-full">
      <transition-slide
        group
        class="grid overflow-hidden h-fit gap-1 px-1 py-2.5">
        <ListboxItem
          v-for="champion in champions"
          :key="champion.name"
          :value="champion.name"
          class="rounded-box cursor-pointer focus:outline-0 hover:border-b3 px-4 hover:bg-b3/30 py-2 grid shrink-0 w-full grid-cols-[0.5fr_1.5fr_1.15fr_0.5fr] items-center gap-5 list-champs"
          :class="{
            'bg-b3/40 border-b3 shadow-xs  inset-shadow-sides bg-noise inset-shadow-b3/10':
              champion.name == championModel,
          }">
          <div class="size-fit rounded-full shadow-sm drop-shadow-sm">
            <div class="size-15 overflow-hidden items-center rounded-full">
              <ChampionIcon
                :id="champion.id"
                :alt="champion.name"
                class="size-15 scale-114" />
            </div>
          </div>

          <div class="grid size-full dst gap-1.5 font-medium">
            <p class="!text-sm self-end">
              {{ champion.name }}
            </p>

            <p class="text-nowrap text-xs">
              {{ `${champion.games} Games` }}
            </p>
          </div>

          <div class="grid size-full justify-end *:text-end dst gap-1.5">
            <p class="self-end dst font-medium text-nowrap">
              {{ champion.wins }}&nbsp;Win
            </p>

            <p class="font-medium text-nowrap">
              {{ champion.games - champion.wins }}&nbsp;Loss
            </p>
          </div>

          <ChampWinrate :champion="champion" />
        </ListboxItem>

        <LilKrug v-if="!champions.length" />
      </transition-slide>
    </ListboxContent>
  </ListboxRoot>
</template>
