<script lang="ts" setup>
const ms = useMatchStore()
console.log('💠 - ms:', ms.af.patch)
const ds = useDataStore()
</script>

<template>
  <div class="w-full overflow-hidden">
  <NumberField v-model:model-value="ms.af.patch" class="flex  h-28 w-full rounded-lg" :min="25.01" :max="ds.currentPatch" :step="0.01">
    <NumberFieldDecrement class="*:size-6 max-w-10  shrink-0 relative h-full place-items-center grid">
      <icon name="left-sm" class="size-6 dst" />
    </NumberFieldDecrement>
    <NumberFieldContent class="size-full grow">
      <NumberFieldInput class="text-10 dst font-bold h-full w-full inset-shadow-none shadow-none border-0" />
    </NumberFieldContent>
    <NumberFieldIncrement class=" max-w-10 shrink-0 relative  size-full place-items-center grid">
      <icon name="right-sm" class="size-6 dst" />
    </NumberFieldIncrement>
  </NumberField>
  </div>
</template>