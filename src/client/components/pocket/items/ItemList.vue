<script setup lang="ts">
import { useItemStore } from '@/client/stores/itemStore'
import type { pocket } from 'types'
import { VueDraggable } from 'vue-draggable-plus'
const is = useItemStore()
const props = defineProps<{
    pocket: pocket
}>()
/* --------------------------- FILTER -------------------------- */

// Filter logic
const filteredItems = computed(() => {
    let filtered = is.items

    if (is.searchFilter) {
        const searchTerm = is.searchFilter.toLowerCase()
        filtered = filtered.filter((item: any) =>
            Object.values(item).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(searchTerm)
            )
        )
    }

    // Apply cat filters if any
    if (is.catFilters.length) {
        filtered = filtered.filter((item: { cat: string }) =>
            is.catFilters.some((filter) =>
                item.cat?.toLowerCase().includes(filter.toLowerCase())
            )
        )
    }

    // Apply stat filters if any
    if (is.statFilters.length) {
        filtered = filtered.filter(
            (item: { stats: string }) =>
                item.stats &&
                is.statFilters.some((filter) =>
                    item.stats.toLowerCase().includes(filter.toLowerCase())
                )
        )
    }

    return filtered
})

// Sorting logic
const sfi = computed(() => {
    let sorted = ref([...filteredItems.value]) // Use ref instead of reactive

    if (is.sortAZ) {
        if (is.sortAZ === 1) {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    a.name.localeCompare(b.name)
            )
        } else if (is.sortAZ === 2) {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    b.name.localeCompare(a.name)
            )
        }
    }

    if (is.sortPrice) {
        if (is.sortPrice === 1) {
            sorted.value = sorted.value.sort(
                (a: { buy: number }, b: { buy: number }) => a.buy - b.buy
            )
        } else if (is.sortPrice === 2) {
            sorted.value = sorted.value.sort(
                (a: { buy: number }, b: { buy: number }) => b.buy - a.buy
            )
        }
    }

    if (is.viewFavorite == true && is.favoriteItems.length) {
        sorted.value = sorted.value.filter((item) =>
            is.favoriteItems.some((likedItem) => likedItem.id === item.id)
        )
    }

    return sorted.value
})

watch(
    () => is.favoriteItems, // Watch the actual value of favoriteItems
    (newVal) => {
        if (!newVal.length) {
            is.viewFavorite = false
        }
    },
    { immediate: true } // Ensure it runs on initialization
)
const disabled = ref(false)
</script>

<template>
    <VueDraggable
        :group="{ name: 'items', pull: 'clone', put: false, revertClone: true }"
        :sort="false"
        :bubbleScroll="false"
        :scroll="false"
        v-model="sfi"
        ghostClass="ghosty"
        @click.meta="disabled = true"
        :delay="0"
        :disabled="disabled"
        :animation="300"
        :force-fallback="true"
        :fallbackTolerance="0"
        fallbackClass="drag-clone"
        :fallbackOnBody="true"
        @remove=""
        class="scrollbar-hide flex max-h-full flex-wrap items-start justify-around gap-3 px-1 py-4">
        <!--     <TransitionGroup name="fade"> -->

        <Item
            v-for="item in sfi"
            :key="item.id"
            :item="item"
            :pocket="pocket"
            class="size-18 shadow-sm" />

        <!--     </TransitionGroup> -->

        <div v-for="index in 5" class="opacity-0" :key="index">
            <div class="aspect-square size-18"></div>
        </div>
    </VueDraggable>
</template>

<style></style>
