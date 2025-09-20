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

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale
)

const styles = getComputedStyle(document.documentElement)

const data = computed(() => {
  return props.data
})

const options = {
  clip: 10,
  elements: {
    line: {
      borderWidth: 1.5,
      borderColor: `${styles.getPropertyValue('--colorneutral')}`,
      cubicInterpolationMode: 'default' as const,
      tension: 0.35,
    },
    point: {
      borderWidth: 1.5,
      backgroundColor: `${styles.getPropertyValue('--colorneutral')}`,
      borderColor: `${styles.getPropertyValue('--colorneutral')}`,
      hitRadius: 6,
      hoverRadius: 4,
      radius: 2,
    },
  },
  layout: {
    padding: {
      bottom: props.options.layout.padding.bottom,
    },
  },
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      titleMarginBottom: 0,
      titleSpacing: 0,
      bodySpacing: 0,
      callbacks: props.options.plugins.tooltip.callbacks,
      displayColors: false,
      enabled: true,
      intersect: false,
    },
  },
  responsive: true,
}
</script>

<template>
  <Line
    :data="data"
    :options="options"
    class="z-1" />
</template>
