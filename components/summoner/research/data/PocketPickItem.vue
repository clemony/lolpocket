<script lang="ts" setup>
const props = defineProps<{
  patchGames: any
  itemNum: number
  title?: string
}>()
const ans = useAnalysisStore()
const ds = useDataStore()

const patchGames = computed(() => ans.userMatchData.filter(g => g.patch === ans.patchSelect))
const { bayesianItems } = usePatchItems(patchGames)

const mvi = computed(() => {
  if (!bayesianItems.value.length)
    return null
  return bayesianItems.value[props.itemNum]
})
// console.log('💠 - mvi - mvi:', mvi)

const item = computed (() => {
  if (!mvi.value)
    return
  return ds.items.find(i => i.name == mvi.value.item.name)
})

const classObject = computedAsync (() => {
  if (!mvi.value)
    return
  const itemColor = getGradeColor(mvi.value.bayesianWinrate)
  console.log('💠 - classObject - itemColor:', itemColor)
  return `border-${itemColor}-b100/60 shadow-${itemColor}-b100/60 inset-shadow-${itemColor}-w600 bg-${itemColor}/70`
})
// console.log('💠 - classObject - classObject:', classObject)
</script>

<template>
  <Field v-if="mvi" class="bg-b1 pb-6 px-0 pt-0 w-full flex border-shadow  items-center gap-5" :title="props.title">
    <div class="w-full pt-8 items-center px-5 gap-5 dst flex  relative">
      <div class="rounded-full size-16 shadow-sm drop-shadow-sm">
        <PopoverItem :item="item" class="size-16 rounded-full overflow-hidden" />
      </div>

      <div class=" text-bc grow">
        <p class="tracking-tight text-5 font-semibold pb-1">
          {{ mvi.item?.name }}
        </p>

        <p class="text-3 font-medium tracking-tight text-bc/60">
          {{ mvi.games }} Total Matches
        </p>
        <p class="text-3 font-medium text-bc/60">
          {{ mvi.win }}W {{ mvi.loss }}L
        </p>
      </div>

      <div class=" badge flex rounded-xl  font-semibold badge-xl  self-start justify-self-end drop-shadow-xs shadow-xs   inset-shadow-sm" :class=" classObject">
        <span class="text-4  dst font-mono text-[#FFF] tracking-wide">
          {{ getGrade(mvi.bayesianWinrate) }}
        </span>
      </div>
    </div>
    <Separator />

    <div class="dst text-2 flex justify-between px-6">
      <div class="items-end grid text-2 font-medium text-bc/60">
        <Grow />
        <p>
          {{ ans.patchSelect }}
        </p>
        <p class="-mb-px">
          Winrate
        </p>
      </div>
      <p class="flex flex-col  gap-1 ">
        <span class="mb-px  opacity-60 font-medium">
          Absolute
        </span>
        <span class="text-7 font-bold dst flex text-bc">
          {{ mvi.winrate.toFixed(2) }}
          <icon name="ph:percent-bold" class="size-5" />
        </span>
      </p>

      <p class="flex flex-col gap-1 ">
        <span class="mb-px  opacity-60 font-medium">Weighted</span>
        <span class="text-7 dst font-bold text-bc flex">
          {{ mvi.bayesianWinrate.toFixed(2) }}
          <icon name="ph:percent-bold" class="size-5" />
        </span>
      </p>
    </div>

    <NoDataOverlay v-if="!props.patchGames.length" />
  </Field>
</template>