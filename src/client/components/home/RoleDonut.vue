<script setup lang="ts">
import { summoner } from '@/client/data/playerData'
import { Doughnut } from 'vue-chartjs'
import { externalTooltip } from '@/client/config/charts'
import {
    Chart as ChartJS,
    Tooltip,
    DoughnutController,
    ArcElement,
} from 'chart.js'
import 'chartjs-plugin-style'

ChartJS.register(Tooltip, DoughnutController, ArcElement)

const colors = {
    support: '#99c4c8',
    bottom: '#ebcb8b',
    mid: '#be86b5',
    jungle: '#a3be8c',
    top: '#e0746b',
}

function gradient(context) {
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

const chartRef = document.getElementById('roleChart') as HTMLCanvasElement

const mostRoled = computed(() => {
    const labelValuePairs = chartData.labels.map((label, index) => ({
        label,
        value: chartData.datasets[0].data[index],
    }))
    const highestPair = labelValuePairs.reduce((max, current) =>
        current.value > max.value ? current : max
    )
    return highestPair.label
})
</script>
<template>
    <div class="relative size-22">
        <div class="absolute top-7 left-7">
            <SupportSvg
                v-if="mostRoled == 'Support'"
                class="drop-shadow-neutral/70 size-8 drop-shadow-xs"
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
    </div>
</template>
<style></style>
