<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { externalTooltip } from '@/config/charts'
import { Chart, Tooltip, DoughnutController, ArcElement } from 'chart.js'

Chart.register(Tooltip, DoughnutController, ArcElement)

const props = defineProps<{
    labels: Array<string>
    datasets: any
    colors: Array<string>
    aria: string
    overlap?: boolean
}>()

const chartData = {
    type: 'doughnut',
    labels: props.labels,
    datasets: props.datasets,
    options: {
        spacing: -8,
        plugins: {
            tooltip: {
                enabled: false,
                external: externalTooltip,
            },
        },
        elements: {
            arc: {
                borderColor: 'rgba(0,0,0,0)',
                backgroundColor: props.colors,
                hoverOffset: 1,
                roundedCornersFor: props.overlap ? 0 : null,
            },
        },
        cutout: '80%',
    },
}
</script>
<template>
    <Doughnut
        :data="chartData"
        :options="chartData.options"
        ref="chart"
        :aria-label="props.aria"
        role="img" />
</template>
<style scoped></style>
