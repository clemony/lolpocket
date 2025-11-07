<script lang="ts" setup>
import { matchFiltersIgnoreChampion } from '#shared/references'
import { ListboxContent, ListboxItem, ListboxRoot } from 'reka-ui'

const queues = {
  0: 'All Recent',
  400: 'Recent Draft',
  410: 'Recent Flex',
  420: 'Recent Ranked'
}

const state = useSummonerInject()
const championStats = computed (() => state.champions({ filtered: true }).stats())
const champions = computed (() => [...championStats.value].sort((a, b) => (b.games - a.games)).splice(0, 5))

const length = computed (() => championStats.value?.length >= 5 ? 'grid-rows-5' : `grid-cols-${championStats.value?.length}`)

const championModel = computed({
  get: () => state.filter.value.champion,
  set: val => state.setFilter('champion', val),
})
</script>

<template>
  <ListboxRoot
    v-if="champions"
    v-model:model-value="championModel"
    class="field-box w-120 w-full max-w-120 gap-0 space-y-4  px-2 py-4"
    :multiple="false"
    @entry-focus.prevent>
    <PatchDateRange />
    <ListboxContent class="w-full overflow-hidden">
      <SlideInTopOutBottom
        group
        class="grid h-fit gap-1.5 overflow-hidden">
        <ListboxItem
          v-for="champion in champions"
          :key="champion.name"
          :value="champion.name"
          as-child
          class="peer w-full focus-visible:outline-0">
          <Button
            :class="cn('h-18 duration-0 grid-cols-[0.5fr_1fr_1fr_0.5fr] !grid justify-around  items-center ', { 'opacity-80': championModel.length > 1 && champion.name !== championModel })"
            variant="ghost">
            <ChampionIcon
              :id="champion.id"
              :alt="champion.name"
              :class="cn('size-15 overflow-hidden items-center rounded-full rounded-full shadow-sm drop-shadow-sm', { 'grayscale brightness-105 contrast-105': championModel.length > 1 && champion.name !== championModel })" />

            <div class="dst grid size-full gap-1.5 font-medium">
              <p class="!text-3 self-end">
                {{ champion.name }}
              </p>

              <p class="text-2 text-nowrap">
                {{ `${champion.games} Games` }}
              </p>
            </div>

            <div class="dst grid size-full justify-end gap-1.5 *:text-end">
              <p class="dst self-end font-medium text-nowrap">
                {{ champion.wins }}&nbsp;Win
              </p>

              <p class="font-medium text-nowrap">
                {{ champion.games - champion.wins }}&nbsp;Loss
              </p>
            </div>
            <div class="grid  size-full place-items-center justify-end justify-self-end">
              <ChampWinrate :champion="champion" />
            </div>
          </Button>
        </ListboxItem>
        <LilKrug v-if="!champions.length" />
      </SlideInTopOutBottom>
    </ListboxContent>
  </ListboxRoot>
</template>
