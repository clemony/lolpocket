<script lang="ts" setup>
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'vue-chartjs'

const props = defineProps<{
  data: any
  options?: any
}>()

ChartJS.register(Title, Tooltip, LineElement, CategoryScale, PointElement, LinearScale)

const styles = getComputedStyle(document.documentElement)

const data = computed (() => {
  return props.data
})

const options = {
  responsive: true,
  clip: 10,
  maintainAspectRatio: false,
  layout: {
    padding: {
      bottom: props.options.layout.padding.bottom,
    },
  },
  elements: {
    point: {
      hitRadius: 6,
      radius: 2,
      backgroundColor: `${styles.getPropertyValue('--color-n1')}`,
      borderColor: `${styles.getPropertyValue('--color-n1')}`,
      borderWidth: 1.5,
      hoverRadius: 4,
    },
    line: {
      borderColor: `${styles.getPropertyValue('--color-n1')}`,
      borderWidth: 1.5,
      tension: 0.35,
      cubicInterpolationMode: 'default' as const,
    },
  },

  plugins: {
    tooltip: {
      titleMarginBottom: 0,
      titleSpacing: 0,
      bodySpacing: 0,
      displayColors: false,
      intersect: false,
      enabled: true,
      callbacks: props.options.plugins.tooltip.callbacks,
    },
  },
}
</script>

<template>
  <Line
    :data="data"
    :options="options"
    class="z-1" />
</template>