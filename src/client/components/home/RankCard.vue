<script setup lang="ts">
import type { queue } from 'types'
import { summoner } from '@/client/data/playerData'

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

console.log('💠 - winrate - winrate:', winrate)
</script>
<template>
    <DisplayCard
        headerClass="!pb-0 [&_.description]:hidden"
        class="h-48 w-110 pb-4">
        <template #header>
            <h5 class="text-4 mt-2 ml-2 font-semibold" :style="{}">
                {{ 'Ranked ' + props.title }}
            </h5>
        </template>
        <div class="relative grid grid-cols-3 place-items-center pt-8">
            <div>
                <div
                    class="absolute top-2 left-2 grid size-34 place-items-center">
                    <img
                        :src="`/img/crests/${queue.rank}.webp`"
                        class="object-contain drop-shadow-lg" />
                </div>
            </div>
            <div class="relative">
                <div
                    :style="{
                        '--value': winrate,
                    }"
                    class="radial-progress absolute -top-8 -left-9 size-20 drop-shadow-xs"
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
            </div>
            <div
                class="text-2 mt-3 flex flex-col justify-center gap-2 font-medium">
                <div>
                    <p>{{ queue.games }} Games</p>
                </div>
                <div class="flex items-center gap-2">
                    <p class="flex items-center text-nowrap">
                        {{ queue.win }}W
                        <icon
                            icon="ion:caret-up-outline"
                            class="text-resolve" />
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
