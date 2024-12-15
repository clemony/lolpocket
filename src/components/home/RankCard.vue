<script setup lang="ts">
import type { queue } from 'types'
import { summoner } from '@data/playerData'
<<<<<<< HEAD
<<<<<<< HEAD
import { colorB3 } from '@utils/getColor'
=======
import { colorB3 } from '@utils/GetColor'
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { colorB3 } from '@utils/getColor'
>>>>>>> 83f9266d (update 42 files and delete 17 files)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
<<<<<<< HEAD:src/components/home/RankCard.vue
        <div
            class="relative grid grid-cols-[1.1fr_1fr_1fr] place-items-center pt-6">
            <div>
                <div
                    class="absolute top-1 left-1 grid size-34 place-items-center">
=======
        <div class="relative grid grid-cols-3 place-items-center pt-7">
            <div>
                <div
                    class="absolute top-1 left-2 grid size-34 place-items-center">
<<<<<<< HEAD
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/components/home/RankCard.vue
=======
        <div
            class="relative grid grid-cols-[1.1fr_1fr_1fr] place-items-center pt-6">
            <div>
                <div
                    class="absolute top-1 left-1 grid size-34 place-items-center">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/RankCard.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
                    <img
                        :src="`/img/crests/${queue.rank}.webp`"
                        class="object-contain drop-shadow-lg" />
                </div>
            </div>
            <div class="relative">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/components/home/RankCard.vue
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
<<<<<<< HEAD:src/components/home/RankCard.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
                <Donut
                    :datasets="datasets"
                    :colors="colors"
                    :labels="labels"
<<<<<<< HEAD
<<<<<<< HEAD
                    type="gauge"
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                    type="gauge"
>>>>>>> 83f9266d (update 42 files and delete 17 files)
                    aria="Recent winrate in percentage"
                    class="size-22" />

                <span class="text-bc absolute top-8 left-7 font-medium">
                    {{ winrate }}%
                </span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
                <div
                    :style="{
                        '--value': winrate,
                    }"
                    class="radial-progress absolute -top-10 -left-9 size-20 drop-shadow-xs"
                    :class="{
                        'text-bc': rank == 'unranked',
                        'text-iron': rank == 'gold',
                        'text-bronze': rank == 'bronze',
                        'text-silver': rank == 'silver',
                        'text-gold': rank == 'gold',
                        'text-platinum': rank == 'platinum',
                        'text-emerald': rank == 'emerald',
                        'text-diamond': rank == 'diamond',
                        'text-master': rank == 'master',
                        'text-grandmaster': rank == 'grandmaster',
                        'text-challenger': rank == 'challenger',
                    }"
                    role="progressbar">
                    <span class="text-bc font-medium">{{ winrate }}%</span>
                </div>
<<<<<<< HEAD
>>>>>>> 12d6db59 (update 38 files and delete 54 files):src/client/components/home/RankCard.vue
=======
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/RankCard.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
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
