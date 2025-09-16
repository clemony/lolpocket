<script lang="ts" setup>
const ms = useMatchStore()
console.log('💠 - ms:', ms.filter.patch)
const ds = useDataStore()
</script>

<template>
  <div class="w-full overflow-hidden">
    <NumberField
      v-model:model-value="ms.filter.patch"
      class="flex h-28 w-full rounded-lg"
      :min="25.01"
      :max="ds.currentPatch"
      :step="0.01">
      <NumberFieldDecrement
        class="*:size-6 max-w-10 shrink-0 relative h-full place-items-center grid">
        <icon
          name="left"
          class="size-6 dst" />
      </NumberFieldDecrement>

      <NumberFieldContent class="size-full grow">
        <NumberFieldInput
          class="text-xxs0 dst font-bold h-full w-full inset-shadow-none shadow-none border-0" />
      </NumberFieldContent>

      <NumberFieldIncrement
        class="max-w-10 shrink-0 relative size-full place-items-center grid">
        <icon
          name="right"
          class="size-6 dst" />
      </NumberFieldIncrement>
    </NumberField>
  </div>
</template>
