<script setup lang="ts"></script>

<template>
  <Select
    v-model:model-value="is().filters.stats"
    :multiple="true">
    <VarSelectTrigger
      class="indicator relative open:inset-shadow-sm open:not-on:bg-tint-p2/40!"
      square
      size="lg">
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
      class="top-[calc(var(--reka-select-trigger-height)+2px)] w-74 -translate-x-63">
      <ItemStatsList
        class="flex-row *:w-fit"
        icons
        labels />
    </SelectContent>
  </Select>
</template>
