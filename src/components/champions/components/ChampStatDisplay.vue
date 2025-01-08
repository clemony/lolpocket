<script setup lang="ts">
import { Champion } from '@/types/dataTypes'
import { stats } from '@data/champion'

const props = defineProps<{
    champion: Champion
    stat: any
    level: number
}>()

const statistics = Object.entries(stats)
const base = (stat) => {
    return statistics.find((key) => key[0] == stat.value.stats[0].id)
}
console.log('💠 - base - base:', base)

const perLvl = (stat) => {
    return statistics.find((key) => key[0] == stat.value.stats[1].id)
}
console.log('💠 - perLvl - perLvl:', perLvl)

const asRatio = (stat) => {
    return statistics.find((key) => key[0] == stat.value.stats[2].id)
}
console.log('💠 - asRatio - asRatio:', asRatio)

const stat = ref(props.stat)

onMounted(async () => {
    await props.stat
    stat.value = props.stat
    // stat.value.name == 'Attack Speed' ? atkSpeed(stat.value) : ''
})
</script>
<template>
    <div class="stat-title !text-3 text-bc mb-0.5 font-semibold opacity-60">
        {{ stat.name }}
    </div>

    <progress class="progress progress-neutral" :value="0" max="100"></progress>

    <div class="flex items-center gap-3">
        <div class="stat-value text-8 drop-shadow-text">big boi</div>

        <div
            class="stat-desc text-3 text-bc mt-0.75 h-full items-start font-semibold tracking-tight opacity-60">
            lil

            <span v-if="stat.name == 'Attack Speed'"></span>
        </div>
    </div>

    <img
        :src="stat.img"
        class="stat-img drop-shadow-xs: invert-dark size-6.5 justify-self-end opacity-80" />
</template>
<style scoped></style>
