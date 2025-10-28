<script lang="ts" setup>
<<<<<<< HEAD
// @todo fix usermatchdata
=======
// TODO fix usermatchdata
>>>>>>> refs/remotes/origin/main
const userMatchData = []
const patchGames = computed(() =>
  userMatchData.filter(g => g.patch === ms().filter.patch)
)

const state = inject<SummonerData>(SummonerKey)

const { bayesianItems } = useMatchItems(state.summoner.puuid, state.matches)
</script>

<template>
<<<<<<< HEAD
  <div class="size-full overflow-hidden pb-9">
    <div class="bg-b1 border-shadow inset-shadow-xxs h-160 max-h-160 w-full">
      <div class="size-full !overflow-hidden">
        <div class="oveflow-y-auto size-full">
          <div
            class="text-2 flex w-full items-center gap-4 px-2 pt-3 pb-1 tracking-wide capitalize opacity-60">
=======
  <div class="pb-9 overflow-hidden size-full">
    <div class="max-h-160 h-160 bg-b1 border-shadow w-full inset-shadow-xxs">
      <div class="size-full !overflow-hidden">
        <div class="oveflow-y-auto size-full">
          <div
            class="pt-3 pb-1 px-2 opacity-60 tracking-wide items-center flex gap-4 text-2 capitalize w-full">
>>>>>>> refs/remotes/origin/main
            <span class="grow pl-2">{{ ms().filter.patch }} Items</span>

            <APDtooltip>Absolute</APDtooltip>

            <BayesianTooltip>Weighted</BayesianTooltip>
          </div>

          <template
            v-for="entry in bayesianItems"
            :key="entry.item?.id">
            <div
              v-if="entry"
<<<<<<< HEAD
              class="border-b-b2 grid w-full grid-cols-[20px_repeat(2,40px)_1fr_repeat(2,60px)_20px] items-center overflow-y-auto border-b py-3">
              <div />

              <div
                class="badge-xl flex w-fit self-center rounded-xl border border-black/10 px-2.5 font-semibold inset-shadow-sm shadow-xs drop-shadow-xs"
=======
              class="grid grid-cols-[20px_repeat(2,40px)_1fr_repeat(2,60px)_20px] w-full py-3 border-b border-b-b2 items-center overflow-y-auto">
              <div />

              <div
                class="flex rounded-xl font-semibold badge-xl w-fit px-2.5 self-center drop-shadow-xs shadow-xs border border-black/10 inset-shadow-sm"
>>>>>>> refs/remotes/origin/main
                :style="{
                  'backgroundColor': `color-mix(in oklab, var(--color-${getGradeColor(entry.bayesianWinrate)}) 70%, transparent)`,
                  'box-shadow': `0px 1px 0px color-mix(in oklab, var(--color-${getGradeColor(entry.bayesianWinrate)}-b100) 40%, transparent),1px 1px 1px var(--color-${getGradeColor(entry.bayesianWinrate)}-w600) inset`,
                }">
                <span
<<<<<<< HEAD
                  class="text-4 dst text-shadow-black/5 text-shadow-xs font-mono tracking-wide text-[#FFF]">
=======
                  class="text-4 dst font-mono text-[#FFF] text-shadow-black/5 text-shadow-xs tracking-wide">
>>>>>>> refs/remotes/origin/main
                  {{ getGrade(entry.bayesianWinrate) }}
                </span>
              </div>

              <div>
                <img
                  class="size-10 rounded-xl"
                  :alt="entry.item?.id"
                  :src="`/img/items/${entry.item?.id}.webp`" />
              </div>

              <div class="list-col-grow -space-y-1">
                <div class="text-3 truncate">
                  {{ entry.item?.name }}
                </div>

                <div class="text-1 font-semibold uppercase opacity-60">
                  {{ entry.win }}W {{ entry.loss }}L
                </div>
              </div>

              <div class="text-2 text-end">
                {{ entry.winrate.toFixed(1) }}%
              </div>

              <div class="text-2 text-end">
                {{ entry.bayesianWinrate.toFixed(1) }}%
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
