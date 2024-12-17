<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD:src/components/home/ChampTabs.vue
import { summoner } from '@data/playerData'
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
import { summoner } from '@/client/data/playerData'
import { useGeneralStore } from '@/client/stores/generalStore'
=======
import { summoner } from '@data/playerData'
<<<<<<< HEAD
import { useGeneralStore } from '@stores/generalStore'
>>>>>>> 5132f0ce (update 8 files and delete 426 files)
const gs = useGeneralStore()
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/ChampTabs.vue
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
</script>

<template>
    <Tabs default-value="all">
        <TabsList class="mt-2 mb-2 [&_button]:rounded-md">
            <TabsTrigger value="all">All Ranked</TabsTrigger>
            <TabsTrigger value="soloDuo">Solo/Duo</TabsTrigger>
            <TabsTrigger value="flex">Flex</TabsTrigger>
        </TabsList>

        <TabsContent
            v-for="queue in summoner.champions"
            :value="queue.queue"
            as-child>
            <Card class="grid gap-y-8 px-6 py-8">
                <div
                    v-for="champion in queue.champions"
                    class="grid w-full grid-cols-[0.5fr_1.25fr_0.75fr_1.25fr] items-center gap-4">
                    <div
                        class="ring-neutral/15 size-fit rounded-full ring-1 ring-offset-3"
                        :class="{
                            'ring-offset-master':
                                champion.wins / champion.games > 0.54,
                            'ring-offset-challenger/90':
                                0.54 > champion.wins / champion.games &&
                                champion.wins / champion.games > 0.51,
                            'ring-offset-gold':
                                0.51 > champion.wins / champion.games &&
                                champion.wins / champion.games > 0.49,
                            'ring-offset-red-600/80':
                                champion.wins / champion.games < 0.49,
                        }">
                        <div class="size-17 overflow-hidden rounded-full">
                            <img
                                :src="`/img/champions/${clean(champion.champion)}.webp`"
                                class="size-17 scale-114" />
                        </div>
                    </div>
                    <div class="flex w-18 flex-col">
                        <p class="!font-4 font-medium">
                            {{ champion.champion }}
                        </p>
                        <p class="text-nowrap">
                            {{ champion.games + ' Games' }}
                        </p>
                    </div>

                    <div class="flex flex-col justify-center">
                        <p class="flex items-center text-nowrap">
                            <span class="grow">{{ champion.wins }}W</span>
                            <icon
                                icon="ion:caret-up-outline"
                                class="text-resolve"
                                :class="{
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                                    'text-inspiration': as.colorBlindMode,
=======
                                    'text-inspiration': gs.colorBlindMode,
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                                    'text-inspiration': as.colorBlindMode,
>>>>>>> 404a531d (update 84 files and delete 4 files)
=======
=======
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
<<<<<<< HEAD:src/components/home/ChampTabs.vue
                                    'text-inspiration': as.colorBlindMode,
=======
                                    'text-inspiration': gs.colorBlindMode,
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/ChampTabs.vue
<<<<<<< HEAD
>>>>>>> 58212a1a (update 38 files and delete 54 files)
=======
                                    'text-inspiration': as.colorBlindMode,
>>>>>>> 9bb9b9a6 (update src/client/assets/css/index.css)
=======
<<<<<<< HEAD:src/components/home/ChampTabs.vue
                                    'text-inspiration': as.colorBlindMode,
=======
                                    'text-inspiration': gs.colorBlindMode,
>>>>>>> fcc65b9c (update 38 files and delete 54 files):src/client/components/home/ChampTabs.vue
>>>>>>> 2c930845 (update 38 files and delete 54 files)
=======
=======
                                    'text-inspiration': as.colorBlindMode,
>>>>>>> c29d3eca (update 84 files and delete 4 files)
>>>>>>> c5d8fff8 (update 84 files and delete 4 files)
                                }" />
                        </p>
                        <p class="flex items-center text-nowrap">
                            <span class="grow">
                                {{ champion.games - champion.wins }}L
                            </span>
                            <icon
                                icon="ion:caret-down-outline"
                                class="text-domination" />
                        </p>
                    </div>

                    <ChampBar :champion="champion" />
                </div>
            </Card>
        </TabsContent>
    </Tabs>
</template>
<style scoped></style>
