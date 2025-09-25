<script lang="ts" setup>
import { ListboxContent, ListboxItem, ListboxRoot } from 'reka-ui'
import { matchFiltersIgnoreChampion } from '~~/shared/appdata'

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
    class="w-full w-120 max-w-120 gap-0 field-box px-2 pb-4 pt-6"
    :multiple="false"
    @entry-focus.prevent>
    <span class="field-legend">
      {{ queues[state.filter.value.queue] }} Champions
    </span>
    <ListboxContent class="w-full overflow-hidden">
      <SlideInTopOutBottom
        group
        class="grid overflow-hidden h-fit gap-1.5">
        <ListboxItem
          v-for="champion in champions"
          :key="champion.name"
          :value="champion.name"
          as-child
          class="w-full peer focus-visible:outline-0">
          <Button
            :class="cn('h-18 duration-0 grid-cols-[0.5fr_1fr_1fr_0.5fr] !grid justify-around  items-center ', { 'opacity-80': championModel.length > 1 && champion.name !== championModel })"
            variant="ghost">
            <ChampionIcon
              :id="champion.id"
              :alt="champion.name"
              :class="cn('size-15 overflow-hidden items-center rounded-full rounded-full shadow-sm drop-shadow-sm', { 'grayscale brightness-105 contrast-105': championModel.length > 1 && champion.name !== championModel })" />

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
            <div class="justify-end  justify-self-end grid place-items-center size-full">
              <ChampWinrate :champion="champion" />
            </div>
          </Button>
        </ListboxItem>
        <!--
        <ListboxItem
          v-if="model !== ''"
          value=""
          as-child
          class="w-full peer-has-not-[data-[state=checked]]:hidden">
          <Button
            class=" *:opacity-50 hover:*:opacity-100 !grid grid-cols-[45px_1fr]"
            variant="ghost">
            <icon
              name="x"
              class="place-self-center size-4" />
            <span>Clear</span>
          </Button>
        </ListboxItem> -->
        <LilKrug v-if="!champions.length" />
      </SlideInTopOutBottom>
    </ListboxContent>
  </ListboxRoot>
</template>
