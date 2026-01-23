<script lang="ts" setup>
console.log('💠 - ms:', ms().filter.patch)
</script>

<template>
  <div class="w-full overflow-hidden">
    <NumberField
      v-model:model-value="ms().filter.patch"
      class="flex h-28 w-full rounded-lg"
      :min="25.01"
      :max="ds().currentPatch"
      :step="0.01">
      <NumberFieldDecrement
        class="
          relative grid h-full max-w-10 shrink-0 place-items-center *:size-6
        ">
        <icon
          name="left"
          class="dst size-6" />
      </NumberFieldDecrement>

      <NumberFieldContent class="size-full grow">
        <NumberFieldInput
          class="
            text-xxs dst size-full border-0 font-bold
            shadow-none inset-shadow-none
          " />
      </NumberFieldContent>

      <NumberFieldIncrement
        class="relative grid size-full max-w-10 shrink-0 place-items-center">
        <icon
          name="right"
          class="dst size-6" />
      </NumberFieldIncrement>
    </NumberField>
  </div>
</template>
