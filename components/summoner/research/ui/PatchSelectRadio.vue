<script lang="ts" setup>
const ans = useAnalysisStore()
const ds = useDataStore()


const modelValue = computed (() => {
return ans.patchSelect
})
console.log("💠 - modelValue:", modelValue)
</script>

<template>
  <RadioGroup v-model:model-value="ans.patchSelect" @update:model-value="e => ans.patchSelect = e" class="flex flex-col">

    <label class="flex gap-3 font-medium py-2 cursor-pointer">
    <CustomRadioItem :value="ds.currentPatch" :model-value="modelValue"/>

      {{ ds.currentPatch }}
      </label>
          <label class="flex gap-3 font-medium py-2 cursor-pointer">
    <CustomRadioItem :value="ans.previousPatch"  :model-value="modelValue"/>

      {{ ans.previousPatch }}
</label>
    <label class="flex gap-3 font-medium py-2 cursor-pointer">
   <CustomRadioItem  :value="ans.seasonTotals"  :model-value="modelValue"/>

      Season 2025
      </label>
  </RadioGroup>
</template>