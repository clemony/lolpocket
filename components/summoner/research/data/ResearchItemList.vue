<script lang="ts" setup>
const ms = useMatchStore()

const patchGames = computed(() => ms.userMatchData.filter(g => g.patch === ms.patchSelect))
const { bayesianItems } = useMatchItems()
</script>

<template>
  <div class=" pb-9 overflow-hidden size-full">
    <div class=" max-h-160 h-160 bg-b1  border-shadow w-full inset-shadow-xxs">
      <div class="size-full  !overflow-hidden">
        <div class="oveflow-y-auto size-full">
          <div class=" pt-3 pb-1 px-2 opacity-60 tracking-wide items-center flex  gap-4 text-2 capitalize w-full">
            <span class="grow pl-2">
              {{ ms.patchSelect }} Items
            </span>

            <APDtooltip>
              Absolute
            </APDtooltip>
            <BayesianTooltip>
              Weighted
            </BayesianTooltip>
          </div>

          <template v-for="entry in bayesianItems" :key="entry.item?.id">
            <div v-if="entry" class="grid  grid-cols-[20px_repeat(2,40px)_1fr_repeat(2,60px)_20px] w-full py-3 border-b border-b-b2 items-center overflow-y-auto">
              <div />

              <div
                class="  flex rounded-xl  font-semibold badge-xl w-fit px-2.5  self-center  drop-shadow-xs shadow-xs border border-black/10  inset-shadow-sm "
                :style="{
                  'backgroundColor': `color-mix(in oklab, var(--color-${getGradeColor(entry.bayesianWinrate)}) 70%, transparent)`,
                  'box-shadow': `0px 1px 0px color-mix(in oklab, var(--color-${getGradeColor(entry.bayesianWinrate)}-b100) 40%, transparent),1px 1px 1px var(--color-${getGradeColor(entry.bayesianWinrate)}-w600) inset`,
                }">
                <span class="text-4  dst font-mono text-[#FFF] text-shadow-black/5 text-shadow-xs tracking-wide">
                  {{ getGrade(entry.bayesianWinrate) }}
                </span>
              </div>
              <div>
                <img class="size-10 rounded-xl" :src="`/img/item/${entry.item?.id}.webp`" />
              </div>
              <div class="list-col-grow -space-y-1">
                <div class="text-3 truncate">
                  {{ entry.item?.name }}
                </div>
                <div class="text-1 uppercase font-semibold opacity-60">
                  {{ entry.win }}W {{ entry.loss }}L
                </div>
              </div>
              <div class="text-end text-2">
                {{ entry.winrate.toFixed(1) }}%
              </div>
              <div class="text-end text-2">
                {{ entry.bayesianWinrate.toFixed(1) }}%
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>