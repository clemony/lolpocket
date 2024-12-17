<script setup lang="ts">
import { externalTooltip } from '@/config/charts'
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccountStore } from '@stores/accountStore'
=======
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
import { Bar } from 'vue-chartjs'
import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    ChartConfiguration,
    ChartData,
    ChartOptions,
} from 'chart.js'
import ChartjsPluginStacked100 from 'chartjs-plugin-stacked100'

Chart.register(
    ChartjsPluginStacked100,
    BarElement,
    BarController,
    CategoryScale,
    LinearScale
)

<<<<<<< HEAD
<<<<<<< HEAD
const as = useAccountStore()
=======
const gs = useGeneralStore()
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
const props = defineProps<{
    champion: any
}>()

const a = computed(() => {
    return (props.champion.wins / props.champion.games) * 100
})
const b = computed(() => {
    return 100 - a.value
})

const color1 = computed(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    return as.colorBlindMode ? '#99c4c8' : '#a3be8c'
=======
    return gs.colorBlindMode ? '#99c4c8' : '#a3be8c'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
    return as.colorBlindMode ? '#99c4c8' : '#a3be8c'
>>>>>>> 404a531d (update 84 files and delete 4 files)
})

const chartData: ChartData<'bar'> = {
    labels: [''],
    datasets: [
        {
            backgroundColor: [color1.value],
            hoverBorderColor: [color1.value],

            borderColor: [color1.value],
            data: [a.value],
        },
        {
            backgroundColor: ['oklch(60.61% 0.1206 15.34)'],
            hoverBorderColor: ['oklch(60.61% 0.1206 15.34)'],

            borderColor: ['oklch(60.61% 0.1206 15.34)'],
            data: [b.value],
        },
    ],
}
const chartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    responsive: false,
    datasets: {
        bar: {
            barPercentage: 1,
            hoverBorderWidth: 1,
            borderColor: 'transparent',
            borderSkipped: true,

            xAxisID: '',
            yAxisID: '',
            pointStyle: false,
            borderRadius: 6,
        },
    },
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                display: false,
            },
        },
    },
    plugins: {
        tooltip: {
            enabled: false,
            external: externalTooltip,
        },
        legend: {
            display: false,
        },
        stacked100: {
            enable: true,
            replaceTooltipLabel: false,
            precision: 3,
        },
    },
}
</script>
<template>
    <div
<<<<<<< HEAD
<<<<<<< HEAD
        class="relative -mt-1 flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
=======
        class="relative flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
        class="relative -mt-1 flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
>>>>>>> 83f9266d (update 42 files and delete 17 files)
        <div class="h-7 w-full overflow-hidden rounded-lg">
            <Bar
                :data="chartData"
                :options="chartOptions"
<<<<<<< HEAD
<<<<<<< HEAD
                class="-mt-13 -ml-4.5 !h-50 w-31" />
=======
                class="mt-3 size-full scale-x-170 scale-y-500" />
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                class="-mt-13 -ml-4.5 !h-50 w-31" />
>>>>>>> 83f9266d (update 42 files and delete 17 files)
        </div>
    </div>
</template>
<style scoped></style>
