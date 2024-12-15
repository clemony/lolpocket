<script setup lang="ts">
import { summoner } from '@/client/data/playerData'
import { useGeneralStore } from '@/client/stores/generalStore'
const gs = useGeneralStore()

import { Doughnut } from 'vue-chartjs'
import { externalTooltip } from '@/client/config/charts'
import {
    Chart as ChartJS,
    Tooltip,
    DoughnutController,
    ArcElement,
} from 'chart.js'

ChartJS.register(Tooltip, DoughnutController, ArcElement)

const recentWinrate = ref(55)
const recentMatchNum = ref(20)

const color1 = computed(() => {
    return gs.colorBlindMode ? '#99c4c8' : '#a3be8c'
})

const chartData = {
    type: 'doughnut',
    labels: ['Win', 'Loss'],
    datasets: [
        {
            data: [recentWinrate.value, 100 - recentWinrate.value],
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
                backgroundColor: [color1.value, 'oklch(60.61% 0.1206 15.34)'],
                hoverOffset: 1,
            },
        },
        cutout: '75%',
    },
}
</script>
<template>
    <div class="flex h-22 items-center pr-10" ref="matches">
        <div class="relative flex size-22 grow items-center gap-4">
            <Doughnut
                :data="chartData"
                :options="chartData.options"
                ref="chart"
                aria-label="Recent winrate in percentage"
                role="img" />
            <span class="text-bc absolute left-7 font-medium">
                {{ recentWinrate }}%
            </span>

            <h5>
                Winrate
                <br />
                Last {{ recentMatchNum }} Games
            </h5>
        </div>

        <RoleDonut />
    </div>

    <div class="pr-6">
        <MatchCard />
    </div>
</template>
<style scoped></style>
