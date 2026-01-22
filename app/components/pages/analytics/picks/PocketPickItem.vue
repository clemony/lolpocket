<script lang="ts" setup>
const { title, itemNum } = defineProps<{
  itemNum: number
  title?: string
}>()

const state = useSummonerInject()

/*
const itemColor = computedAsync(() => {
  if (!bayesianItems[itemNum] && !itemColor.value)
    return
  return getGradeColor(bayesianItems[itemNum].bayesianWinrate)
})
console.log('💠 - itemColor - itemColor:', itemColor) */
</script>

<template>
  <!-- <div
    v-if="bayesianItems[itemNum]"
    class="
      border-shadow flex w-full items-center gap-5 bg-b1 px-0 pt-0 pb-6
      inset-shadow-xxs
    "
    :title="title">
    <div class="relative flex w-full items-center gap-5 px-5 pt-8 dst">
      <div class="size-16 rounded-full shadow-sm drop-shadow-sm">
        <ItemTooltip
          :id="bayesianItems[itemNum]"
          class="size-16 overflow-hidden rounded-full" />
      </div>

      <div class="grow text-bc">
        <p class="text-xlfont-semibold pb-1 tracking-tight">
          {{ bayesianItems[itemNum].item?.name }}
        </p>

        <p class="text-md font-medium tracking-tight text-bc/60">
          {{ bayesianItems[itemNum].games }} Total Matches
        </p>

        <p class="text-mdd font-medium text-bc/60">
          {{ bayesianItems[itemNum].win }}W {{ bayesianItems[itemNum].loss }}L
        </p>
      </div>

      <div
        class="
          flex self-start justify-self-end rounded-xl border border-black/10
          badge-xl font-semibold shadow-xs inset-shadow-sm drop-shadow-xs
        "
        :style="{
          'backgroundColor': `color-mix(in oklab, var(--color-${itemColor}) 70%, transparent)`,
          'box-shadow': `0px 1px 0px color-mix(in oklab, var(--color-${itemColor}-b100) 40%, transparent),1px 1px 1px var(--color-${itemColor}-w600) inset`,
        }">
        <span
          class="
            font-mono text-lg tracking-wide text-[#FFF] dst text-shadow-black/5
            text-shadow-xs
          ">
          {{ getGrade(bayesianItems[itemNum].bayesianWinrate) }}
        </span>
      </div>
    </div>

    <Separator />

    <div class="flex justify-between px-6 text-sm dst">
      <div class="grid items-end text-sm font-medium text-bc/60">
        <Grow />

        <p>
          {{ ms().filter.patch }}
        </p>

        <p class="-mb-px">
          Winrate
        </p>
      </div>

      <p class="flex flex-col gap-1">
        <span class="mb-px font-medium opacity-60">Absolute</span>

        <span class="flex text-3xl font-bold text-bc dst">
          {{ bayesianItems[itemNum].winrate.toFixed(2) }}
          <icon
            name="ph:percent-bold"
            class="size-5" />
        </span>
      </p>

      <p class="flex flex-col gap-1">
        <span class="mb-px font-medium opacity-60">Weighted</span>

        <span class="flex text-3xl font-bold text-bc dst">
          {{ bayesianItems[itemNum].bayesianWinrate.toFixed(2) }}
          <icon
            name="ph:percent-bold"
            class="size-5" />
        </span>
      </p>
    </div>
 -->g
  <!--   <NoDataOverlay v-if="!props.patchGames.length" /> -->
  <!-- </div> -->
</template>
