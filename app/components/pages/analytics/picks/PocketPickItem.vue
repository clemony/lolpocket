<script lang="ts" setup>
const { itemNum, title } = defineProps<{
  itemNum: number
  title?: string
}>()
const ms = useMatchStore()
const ds = useDataStore()

const state = inject<PlayerData>(SummonerKey)

const { bayesianItems } = useMatchItems(state.summoner.puuid, state.matches)

const itemColor = computedAsync(() => {
  if (!bayesianItems[itemNum] && !itemColor.value)
    return
  return getGradeColor(bayesianItems[itemNum].bayesianWinrate)
})
console.log('💠 - itemColor - itemColor:', itemColor)
</script>

<template>
  <Field
    v-if="bayesianItems[itemNum]"
    class="bg-b1 pb-6 px-0 pt-0 w-full flex border-shadow items-center gap-5 inset-shadow-xxs"
    :title="title">
    <div class="w-full pt-8 items-center px-5 gap-5 dst flex relative">
      <div class="rounded-full size-16 shadow-sm drop-shadow-sm">
        <PopoverItem
          :id="bayesianItems[itemNum]"
          class="size-16 rounded-full overflow-hidden" />
      </div>

      <div class="text-bc grow">
        <p class="tracking-tight text-lgfont-semibold pb-1">
          {{ bayesianItems[itemNum].item?.name }}
        </p>

        <p class="text-sm font-medium tracking-tight text-bc/60">
          {{ bayesianItems[itemNum].games }} Total Matches
        </p>

        <p class="text-sm font-medium text-bc/60">
          {{ bayesianItems[itemNum].win }}W {{ bayesianItems[itemNum].loss }}L
        </p>
      </div>

      <div
        class="flex rounded-xl font-semibold badge-xl self-start justify-self-end drop-shadow-xs shadow-xs border border-black/10 inset-shadow-sm"
        :style="{
          'backgroundColor': `color-mix(in oklab, var(--color-${itemColor}) 70%, transparent)`,
          'box-shadow': `0px 1px 0px color-mix(in oklab, var(--color-${itemColor}-b100) 40%, transparent),1px 1px 1px var(--color-${itemColor}-w600) inset`,
        }">
        <span
          class="text-md dst font-mono text-[#FFF] text-shadow-black/5 text-shadow-xs tracking-wide">
          {{ getGrade(bayesianItems[itemNum].bayesianWinrate) }}
        </span>
      </div>
    </div>

    <Separator />

    <div class="dst text-xs flex justify-between px-6">
      <div class="items-end grid text-xs font-medium text-bc/60">
        <Grow />

        <p>
          {{ ms.filter.patch }}
        </p>

        <p class="-mb-px">
          Winrate
        </p>
      </div>

      <p class="flex flex-col gap-1">
        <span class="mb-px opacity-60 font-medium">Absolute</span>

        <span class="text-7 font-bold dst flex text-bc">
          {{ bayesianItems[itemNum].winrate.toFixed(2) }}
          <icon
            name="ph:percent-bold"
            class="size-5" />
        </span>
      </p>

      <p class="flex flex-col gap-1">
        <span class="mb-px opacity-60 font-medium">Weighted</span>

        <span class="text-7 dst font-bold text-bc flex">
          {{ bayesianItems[itemNum].bayesianWinrate.toFixed(2) }}
          <icon
            name="ph:percent-bold"
            class="size-5" />
        </span>
      </p>
    </div>

    <!--   <NoDataOverlay v-if="!props.patchGames.length" /> -->
  </Field>
</template>
