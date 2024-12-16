<script setup lang="ts">
import { summoner } from '@data/playerData'
import { useGeneralStore } from '@stores/generalStore'
import { colorB3 } from '@utils/GetColor'
const gs = useGeneralStore()

const recentWinrate = ref(55)
const recentMatchNum = ref(20)

const color1 = computed(() => {
    return gs.colorBlindMode ? '#99c4c8' : '#a3be8c'
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
    <div class="flex h-22 items-center pr-10" ref="matches">
        <div class="relative flex size-22 grow items-center gap-4">
            <Donut
                :datasets="datasets"
                :colors="colors"
                :labels="labels"
                aria="Recent winrate in percentage" />
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
