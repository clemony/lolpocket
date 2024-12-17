<script setup lang="ts">
import { useTempStore } from '@stores/tempStore'
import type { pocket } from 'types'
import { VueDraggable } from 'vue-draggable-plus'
import type { HTMLAttributes } from 'vue'
import { useAccountStore } from '@stores/accountStore'
const as = useAccountStore()
const ts = useTempStore()
const props = defineProps<{
    pocket?: pocket
    dragDisabled?: boolean
    class?: HTMLAttributes['class']
}>()
/* --------------------------- FILTER -------------------------- */

// Filter logic
const filteredItems = computed(() => {
    let filtered = ts.items

    if (ts.itemSearchFilter) {
        const searchTerm = ts.itemSearchFilter.toLowerCase()
        filtered = filtered.filter((item: any) =>
            Object.values(item).some(
                (value) =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(searchTerm)
            )
        )
    }

    // Apply cat filters if any
    if (ts.catFilters.length) {
        filtered = filtered.filter((item: { cat: string }) =>
            ts.catFilters.some((filter) =>
                item.cat?.toLowerCase().includes(filter.toLowerCase())
            )
        )
    }

    // Apply stat filters if any
    if (ts.statFilters.length) {
        filtered = filtered.filter(
            (item: { stats: string }) =>
                item.stats &&
                ts.statFilters.some((filter) =>
                    item.stats.toLowerCase().includes(filter.toLowerCase())
                )
        )
    }

    return filtered
})

// Sorting logic
const sfi = computed(() => {
    let sorted = ref([...filteredItems.value]) // Use ref instead of reactive

    if (ts.sortItemsAZ) {
        if (ts.sortItemsAZ === 1) {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    a.name.localeCompare(b.name)
            )
        } else if (ts.sortItemsAZ === 2) {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    b.name.localeCompare(a.name)
            )
        }
    }

    if (ts.sortPrice) {
        if (ts.sortPrice === 1) {
            sorted.value = sorted.value.sort(
                (a: { buy: number }, b: { buy: number }) => a.buy - b.buy
            )
        } else if (ts.sortPrice === 2) {
            sorted.value = sorted.value.sort(
                (a: { buy: number }, b: { buy: number }) => b.buy - a.buy
            )
        }
    }

    if (ts.viewFavoriteItems == true && as.favoriteItems.length) {
        sorted.value = sorted.value.filter((item) =>
            as.favoriteItems.some((likedItem) => likedItem.id === item.id)
        )
    }

    return sorted.value
})

watch(
    () => as.favoriteItems, // Watch the actual value of favoriteItems
    (newVal) => {
        if (!newVal.length) {
            ts.viewFavoriteItems = false
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
        :disabled="disabled || props.dragDisabled"
        :animation="300"
        :force-fallback="true"
        :fallbackTolerance="0"
        fallbackClass="drag-clone"
        :fallbackOnBody="true"
        @click.stop.prevent
        @remove=""
        :class="
            cn(
                'scrollbar-hide flex max-h-full flex-wrap items-start justify-around gap-3 px-1 py-4',
                props.class
            )
        ">
        <!--     <TransitionGroup name="fade"> -->

        <Item
            v-for="item in sfi"
            :key="item.id"
            :item="item"
            :pocket="pocket"
            class="size-18 shadow-sm"
            @click.stop.prevent />

        <!--     </TransitionGroup> -->

        <div v-for="index in 5" class="opacity-0" :key="index">
            <div class="aspect-square size-18"></div>
        </div>
    </VueDraggable>
</template>

<style></style>
