<script setup lang="ts">
import { Champion } from '@/types/dataTypes'
import { stats } from '@data/champion/'
import { colorB3 } from '@/functions/ui/colors'

const props = defineProps<{
    champion: Champion
}>()

const statModel = ref(true)

const level = ref(1)

const colors = [colorB3.value, 'black']
const labels = ['Level']
const datasets = [
    {
        data: [18 - level.value, level.value],
    },
]
</script>
<template>
    <div class="collapse !w-full !rounded-none !p-0">
        <input type="checkbox" v-model="statModel" />
        <div class="collapse-title !w-full !p-0">
            <Separator class="mt-5" label="STATS" />
        </div>

        <div class="collapse-content relative w-full gap-9 !p-0">
            <div class="flex h-18 w-full gap-4">
                <div
                    class="flex h-full w-3/4 flex-col justify-between pt-2 pb-4">
                    <h3 class="drop-shadow-text leading-none tracking-tight">
                        Level
                    </h3>
                    <input
                        type="range"
                        min="1"
                        max="18"
                        v-model="level"
                        class="range range-xs [&::-webkit-slider-thumb]:!rounded-md" />
                </div>
                <div class="relative size-18">
                    <Donut
                        :datasets="datasets"
                        :labels="labels"
                        aria="level"
                        :colors="colors"
                        gauge />
                    <h1 class="absolute top-4 left-6.5 size-full">
                        {{ level }}
                    </h1>
                </div>
            </div>
            <div class="flex w-1/2 flex-col gap-4">
                <div class="w-full self-start" v-for="stat in stats">
                    <div class="stat">
                        <ChampStatDisplay
                            :champion="props.champion"
                            :stat="stat"
                            :level="level" />
                    </div>
                </div>
            </div>
            <!--  <div class="mb-1 flex w-1/2 flex-col gap-4">
                <div
                    class="stats border-b2 w-full self-start border shadow-sm"
                    v-for="stat in statArray2">
                    <div class="stat">
                        <ChampStatDisplay
                            :champion="props.champion"
                            :stat="stat" />
                    </div>
                </div>
            </div>-->
        </div>
    </div>
</template>
<style scoped></style>
