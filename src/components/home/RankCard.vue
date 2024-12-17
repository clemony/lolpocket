<script setup lang="ts">
import type { queue } from 'types'
import { summoner } from '@data/playerData'
import { colorB3 } from '@/utils/getColor'
const props = defineProps<{
    queue: string
    title: string
}>()

const queue = computed(() => {
    const a =
        props.queue == 'soloDuo' ? summoner.ranks.soloDuo : summoner.ranks.flex
    return a
})
const winrate = computed(() => {
    return (queue.value.win / queue.value.games) * 100
})
const rank = ref(queue.value.rank)
console.log('💠 - rank:', rank)

const color1 = computed(() => {
    return getComputedStyle(document.documentElement).getPropertyValue(
        `--color-${rank.value}`
    )
})

const labels = ['Loss', 'Win']
const datasets = [
    {
        data: [100 - winrate.value, winrate.value],
    },
]

const colors = [colorB3.value, color1.value]
</script>
<template>
    <DisplayCard
        headerClass="!pb-0 [&_.description]:hidden"
        class="h-48 w-full pb-4">
        <template #header>
            <p class="text-4 mt-2 ml-2 font-semibold" :style="{}">
                {{ 'Ranked ' + props.title }}
            </p>
        </template>
        <div
            class="relative grid grid-cols-[1.1fr_1fr_1fr] place-items-center pt-6">
            <div>
                <div
                    class="absolute top-1 left-1 grid size-34 place-items-center">
                    <img
                        :src="`/img/crests/${queue.rank}.webp`"
                        class="object-contain drop-shadow-lg" />
                </div>
            </div>
            <div class="relative">
                <Donut
                    :datasets="datasets"
                    :colors="colors"
                    :labels="labels"
                    type="gauge"
                    aria="Recent winrate in percentage"
                    class="size-22" />

                <span class="text-bc absolute top-8 left-7 font-medium">
                    {{ winrate }}%
                </span>
            </div>
            <div
                class="text-2 mt-0 flex flex-col justify-center gap-2 font-medium">
                <p class="capitalize">
                    {{ queue.rank + ' ' + queue.tier }}
                </p>

                <p>{{ queue.games }} Games</p>

                <div class="flex items-center gap-2">
                    <p class="flex items-center text-nowrap">
                        {{ queue.win }}W
                        <icon
                            icon="ion:caret-up-outline"
                            class="text-inspiration" />
                    </p>
                    <p class="flex items-center text-nowrap">
                        {{ queue.loss }}L
                        <icon
                            icon="ion:caret-down-outline"
                            class="text-domination" />
                    </p>
                </div>
            </div>
        </div>
    </DisplayCard>
</template>
<style scoped>
.radial-progress::after,
.radial-progress::before {
    color: var(--rankColor);
}
</style>
