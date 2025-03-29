<script lang="ts" setup>
const ans = useAnalysisStore()

const patchGames = computed(() => ans.userMatchData.filter(g => g.patch === ans.patchSelect))
const { bayesianItems } = usePatchItems(patchGames)
</script>

<template>
  <div class="">
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
      <div v-if="entry" class="grid  grid-cols-[20px_repeat(2,40px)_1fr_repeat(2,60px)_20px] w-full py-3 border-b border-b-b2 items-center">
        <div />
        <div class="text-5 font-medium flex items-center gap-0 rounded-lg text-[#FFFFFF] px-2 pb-px tracking-wider badge bg-resolve/90">
          <!--   {{ i.toString().match(/\d\d+/) ? i : `0${i}` }} -->
          s<span class="text-3 ">+</span>
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
</template>