<script lang="ts" setup>
// @todo fix usermatchdata
const userMatchData = []
const patchGames = computed(() =>
  userMatchData.filter(g => g.patch === ms().filter.patch),
)

const { matches, summoner } = useSummonerInject()

const { bayesianItems } = useMatchItems(summoner.value.puuid, matches.value)
</script>

<template>
  <div class="size-full overflow-hidden pb-9">
    <div class="border-shadow h-160 max-h-160 w-full bg-b1 inset-shadow-xxs">
      <div class="size-full overflow-hidden!">
        <div class="oveflow-y-auto size-full">
          <div
            class="
              flex w-full items-center gap-4 px-2 pt-3 pb-1 text-sm tracking-wide
              capitalize opacity-60
            ">
            <span class="grow pl-2">{{ ms().filter.patch }} Items</span>

            <APDtooltip>Absolute</APDtooltip>

            <BayesianTooltip>Weighted</BayesianTooltip>
          </div>

          <template
            v-for="entry in bayesianItems"
            :key="entry.item?.id">
            <div
              v-if="entry"
              class="
                grid w-full
                grid-cols-[20px_repeat(2,40px)_1fr_repeat(2,60px)_20px]
                items-center overflow-y-auto border-b border-b-b2 py-3
              ">
              <div />

              <!--
@fixme
<div
                class="
                  flex w-fit self-center rounded-xl border border-black/10
                  px-2.5 badge-xl font-semibold shadow-xs inset-shadow-sm
                  drop-shadow-xs
                "
                :style="{
                  'backgroundColor': `color-mix(in oklab, var(--color-${getGradeColor(entry.bayesianWinrate)}) 70%, transparent)`,
                  'box-shadow': `0px 1px 0px color-mix(in oklab, var(--color-${getGradeColor(entry.bayesianWinrate)}-b100) 40%, transparent),1px 1px 1px var(--color-${getGradeColor(entry.bayesianWinrate)}-w600) inset`,
                }">
                <span
                  class="
                    font-mono text-lg tracking-wide text-[#FFF] dst
                    text-shadow-black/5 text-shadow-xs
                  ">
                  {{ getGrade(entry.bayesianWinrate) }}
                </span>
              </div> -->

              <div>
                <img
                  class="size-10 rounded-xl"
                  :alt="entry.item?.id"
                  :src="`/img/items/${entry.item?.id}.webp`" />
              </div>

              <div class="list-col-grow -space-y-1">
                <div class="truncate text-md">
                  {{ entry.item?.name }}
                </div>

                <div class="text-xs font-semibold uppercase opacity-60">
                  {{ entry.win }}W {{ entry.loss }}L
                </div>
              </div>

              <div class="text-end text-sm">
                {{ entry.winrate.toFixed(1) }}%
              </div>

              <div class="text-end text-sm">
                {{ entry.bayesianWinrate.toFixed(1) }}%
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
