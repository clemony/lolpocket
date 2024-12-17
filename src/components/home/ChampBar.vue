<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD:src/components/home/ChampBar.vue
import { externalTooltip } from '@/config/charts'
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccountStore } from '@stores/accountStore'
=======
<<<<<<< HEAD
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
import { externalTooltip } from '@/client/config/charts'
import { useGeneralStore } from '@/client/stores/generalStore'
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/ChampBar.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
import { externalTooltip } from '@/config/charts'
<<<<<<< HEAD
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
<<<<<<< HEAD
>>>>>>> be133e04 (update 8 files and delete 426 files)
=======
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
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
<<<<<<< HEAD
<<<<<<< HEAD
const as = useAccountStore()
=======
const gs = useGeneralStore()
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
<<<<<<< HEAD:src/components/home/ChampBar.vue
const as = useAccountStore()
=======
const gs = useGeneralStore()
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/ChampBar.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
const as = useAccountStore()
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
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
<<<<<<< HEAD
<<<<<<< HEAD
    return as.colorBlindMode ? '#99c4c8' : '#a3be8c'
=======
    return gs.colorBlindMode ? '#99c4c8' : '#a3be8c'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
    return as.colorBlindMode ? '#99c4c8' : '#a3be8c'
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
<<<<<<< HEAD:src/components/home/ChampBar.vue
    return as.colorBlindMode ? '#99c4c8' : '#a3be8c'
=======
    return gs.colorBlindMode ? '#99c4c8' : '#a3be8c'
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/ChampBar.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
    return as.colorBlindMode ? '#99c4c8' : '#a3be8c'
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
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
<<<<<<< HEAD
<<<<<<< HEAD
        class="relative -mt-1 flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
=======
        class="relative flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
        class="relative -mt-1 flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
<<<<<<< HEAD:src/components/home/ChampBar.vue
        class="relative -mt-1 flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
=======
        class="relative flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/ChampBar.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
        class="relative -mt-1 flex w-[90%] items-center justify-center overflow-hidden rounded-lg p-0">
>>>>>>> 621837bd (update 42 files and delete 17 files)
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
        <div class="h-7 w-full overflow-hidden rounded-lg">
            <Bar
                :data="chartData"
                :options="chartOptions"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> a59cb6f4 (update 42 files and delete 17 files)
<<<<<<< HEAD:src/components/home/ChampBar.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
                class="-mt-13 -ml-4.5 !h-50 w-31" />
=======
                class="mt-3 size-full scale-x-170 scale-y-500" />
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                class="-mt-13 -ml-4.5 !h-50 w-31" />
>>>>>>> 83f9266d (update 42 files and delete 17 files)
        </div>
    </div>
=======
                class="mt-3 size-full scale-x-170 scale-y-500" />
=======
                class="-mt-13 -ml-4.5 !h-50 w-31" />
>>>>>>> 621837bd (update 42 files and delete 17 files)
        </div>
    </div>
<<<<<<< HEAD
    <!--  <div class="rounded-md">
        <div class="flex h-6 w-full overflow-hidden rounded-md">
            <Tooltip :content="a + '% Win Rate'" :disabled="a >= 31">
                <div
                    class="text-1 bg-resolve/80 flex items-center justify-center p-2"
                    :class="{ '!bg-support': gs.colorBlindMode }"
                    :style="{
                        width: a + '%',
                    }">
                    <span class="font-medium" :class="{ hidden: a < 31 }">
                        {{ a + '%' }}
                    </span>
                </div>
            </Tooltip>
            <Tooltip :content="b + '% Loss Rate'" :disabled="b >= 31">
                <div
                    class="text-1 bg-domination/90 flex items-center justify-center p-2"
                    :style="{
                        width: b + '%',
                    }">
                    <span class="font-medium" :class="{ hidden: b < 31 }">
                        {{ b + '%' }}
                    </span>
                </div>
            </Tooltip>
        </div>
    </div> -->
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/ChampBar.vue
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
</template>
<style scoped></style>
