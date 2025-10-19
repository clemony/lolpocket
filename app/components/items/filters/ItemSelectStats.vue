<script setup lang="ts">
</script>

<template>
  <Select
    v-model:model-value="is().filters.stats"
    :multiple="true">
    <VarSelectTrigger
      :variant="is().filters.stats.length ? 'neutral' : 'outline'"
      size="sq-lg"
      class="indicator relative open:not-on:!bg-tint-b2/40  open:inset-shadow-sm">
      <StatusIndicator
        v-if="is().filters.stats.length"
        color="ah"
        :class="cn('transition-opacity absolute', { 'animate-in fade-in zoom-in': is().filters.stats.length, 'animate-out zoom-out fade-out': !is().filters.stats.length })" />
      <icon name="bar-chart" />
    </VarSelectTrigger>
    <SelectContent
      class=" w-64 top-[calc(var(--reka-select-trigger-height)+2px)] -translate-x-52">
      <ItemStatsList icons />
    </SelectContent>
  </Select>
</template>