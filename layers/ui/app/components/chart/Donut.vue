<script setup lang="ts">
import type { EChartsOption, PieSeriesOption } from "echarts"
import VChart from "vue-echarts"

const {
  class: className,
  cutout = "80%",
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
const values = computed(() => data.datasets[0]?.data ?? [])
const total = computed(() => values.value.reduce((a, b) => a + b, 0))
const nonZeroCount = computed(() => values.value.filter((v) => v > 0).length)

const series = computed<PieSeriesOption>(() => ({
  type: "pie",
  endAngle: gauge ? 0 : 450,
  startAngle: gauge ? 180 : 90,
  radius: [cutout, "100%"],
  silent: tooltip === false,

  // Avoid artifacts for full/empty rings
  padAngle:
    nonZeroCount.value <= 1 ? 0
    : overlap ? -4
    : 2,
  itemStyle: {
    borderRadius: nonZeroCount.value <= 1 ? 0 : 100,
  },

  label: { show: false },
  labelLine: { show: false },

  data:
    total.value === 0 ?
      [{ name: "empty", value: 1, itemStyle: { color: "transparent" } }]
    : data.labels.map((label, i) => ({
        name: label,
        value: values.value[i],
        itemStyle: { color: data.datasets[0]?.backgroundColor?.[i] },
      })),
}))

const option = computed<EChartsOption>(() => ({
  series: [series.value],
  tooltip: {
    formatter: "{b}: {c}",
    show: tooltip,
    trigger: "item",
  },
}))
</script>

<template>
  <VChart :option="option" autoresize :class="cn(className)" />
</template>
