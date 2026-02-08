<script setup lang="ts">
import type { EChartsType } from 'echarts'
import VChart from 'vue-echarts'
import type { AllyDataPoint } from '.'
import { buildAllyChart } from '.'

const { colorMap, points } = defineProps<{
  points: AllyDataPoint[]
  colorMap: Map<string, string>
}>()

const { chartMode, option } = buildAllyChart(points, colorMap)
const chart = useTemplateRef<EChartsType>('chart')

function onMagicTypeChanged(e: { currentType: string }) {
  chartMode.value = e.currentType === 'line' ? 'bubble' : 'heatmap'
  console.log('🥸 - chartMode:', chartMode)
  console.log('🥸 - options:', option)
}
</script>

<template>
  <Card class="grid w-fit gap-8 px-8 pt-10 pb-8">
    <div
      ref="chart"
      class="h-140 w-270">
      <VChart
        class="size-full"
        theme="theme"
        :option
        autoresize
        @magictypechanged="onMagicTypeChanged" />
    </div>
  </Card>
</template>
