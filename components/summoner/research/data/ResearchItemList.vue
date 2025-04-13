<script lang="ts" setup>
const ans = useAnalysisStore()

const patchGames = computed(() => ans.userMatchData.filter(g => g.patch === ans.patchSelect))
const { bayesianItems } = usePatchItems(patchGames)
</script>

<template>
  <div class=" pb-9 overflow-hidden size-full">
    <div class=" max-h-170 h-170 bg-b1  border-shadow w-full ">
      <div class="size-full  !overflow-hidden">
        <div class="oveflow-y-auto size-full">
          <div class=" pt-3 pb-1 px-2 opacity-60 tracking-wide items-center flex  gap-4 text-2 capitalize w-full">
            <span class="grow pl-2">
              {{ ans.patchSelect }} Items
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
                class=" badge flex rounded-xl  font-semibold badge-lg  self-start drop-shadow-xs shadow-xs   inset-shadow-sm" :class="computedAsync (() => {

                  const itemColor = getGradeColor(entry.bayesianWinrate)
                  console.log('💠 - classObject - itemColor:', itemColor)
                  return `border-${itemColor}-b100/60 shadow-${itemColor}-b100/60 inset-shadow-${itemColor}-w600 bg-${itemColor}/70`
                })">
                <span class="text-4  dst font-mono text-[#FFF] tracking-wide">
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