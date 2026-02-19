<script setup lang="ts">
import VChart from "vue-echarts"
import type { AllyDataPoint } from "."
import { buildAllyChart } from "."

const { colorMap, points } = defineProps<{
  points: AllyDataPoint[]
  colorMap: Map<string, string>
}>()

const { option } = buildAllyChart(points, colorMap)
</script>

<template>
  <UCard class="grid w-fit gap-8 px-8 pt-10 pb-8">
    <div ref="chart" class="h-140 w-270">
      <VChart class="size-full" theme="theme" :option autoresize />
    </div>
  </UCard>
</template>
