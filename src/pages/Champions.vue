<script setup lang="ts">
import { getQuote } from '@data/champion/quotes'
import { categories } from '@data/champion/categories'
import { useTempStore } from '@stores/tempStore'
import { types } from '@data/champion/roles'
const ts = useTempStore()

const a = Object.values(types)[3]
console.log('💠 - a:', a)

const b = computed(() => {
    const c = []
    a.forEach((type) => {
        c.push(type.id)
    })
    return c
})
console.log('💠 - b - b:', b.value)

watch(
    () => ts.browseChampionClass,
    (newVal) => {
        console.log('💠 - newVal:', newVal)
    }
)
</script>

<template>
    <LayoutSpacer class="!h-30" />

    <main class="flex h-full max-h-full gap-12 px-12">
        <div
            class="max-h-inherit flex h-full w-3/4 flex-col justify-start gap-4">
            <RadioFilterList
                bg
                :types="b"
                @update:model="(e) => (ts.browseChampionTypes = e)" />
            <Card class="max-h-inherit mt-2 h-[80%] overflow-y-scroll px-8">
                <ChampionList class="gap-5 pt-8" />
            </Card>
        </div>

        <div class="max-h-inherit flex h-[86%] w-1/4 flex-col gap-8">
            <h1 class="!text-9 drop-shadow-text px-2 text-right tracking-tight">
                Champions
            </h1>
            <div
                class="text-4 drop-shadow-text h-28 items-center px-2 text-end font-serif tracking-wide"
                v-html="getQuote()"></div>
            <ChampionSearch />
            <h2 class="drop-shadow-text mt-7 px-2 text-right tracking-tight">
                Champion Classes
            </h2>

            <!-- ItemStatsList /> -->
            <span class="h-1 w-full" />
            <CheckboxFilterList
                :source="categories"
                @update:model="(e) => (ts.browseChampionClass = e)" />
        </div>
    </main>
</template>

<style scoped></style>
