<script setup lang="ts">
import { useAccountStore } from '@stores/accountStore'
import { useTempStore } from '@stores/tempStore'
import { useDataStore } from '@stores/dataStore'
import { getChampionImage } from '@/functions/makeLinks'

const ds = useDataStore()
const ts = useTempStore()
const as = useAccountStore()

const champion = ref(ts.selectedChampion)
console.log('💠 - champion:', champion)

watch(
    () => as.favoriteChamps,
    (newVal) => {},
    { immediate: true }
)

const isLiked = computed(() => {
    return as.favoriteChamps.some((champ) => champ.name === champion.value.name)
})

console.log('💠 - championTags - championTags:', champion.value.tags)
</script>
<template>
    <div
        :champion="ts.selectedChampion"
        class="relative h-full w-130 justify-self-center pr-16"
        key="id">
        <div class="rating absolute top-1 right-17 size-fit gap-1">
            <input
                type="checkbox"
                v-model="as.favoriteChamps"
                :value="champion"
                name="favorite-item"
                :aria-label="'favorite ' + champion.name"
                class="mask mask-heart bg-[#dd5f61]" />
        </div>

        <div class="flex w-full gap-6 pb-5">
            <div class="shadow-standard mr-1 size-fit rounded-lg">
                <LoadImg
                    :alt="champion.name"
                    class="aspect-square size-24 shrink-0 overflow-hidden rounded-lg object-center inset-shadow-sm [&_img]:scale-[115%]"
                    :url="getChampionImage(champion.apiname)" />
            </div>
            <div class="flex flex-col">
                <h1
                    class="flex flex-wrap items-end gap-2 pt-1 leading-none tracking-tighter drop-shadow-sm">
                    {{ champion.name }}

                    <span
                        class="text-2 mb-0.75 font-normal italic"
                        v-if="champion.nickname">
                        a.k.a. {{ champion.nickname }}
                    </span>
                </h1>

                <p class="text-4 mb-2 ml-0.5 tracking-tight">
                    @{{ champion.title }}
                </p>

                <div class="flex gap-2">
                    <Badge
                        v-if="champion.herotype"
                        size="sm"
                        class="text-3 text-bc flex flex-nowrap text-center font-mono lowercase"
                        :style="{
                            backgroundColor: `var(--color-${champion.herotype.toLowerCase()})`,
                        }">
                        #{{ champion.herotype }}
                    </Badge>

                    <Badge
                        v-if="champion.alttype"
                        size="sm"
                        class="text-3 text-bc flex flex-nowrap text-center font-mono lowercase"
                        :style="{
                            backgroundColor: `var(--color-${champion.alttype.toLowerCase()})`,
                        }">
                        #{{ champion.alttype }}
                    </Badge>
                </div>
            </div>
        </div>

        <ChampionStats :champion="champion" />
        <!-- <ChampionAspects /> -->

        <Separator label="ACTIVES" class="my-11" />
        <ChampionAbilities :champion="champion" />
    </div>
</template>

<style></style>
