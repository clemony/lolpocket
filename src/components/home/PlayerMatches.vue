<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD:src/components/home/PlayerMatches.vue
import { summoner } from '@data/playerData'
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccountStore } from '@stores/accountStore'
import { colorB3 } from '@utils/getColor'
const as = useAccountStore()
=======
<<<<<<< HEAD
import { useGeneralStore } from '@stores/generalStore'
import { colorB3 } from '@utils/getColor'
const gs = useGeneralStore()
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
import { colorB3 } from '@utils/getColor'
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
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
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/PlayerMatches.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)

=======
import { summoner } from '@data/playerData'
import { useGeneralStore } from '@stores/generalStore'
import { colorB3 } from '@utils/GetColor'
const gs = useGeneralStore()

>>>>>>> 5132f0ce (update 8 files and delete 426 files)
const recentWinrate = ref(55)
const recentMatchNum = ref(20)

const color1 = computed(() => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
<<<<<<< HEAD:src/components/home/PlayerMatches.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
    return as.colorBlindMode ? '#99c4c8' : '#a3be8c'
=======
    return gs.colorBlindMode ? '#99c4c8' : '#a3be8c'
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
    return as.colorBlindMode ? '#99c4c8' : '#a3be8c'
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
})

const datasets = [
    {
        data: [100 - recentWinrate.value, recentWinrate.value],
    },
]

const colors = [colorB3.value, color1.value]
const labels = ['Win', 'Loss']
</script>
<template>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
    <div
        class="grid h-22 w-full grid-cols-[2.5fr_3fr_1fr] items-center gap-3 px-2"
        ref="matches">
        <div class="relative flex items-center gap-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======
    <div class="flex h-22 items-center pr-10" ref="matches">
        <div class="relative flex size-22 grow items-center gap-4">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
    <div class="flex h-22 items-center pr-10" ref="matches">
        <div class="relative flex size-22 grow items-center gap-4">
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
            <Donut
                :datasets="datasets"
                :colors="colors"
                :labels="labels"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
                type="gauge"
                aria="Recent winrate in percentage"
                class="!size-22" />
=======
<<<<<<< HEAD
                aria="Recent winrate in percentage" />
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                type="gauge"
                aria="Recent winrate in percentage"
                class="!size-22" />
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
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
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/PlayerMatches.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
                aria="Recent winrate in percentage" />
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)
            <span class="text-bc absolute left-7 font-medium">
                {{ recentWinrate }}%
            </span>

            <h5>
                Winrate
                <br />
                Last {{ recentMatchNum }} Games
            </h5>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
>>>>>>> be133e04 (update 8 files and delete 426 files)
<<<<<<< HEAD:src/components/home/PlayerMatches.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
        <div class="flex gap-3">
            <div
                v-for="champion in summoner.recentChampions"
                class="relative flex size-22 items-center rounded-full shadow-sm">
                <Donut
                    :datasets="[
                        {
                            data: [
                                100 - (champion.wins / champion.games) * 100,
                                (champion.wins / champion.games) * 100,
                            ],
                        },
                    ]"
                    :colors="colors"
                    :labels="[
                        `${champion.games - champion.wins}L`,
                        `${champion.wins}W`,
                    ]"
                    cutout="87%"
                    type="gauge"
                    aria="Recent winrate in percentage"
                    class="z-10" />

                <div
                    class="border-neutral/40 absolute left-1.75 size-18.5 overflow-hidden rounded-full border-2 font-medium">
                    <LoadImg
                        :url="`/img/champions/${clean(champion.name)}.webp`"
                        class="size-18.5 scale-105 object-center" />
                </div>
            </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 83f9266d (update 42 files and delete 17 files)
=======
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/PlayerMatches.vue
<<<<<<< HEAD
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
>>>>>>> be133e04 (update 8 files and delete 426 files)

        <RoleDonut />
    </div>

    <div class="pr-6">
        <MatchCard />
    </div>
</template>
<style scoped></style>
