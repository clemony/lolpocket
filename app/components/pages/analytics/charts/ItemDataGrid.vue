<script lang="ts" setup>
// @todo fix usermatchdata
const userMatchData = []
const patchGames = computed(() =>
  userMatchData.filter(g => g.patch === ms().filter.patch)
)

const state = inject<SummonerData>(SummonerKey)

const { bayesianItems } = useMatchItems(state.summoner.puuid, state.matches)
</script>

<template>
  <div class="size-full overflow-hidden pb-9">
    <div class="bg-b1 border-shadow inset-shadow-xxs h-160 max-h-160 w-full">
      <div class="size-full !overflow-hidden">
        <div class="oveflow-y-auto size-full">
          <div
            class="text-2 flex w-full items-center gap-4 px-2 pt-3 pb-1 tracking-wide capitalize opacity-60">
            <span class="grow pl-2">{{ ms().filter.patch }} Items</span>

            <APDtooltip>Absolute</APDtooltip>

            <BayesianTooltip>Weighted</BayesianTooltip>
          </div>

          <template
            v-for="entry in bayesianItems"
            :key="entry.item?.id">
            <div
              v-if="entry"
              class="border-b-b2 grid w-full grid-cols-[20px_repeat(2,40px)_1fr_repeat(2,60px)_20px] items-center overflow-y-auto border-b py-3">
              <div />

              <div
                class="badge-xl flex w-fit self-center rounded-xl border border-black/10 px-2.5 font-semibold inset-shadow-sm shadow-xs drop-shadow-xs"
                :style="{
                  'backgroundColor': `color-mix(in oklab, var(--color-${getGradeColor(entry.bayesianWinrate)}) 70%, transparent)`,
                  'box-shadow': `0px 1px 0px color-mix(in oklab, var(--color-${getGradeColor(entry.bayesianWinrate)}-b100) 40%, transparent),1px 1px 1px var(--color-${getGradeColor(entry.bayesianWinrate)}-w600) inset`,
                }">
                <span
                  class="text-4 dst text-shadow-black/5 text-shadow-xs font-mono tracking-wide text-[#FFF]">
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
