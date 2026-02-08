<script lang="ts" setup>
console.log("💠 - ms:", ms().filter.patch)
</script>

<template>
  <div class="w-full overflow-hidden">
    <NumberField
      v-model:model-value="ms().filter.patch"
      class="flex h-28 w-full rounded-lg"
      :min="25.01"
      :max="parseInt(patchIndex[0])"
      :step="0.01">
      <NumberFieldDecrement
        class="relative grid h-full max-w-10 shrink-0 place-items-center *:size-6">
        <icon class="size-6 dst" name="left" />
      </NumberFieldDecrement>

      <NumberFieldContent class="size-full grow">
        <NumberFieldInput
          class="size-full border-0 text-2xs font-bold shadow-none inset-shadow-none dst" />
      </NumberFieldContent>

      <NumberFieldIncrement
        class="relative grid size-full max-w-10 shrink-0 place-items-center">
        <icon class="size-6 dst" name="right" />
      </NumberFieldIncrement>
    </NumberField>
  </div>
</template>
