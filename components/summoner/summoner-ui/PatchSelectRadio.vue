<script lang="ts" setup>
const ms = useMatchStore()
const ds = useDataStore()


const modelValue = computed (() => {
return ms.patchSelect
})
console.log("💠 - modelValue:", modelValue)
</script>

<template>
  <RadioGroup v-model:model-value="ms.patchSelect" @update:model-value="e => ms.patchSelect = e" class="flex flex-col">

    <label class="flex gap-3 font-medium py-2 cursor-pointer">
    <CustomRadioItem :value="ds.currentPatch" :model-value="modelValue"/>

      {{ ds.currentPatch }}
      </label>
<!--           <label class="flex gap-3 font-medium py-2 cursor-pointer">
    <CustomRadioItem :value="ms.previousPatch"  :model-value="modelValue"/>

      {{ ms.previousPatch }}
</label> -->

    
          <label v-for="patch in ms.previousPatch" :key="patch" class="flex gap-3 font-medium py-2 cursor-pointer">


   <CustomRadioItem :value="patch"  :model-value="modelValue"/>

      {{patch }}
          </label>
    <label class="flex gap-3 font-medium py-2 cursor-pointer">
   <CustomRadioItem  :value="ms.seasonTotals"  :model-value="modelValue"/>

      Season 2025
      </label>
  </RadioGroup>
</template>