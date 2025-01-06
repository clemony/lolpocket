<script setup lang="ts">
import { Champion } from '@/types/dataTypes'
import { statArray, statArray2 } from './data/arrays'
const props = defineProps<{
    champion: Champion
}>()

const statModel = ref(true)
</script>
<template>
    <div class="collapse !w-full !p-0">
        <input type="checkbox" v-model="statModel" />
        <div class="collapse-title !w-full !p-0">
            <Separator class="mt-5" label="STATS" />
        </div>
        <div class="collapse-content flex gap-9 !p-0">
            <div class="flex w-1/2 flex-col gap-4">
                <div
                    class="stats border-b2 w-full self-start border shadow-sm"
                    v-for="stat in statArray">
                    <div class="stat">
                        <ChampStatDisplay
                            :champion="props.champion"
                            :stat="stat" />
                    </div>
                </div>
            </div>
            <div class="mb-1 flex w-1/2 flex-col gap-4">
                <div
                    class="stats border-b2 w-full self-start border shadow-sm"
                    v-for="stat in statArray2">
                    <div class="stat">
                        <ChampStatDisplay
                            :champion="props.champion"
                            :stat="stat" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
