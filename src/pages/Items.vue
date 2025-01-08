<script setup lang="ts">
import { useDataStore } from '@stores/dataStore'
import { categories } from '@data/item/categories'
import { useTempStore } from '@stores/tempStore'
import { types } from '@data/item'
import { getItemsFromDatabase } from '@/components/items/data/client/getItemsFromDatabase'

const ts = useTempStore()
const ds = useDataStore()

const items = computed(() => [...(ds.SRitems || [])])

const captions = computed(() => {
    let a = items.value.map((a) => a.caption ?? '')
    a = a.filter((caption) => caption != '')
    let i = Math.floor(Math.random() * a.length)
    return a[i]
})
console.log('💠 - captions - captions:', captions.value)
watch(
    () => captions.value,
    (newVal) => {
        console.log('💠 - newVal:', newVal)
    }
)

onMounted(() => {
    !ds.SRitems ? getItemsFromDatabase() : ''
})
</script>

<template>
    <LayoutSpacer class="!h-30" />

    <main class="flex h-full max-h-full gap-12 px-12">
        <div
            class="max-h-inherit flex h-full w-3/4 flex-col justify-start gap-4">
            <RadioFilterList
                :types="types"
                @update:model="(e) => (ts.browseItemTypes = e)" />
            <Card
                class="max-h-inherit .item-results mt-2 h-[80%] overflow-y-scroll px-8"
                as-child
                id="item-results"
                ref="item-results">
                <ItemList class="pt-9" />
            </Card>
        </div>

        <div class="max-h-inherit flex h-[86%] w-1/4 flex-col gap-8">
            <h1 class="!text-9 drop-shadow-text px-2 text-right tracking-tight">
                Items
            </h1>
            <div
                class="text-4 drop-shadow-text flex h-28 items-center px-2 text-right font-serif tracking-wide">
                {{ captions }}
            </div>

            <ItemSearch />

            <h2 class="drop-shadow-text mt-7 px-2 text-right tracking-tight">
                Item Stats
            </h2>
            <ItemStatsList />
            <span class="h-1 w-full" />
            <CheckboxFilterList
                :source="categories"
                @update:model="(e) => (ts.browseItemCats = e)" />
        </div>
    </main>
</template>

<style scoped></style>
