<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { externalTooltip } from '@/config/charts'
import { Chart, Tooltip, DoughnutController, ArcElement } from 'chart.js'
<<<<<<< HEAD
import type { HTMLAttributes } from 'vue'
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)

Chart.register(Tooltip, DoughnutController, ArcElement)

const props = defineProps<{
    labels: Array<string>
    datasets: any
    colors: Array<string>
    aria: string
    overlap?: boolean
<<<<<<< HEAD
    class?: HTMLAttributes['class']
    type?: string
    cutout?: string
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
}>()

const chartData = {
    type: 'doughnut',
    labels: props.labels,
    datasets: props.datasets,
    options: {
<<<<<<< HEAD
        spacing: props.type == 'gauge' ? -4 : 2,
=======
        spacing: -8,
>>>>>>> 4634f11e (update 8 files and delete 426 files)
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
<<<<<<< HEAD
        cutout: props.cutout ? props.cutout : '80%',
=======
        cutout: '80%',
>>>>>>> 4634f11e (update 8 files and delete 426 files)
    },
}
</script>
<template>
    <Doughnut
        :data="chartData"
        :options="chartData.options"
        ref="chart"
        :aria-label="props.aria"
<<<<<<< HEAD
        role="img"
        :class="props.class" />
=======
        role="img" />
>>>>>>> 4634f11e (update 8 files and delete 426 files)
</template>
<style scoped></style>
