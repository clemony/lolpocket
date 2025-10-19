<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']

}>()
</script>

<template>
  <label :class="cn('flex items-center cursor-pointer gap-3', className)">
    <span class="text-bc/90 font-semibold">
      {{ is().filters.purchasable ? "Purchasable" : "All Items" }}
    </span>

    <Switch
      v-model:model-value="is().filters.purchasable"
      class="dst"></Switch>
  </label>
</template>