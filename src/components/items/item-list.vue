<script setup lang="ts">
import { TransitionGroup, computed, Ref, ref, watch } from 'vue'
import { useItemStore } from '@stores/itemStore'
import { VueDraggable } from 'vue-draggable-plus'
import { imageIn, imageOut } from '@script/animations'
const is = useItemStore()

const props = defineProps<{
    pocketKey: string
}>()

/* -------------------------------- FILTER ------------------------------- */

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

    if (is.sortName) {
        if (is.sortName === 'az') {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    a.name.localeCompare(b.name)
            )
        } else if (is.sortName === 'za') {
            sorted.value = sorted.value.sort(
                (a: { name: string }, b: { name: string }) =>
                    b.name.localeCompare(a.name)
            )
        }
    }

    if (is.sortPrice) {
        if (is.sortPrice === 'ascending') {
            sorted.value = sorted.value.sort(
                (a: { buy: number }, b: { buy: number }) => a.buy - b.buy
            )
        } else if (is.sortPrice === 'descending') {
            sorted.value = sorted.value.sort(
                (a: { buy: number }, b: { buy: number }) => b.buy - a.buy
            )
        }
    }

    if (is.viewLiked == true && is.lovedItems.length) {
        sorted.value = sorted.value.filter((item) =>
            is.lovedItems.some((likedItem) => likedItem.id === item.id)
        )
    }

    return sorted.value
})

watch(
    () => is.lovedItems, // Watch the actual value of lovedItems
    (newVal) => {
        if (!newVal.length) {
            is.viewLiked = false
        }
    },
    { immediate: true } // Ensure it runs on initialization
)
</script>

<template>
<VueDraggable ref="el" :group="{ name: 'items', pull: 'clone', put: false, revertClone: true }" :sort="false"
    :bubbleScroll="false" :scroll="false" v-model="sfi" ghostClass="ghosty" :delay="0" :animation="300"
    :force-fallback="true" :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true" @remove=""
    class="drag-draggable content-start items-start justify-around px-2 pb-4 pt-12 scrollbar-hide">
    <TransitionGroup @enter="imageIn" name="fade" @leave="imageOut">
        <VDropdown v-for="item in sfi" :triggers="['click']" :overflow-padding="20" :shift="true" theme="detail"
            :key="item.id" :distance="6" @click.right.prevent="" :ref="item.name" class="v-drop relative basis-16">
            <!-------------------------------⟢ Tooltip ⟣-------------------------------->

            <label class="drag-label">
                <div class="drag-wrapper shadow-warm">
                    <img :key="item.id" :src="`/img/items/${item.id}.webp`" :alt="item.name + ' Image'"
                        class="drag-img" />
                </div>
            </label>
            <template #popper :key="item.name + 'Pop'" auto-boundary-max-size shift-cross-axis>
                <pop-item :item="item" :variant="'add'" />
            </template>
        </VDropdown>
    </TransitionGroup>
    <div class="aspect-square basis-16"></div>
    <div class="aspect-square basis-16"></div>
    <div class="aspect-square basis-16"></div>
    <div class="aspect-square basis-16"></div>
    <div class="aspect-square basis-16"></div>
</VueDraggable>
</template>

<style></style>
