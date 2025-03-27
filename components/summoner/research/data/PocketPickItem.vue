<script lang="ts" setup>
const props = defineProps<{
  patchGames: any
}>()
const ans = useAnalysisStore()
const patchGames = computed(() => ans.userMatchData.filter(g => g.patch === ans.patchSelect))
const { bayesianItems } = usePatchItems(patchGames)

const mvi = computed(() => {
  if (!bayesianItems.value.length)
    return null
  return bayesianItems.value[0] // ✅ Get the top item
})
</script>

<template>

    <Field v-if=" mvi" class="bg-b1 pb-6 px-5 pt-8 w-full flex flex-col items-center gap-5" title="Pocket Pick">
      <div class="w-full items-center flex-col gap-3 dst flex">
      <div class="avatar  online shadow-warm-2 rounded-full size-18">
        <div class="size-18 rounded-full">
          <img :src="`/img/item/${mvi.item?.id}.webp`" class="" />
        </div>
      </div>
      <div class=" text-bc tracking-tight text-5 font-semibold">
        {{ mvi.item?.name }}
      </div>

</div>
      <Separator  />
      
      <div class="dst text-2 flex justify-center">
        <p class="flex flex-col  gap-1 items-end">
          <span class="mb-px  opacity-60 font-medium">
            Absolute
          </span>
          <span class="text-7 font-bold flex text-bc">
            {{ mvi.winrate.toFixed(2) }}
          <icon name="ph:percent-bold" class="size-5" />
        </span>
          <span class="mb-px  opacity-60 font-medium">Winrate</span>
        </p>
      </div>

      <Separator  />

     <div class="dst text-2 flex justify-center">
        <p class="flex flex-col gap-1 items-end">
          <span class="mb-px  opacity-60 font-medium">Weighted</span>
          <span class="text-7 font-bold text-bc flex">
             {{ mvi.bayesianWinrate.toFixed(2) }}
          <icon name="ph:percent-bold" class="size-5" />
            </span>
          <span class="mb-px  opacity-60 font-medium">
            Winrate
          </span>
        </p>

      </div>

      <NoDataOverlay v-if="!props.patchGames.length" />
    </Field>

</template>