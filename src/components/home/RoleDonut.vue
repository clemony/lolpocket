<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
<<<<<<< HEAD:src/components/home/RoleDonut.vue
import { summoner } from '@data/playerData'

const hexColors = {
=======
import { summoner } from '@/client/data/playerData'
import { Doughnut } from 'vue-chartjs'
import { externalTooltip } from '@/client/config/charts'
import {
    Chart as ChartJS,
    Tooltip,
    DoughnutController,
    ArcElement,
} from 'chart.js'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import 'chartjs-plugin-style'
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
=======
>>>>>>> 56807d34 (update 38 files and delete 54 files)

ChartJS.register(Tooltip, DoughnutController, ArcElement)

const colors = {
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/RoleDonut.vue
<<<<<<< HEAD
=======
import { summoner } from '@data/playerData'

const hexColors = {
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
    support: '#99c4c8',
    bottom: '#ebcb8b',
    mid: '#be86b5',
    jungle: '#a3be8c',
    top: '#e0746b',
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
<<<<<<< HEAD:src/components/home/RoleDonut.vue
/* function gradient(context) {
=======
function gradient(context) {
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/RoleDonut.vue
<<<<<<< HEAD
=======
/* function gradient(context) {
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
    const index = context.dataIndex
    console.log('💠 - gradient - index:', index)
    const value = context.dataset.data[index]
    console.log('💠 - gradient - value:', value)

    let g = context('2d').createConicGradient(0, 200, 200)
    g.addColorStop(0, 'red')
    g.addColorStop(0.25, 'orange')
    g.addColorStop(0.5, 'yellow')
    g.addColorStop(0.75, 'green')
    g.addColorStop(1, 'blue')
    return g
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/components/home/RoleDonut.vue
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
<<<<<<< HEAD:src/components/home/RoleDonut.vue
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
} */

const labels = ['Support', 'Bottom', 'Mid', 'Jungle', 'Top']
const datasets = [
    {
        data: [
            summoner.role.support.percent,
            summoner.role.bottom.percent,
            summoner.role.mid.percent,
            summoner.role.jungle.percent,
            summoner.role.top.percent,
        ],
    },
]
const colors = [
    hexColors.support,
    hexColors.bottom,
    hexColors.mid,
    hexColors.jungle,
    hexColors.top,
]
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
=======
}

const chartData = {
    type: 'doughnut',
    labels: ['Support', 'Bottom', 'Mid', 'Jungle', 'Top'],
    datasets: [
        {
            data: [
                summoner.role.support.percent,
                summoner.role.bottom.percent,
                summoner.role.mid.percent,
                summoner.role.jungle.percent,
                summoner.role.top.percent,
            ],
        },
    ],

    options: {
        plugins: {
            tooltip: {
                enabled: false,
                external: externalTooltip,
            },
        },
        elements: {
            arc: {
                backgroundColor: [
                    colors.support,
                    colors.bottom,
                    colors.mid,
                    colors.jungle,
                    colors.top,
                ],
                hoverOffset: 1,
            },
        },
        cutout: '75%',
    },
}
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/RoleDonut.vue
<<<<<<< HEAD
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)

const chartRef = document.getElementById('roleChart') as HTMLCanvasElement

const mostRoled = computed(() => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
<<<<<<< HEAD:src/components/home/RoleDonut.vue
    /*     const labelValuePairs = chartData.labels.map((label, index) => ({
=======
    const labelValuePairs = chartData.labels.map((label, index) => ({
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/RoleDonut.vue
<<<<<<< HEAD
=======
    /*     const labelValuePairs = chartData.labels.map((label, index) => ({
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
        label,
        value: chartData.datasets[0].data[index],
    }))
    const highestPair = labelValuePairs.reduce((max, current) =>
        current.value > max.value ? current : max
    )
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
<<<<<<< HEAD:src/components/home/RoleDonut.vue
    return highestPair.label */
    return 'Support'
=======
    return highestPair.label
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/RoleDonut.vue
<<<<<<< HEAD
=======
    return highestPair.label */
    return 'Support'
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
})
</script>
<template>
    <div class="relative size-22">
        <div class="absolute top-7 left-7">
            <SupportSvg
                v-if="mostRoled == 'Support'"
                class="drop-shadow-neutral/70 size-8 drop-shadow-xs"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/components/home/RoleDonut.vue
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
<<<<<<< HEAD:src/components/home/RoleDonut.vue
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
                :style="{ color: hexColors.support }" />
            <BottomSvg
                v-if="mostRoled == 'Bottom'"
                class="drop-shadow-neutral/70 text-gold size-8 drop-shadow-xs"
                :style="{ color: hexColors.bottom }" />
            <MidSvg
                v-if="mostRoled == 'Mid'"
                class="drop-shadow-neutral/70 size-8 text-purple-400 drop-shadow-xs"
                :style="{ color: hexColors.mid }" />
            <JungleSvg
                v-if="mostRoled == 'Jungle'"
                class="drop-shadow-neutral/70 text-resolve size-8 drop-shadow-xs"
                :style="{ color: hexColors.jungle }" />
            <TopSvg
                v-if="mostRoled == 'Top'"
                class="drop-shadow-neutral/70 text-grandmaster size-8 drop-shadow-xs"
                :style="{ color: hexColors.top }" />
        </div>

        <Donut
            :datasets="datasets"
            :colors="colors"
            :labels="labels"
            aria="Playrate by role in percentage" />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
=======
                :style="{ color: colors.support }" />
            <BottomSvg
                v-if="mostRoled == 'Bottom'"
                class="drop-shadow-neutral/70 text-gold size-8 drop-shadow-xs"
                :style="{ color: colors.bottom }" />
            <MidSvg
                v-if="mostRoled == 'Mid'"
                class="drop-shadow-neutral/70 size-8 text-purple-400 drop-shadow-xs"
                :style="{ color: colors.mid }" />
            <JungleSvg
                v-if="mostRoled == 'Jungle'"
                class="drop-shadow-neutral/70 text-resolve size-8 drop-shadow-xs"
                :style="{ color: colors.jungle }" />
            <TopSvg
                v-if="mostRoled == 'Top'"
                class="drop-shadow-neutral/70 text-grandmaster size-8 drop-shadow-xs"
                :style="{ color: colors.top }" />
        </div>

        <Doughnut
            :data="chartData"
            :options="chartData.options"
            id="roleChart"
            ref="chart"
            aria-label="Percentage of recent games by role"
            role="img" />
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/RoleDonut.vue
<<<<<<< HEAD
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
=======
>>>>>>> 44bf1088 (update 38 files and delete 54 files)
    </div>
</template>
<style></style>
