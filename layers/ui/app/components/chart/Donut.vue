<script setup lang="ts">
import type { EChartsOption, PieSeriesOption } from 'echarts'
import VChart from 'vue-echarts'

const {
  class: className,
  cutout = '80%',
  data,
  gauge = false,
  overlap = false,
  tooltip = false,
} = defineProps<{
  data: {
    labels: string[]
    datasets: {
      data: number[]
      backgroundColor?: string[]
    }[]
  }
  class?: string
  cutout?: string
  gauge?: boolean
  tooltip?: boolean
  overlap?: boolean
}>()

const series = computed<PieSeriesOption>(() => ({
  type: 'pie',

  endAngle: gauge ? 0 : 450,
  // donut
  radius: [cutout, '100%'],
  // gauge mode (half donut)
  startAngle: gauge ? 180 : 90,

  avoidLabelOverlap: true,
  silent: tooltip === false,

  itemStyle: {
    borderRadius: 100,
  },
  padAngle: overlap ? 0 : 2,

  emphasis: {
    scale: true,
    scaleSize: 2,
  },

  bottom: 1,
  left: 1,
  right: 1,
  top: 1,

  data: data.labels.map((label, i) => ({
    name: label,
    itemStyle: {
      color: data.datasets[0].backgroundColor?.[i],
    },
    value: data.datasets[0].data[i],
  })),
}))

const option = computed<EChartsOption>(() => ({
  series: [series.value],
  tooltip: {
    formatter: '{b}: {c}',
    show: tooltip,
    trigger: 'item',
  },
}))
</script>

<template>
  <VChart
    :option="option"
    autoresize
    :class="cn(className)"
  />
</template>