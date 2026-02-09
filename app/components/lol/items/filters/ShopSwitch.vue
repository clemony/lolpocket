<script setup lang="ts">
const { class: className, label = true } = defineProps<{
  class?: HTMLAttributes["class"]
  label?: boolean
}>()
</script>

<template>
  <label :class="cn('flex cursor-pointer items-center gap-3', className)">
    <span v-if="label === true" class="font-semibold text-pc/90">
      {{ is().filters.purchasable ? "Purchasable" : "All Items" }}
    </span>

    <USwitch v-model:model-value="is().filters.purchasable" class="dst" />
  </label>
</template>
