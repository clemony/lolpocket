<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import { externalTooltip } from '@/config/charts'
import { Chart, Tooltip, DoughnutController, ArcElement } from 'chart.js'
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { HTMLAttributes } from 'vue'
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import type { HTMLAttributes } from 'vue'
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
import type { HTMLAttributes } from 'vue'
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)

Chart.register(Tooltip, DoughnutController, ArcElement)

const props = defineProps<{
    labels: Array<string>
    datasets: any
    colors: Array<string>
    aria: string
    overlap?: boolean
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
    class?: HTMLAttributes['class']
    type?: string
    cutout?: string
=======
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
    class?: HTMLAttributes['class']
    type?: string
    cutout?: string
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
}>()

const chartData = {
    type: 'doughnut',
    labels: props.labels,
    datasets: props.datasets,
    options: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        spacing: props.type == 'gauge' ? -4 : 2,
=======
        spacing: -8,
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
        spacing: props.type == 'gauge' ? -4 : 2,
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
        spacing: props.type == 'gauge' ? -4 : 2,
=======
        spacing: -8,
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
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
<<<<<<< HEAD
<<<<<<< HEAD
        cutout: props.cutout ? props.cutout : '80%',
=======
        cutout: '80%',
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
        cutout: props.cutout ? props.cutout : '80%',
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
        cutout: props.cutout ? props.cutout : '80%',
=======
        cutout: '80%',
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
        role="img"
        :class="props.class" />
=======
        role="img" />
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
        role="img"
        :class="props.class" />
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
</template>
<style scoped></style>
