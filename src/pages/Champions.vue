<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
import { useDataStore } from '@/stores/dataStore'

const ds = useDataStore()

const champions = ref(ds.champions)
</script>

<template>
    <PageLayout>
        <template #header>Champions</template>
        <LayoutSpacer />
        <main class="px-12">
            <Card>
                <CardContent class="px-8 py-5">
                    <ScrollArea class="overflow-y-scroll">
                        <ChampionList drag-disabled class="gap-5" />
                    </ScrollArea>
                </CardContent>
            </Card>
        </main>
    </PageLayout>
=======
import { getQuote } from '@data/champQuotes'
import { useDataStore } from '@stores/dataStore'
=======
import { useDataStore } from '@/stores/dataStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)

const ds = useDataStore()

const champions = ref(ds.champions)
</script>

<template>
<<<<<<< HEAD
    <!-- Champ Tab -->

    <div class="*:scrollbar-hide h-full w-full px-6">
        <div class="flex w-full items-end px-2 py-6">
            <div class="flex grow items-center">
                <h2 class="text-7 p-1.5 font-bold">Champions</h2>

                <p class="grow p-1.5 font-mono italic">
                    {{ getQuote }}
                </p>
            </div>
        </div>

        <div
            class="border-b-b3 bg-b1/90 absolute top-0 left-0 z-10 flex h-fit! w-full flex-wrap items-center justify-end gap-4 border-b px-4 py-1 backdrop-blur-md">
            <h2 class="text-3 grow justify-start font-semibold">Primary</h2>
            <select
                class="align-self-end select select-bordered select-xs max-w-xs justify-self-end shadow-inner">
                <option disabled selected>Class</option>
                <option>Marksman</option>
                <option>Mage</option>
                <option>Tank</option>
                <option>Support</option>
                <option>Fighter</option>
                <option>Assassin</option>
            </select>
        </div>

        <div
            class="scroll-none flex h-full max-h-full w-full flex-wrap gap-4 overflow-y-scroll p-2 pt-11">
            <div
                v-for="(champion, index) in champions"
                :key="champion.name"
                :data-index="index"
                class="">
                <button
                    class="item-wrapper__item ring-b3 ring-offset-b1 hover:ring-offset-primary has-checked:ring-offset-secondary pointer-events-auto flex aspect-square max-w-[70px] min-w-[60px] grow basis-14 place-items-center overflow-hidden rounded-md bg-cover ring-1 ring-offset-1 drop-shadow-sm has-checked:ring-offset-2"
                    @click="ds.setSelectedChampion(champion)">
                    <div class="grid-image-container champ">
                        <img
                            v-if="champion.type === 'champion'"
                            :src="champion.img"
                            :alt="champion.name + ' Image'"
                            class="aspect-square scale-[115%]" />
                        <div class="grid-tip">{{ champion.name }}</div>
                    </div>
                </button>
            </div>
        </div>

        <div class="scrollbar-hide max-h-full overflow-y-scroll rounded-xl">
            <ChampionSidebar />
        </div>
    </div>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
    <PageLayout>
        <template #header>Champions</template>
        <LayoutSpacer />
        <main class="px-12">
            <Card>
                <CardContent class="px-8 py-5">
                    <ScrollArea class="overflow-y-scroll">
                        <ChampionList drag-disabled class="gap-5" />
                    </ScrollArea>
                </CardContent>
            </Card>
        </main>
    </PageLayout>
>>>>>>> 404a531d (update 84 files and delete 4 files)
</template>

<style scoped></style>
