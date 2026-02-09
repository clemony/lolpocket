<script lang="ts" setup>
import type { BarSeriesOption, EChartsOption } from "echarts"
import VChart from "vue-echarts"

const props = defineProps<{
  data: {
    labels: string[]
    datasets: {
      data: number[]
      backgroundColor?: string[] | string
    }[]
  }
  chartId?: string
}>()

const styles = getComputedStyle(document.documentElement)

const series = computed<BarSeriesOption>(() => {
  const dataset = props.data.datasets?.[0]
  const fallbackColor = styles.getPropertyValue("--colorneutral")
  return {
    type: "bar",
    data: dataset?.data ?? [],
    barWidth: 32,
    barMaxWidth: 32,
    barMinHeight: 4,
    itemStyle: {
      borderRadius: 4,
      color: (params) => {
        if (Array.isArray(dataset?.backgroundColor)) {
          return dataset?.backgroundColor?.[params.dataIndex] ?? fallbackColor
        }
        return dataset?.backgroundColor ?? fallbackColor
      },
    },
  }
})

const option = computed<EChartsOption>(() => ({
  color: [styles.getPropertyValue("--colorneutral")],
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    containLabel: true,
  },
  tooltip: {
    show: true,
    trigger: "item",
    padding: 12,
    backgroundColor: styles.getPropertyValue("--colorneutral"),
    textStyle: {
      color: styles.getPropertyValue("--color-p2"),
      fontFamily: styles.getPropertyValue("--font-sans"),
      fontSize: 16,
      fontWeight: 400,
    },
    formatter: (params) => {
      const value =
        Array.isArray(params) ?
          Number(params[0]?.value ?? 0)
        : Number(params.value ?? 0)
      return `${value.toFixed(2)}% winrate`
    },
  },
  xAxis: {
    type: "category",
    data: props.data.labels,
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: styles.getPropertyValue("--color-p2"),
      },
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    min: 0,
    max: 100,
    interval: 20,
    axisLabel: {
      show: true,
      padding: 12,
      formatter: "{value}%",
      fontSize: 16,
      fontFamily: styles.getPropertyValue("--font-sans"),
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        color: styles.getPropertyValue("--color-p2"),
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: styles.getPropertyValue("--color-p2"),
      },
    },
  },
  series: [series.value],
}))
</script>

<template>
  <VChart :id="props.chartId" :option="option" autoresize />
</template>
