<script lang="ts" setup>
const queues = {
  0: 'All Recent',
  400: 'Recent Draft',
  410: 'Recent Flex',
  420: 'Recent Ranked',
}

const state = useSummonerInject()
const championStats = computed(() =>
  state.champions({ filtered: true }).stats(),
)
const champions = computed(() =>
  [...championStats.value].sort((a, b) => b.games - a.games).splice(0, 5),
)

const length = computed(() =>
  championStats.value?.length >= 5
    ? 'grid-rows-5'
    : `grid-cols-${championStats.value?.length}`,
)

const championModel = computed({
  get: () => state.filter.value.champion,
  set: val => state.setFilter('champion', val),
})
</script>

<template>
  <Listbox
    v-if="champions"
    v-model:model-value="championModel"
    :multiple="false"
    @entry-focus.prevent>
    <ListboxContent
      class="field-box w-full gap-0 space-y-4 overflow-hidden px-2 py-4">
      <SlideInTopOutBottom
        group
        class="grid h-fit gap-1.5 overflow-hidden">
        <ListboxItem
          v-for="champion in champions"
          :key="champion.name"
          :value="champion.name"
          variant="ghost"
          hover="secondary"
          size="16"
          class="peer w-full gap-4! rounded-xl focus-visible:outline-0">
          <ChampionIcon
            :id="champion.id"
            :alt="champion.name"
            :class="
              cn('size-14 items-center overflow-hidden rounded-full shadow-sm drop-shadow-sm',
                {
                  'grayscale brightness-105 contrast-105':
                    championModel.length > 1
                    && champion.name !== championModel,
                },
              )
            " />

          <div class="grid grow gap-1.5 font-medium dst">
            <p class="self-end text-3!">
              {{ champion.name }}
            </p>

            <p class="text-2 text-nowrap">
              {{ `${champion.games} Games` }}
            </p>
          </div>

          <div
            class="grid w-22 shrink-0 justify-end gap-1.5 dst *:text-end">
            <p class="self-end font-medium text-nowrap dst">
              {{ champion.wins }}&nbsp;Win
            </p>

            <p class="font-medium text-nowrap">
              {{ champion.games - champion.wins }}&nbsp;Loss
            </p>
          </div>
          <div
            class="
              grid w-16 shrink-0 place-items-center justify-end justify-self-end
            ">
            <ChampWinrate :champion="champion" />
          </div>
        </ListboxItem>
        <LilKrug v-if="!champions.length" />
      </SlideInTopOutBottom>
    </ListboxContent>
  </Listbox>
</template>
