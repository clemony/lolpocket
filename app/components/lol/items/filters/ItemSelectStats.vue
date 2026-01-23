<script setup lang="ts"></script>

<template>
  <Select
    v-model:model-value="is().filters.stats"
    :multiple="true">
    <VarSelectTrigger
      :variant="is().filters.stats.length ? 'neutral' : 'outline'"
      size="sq-12"
      class="indicator open:not-on:bg-tint-b2/40! relative open:inset-shadow-sm">
      <StatusIndicator
        v-if="is().filters.stats.length"
        color="ah"
        :class="
          cn('absolute transition-opacity', {
            'animate-in fade-in zoom-in': is().filters.stats.length,
            'animate-out zoom-out fade-out': !is().filters.stats.length,
          })
        " />
      <icon name="bar-chart" />
    </VarSelectTrigger>
    <SelectContent
      class="
        top-[calc(var(--reka-select-trigger-height)+2px)] w-74 -translate-x-63
      ">
      <ItemStatsList
        class="flex-row *:w-fit"
        icons
        variant="btn"
        labels />
    </SelectContent>
  </Select>
</template>
