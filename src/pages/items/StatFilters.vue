<script setup lang="ts">
import { computed, ref } from 'vue'
import { useItemStore } from '../../stores/itemStore'
const is = useItemStore()
import { stats } from '../../script/stats'

const sorted = stats.sort((a, b) => {
    return a.name.localeCompare(b.name)
})

interface stat {
    name: string
    icon: string
    cat: string
    badgeClass?: string
}

// Compute the filtered magic stats
const magic = computed(() => {
    return stats.filter((stat) => stat.cat.toLowerCase() === 'magic') // Filtering for 'magic' category
})
// Compute the filtered magic stats
const utility = computed(() => {
    return stats.filter((stat) => stat.cat.toLowerCase() === 'utility') // Filtering for 'magic' category
})
// Compute the filtered magic stats
const defense = computed(() => {
    return stats.filter((stat) => stat.cat.toLowerCase() === 'defense') // Filtering for 'magic' category
})
// Compute the filtered magic stats
const physical = computed(() => {
    return stats.filter((stat) => stat.cat.toLowerCase() === 'physical') // Filtering for 'magic' category
})

const cats = [
    {
        name: 'magic',
        icon: 'mdi:sparkles',
        ringClass: 'ring-info/90',
    },
    {
        name: 'utility',
        icon: 'hugeicons:potion',
        ringClass: 'ring-blues/90',
    },
    {
        name: 'defense',
        icon: 'ph:shield-plus',
        ringClass: 'ring-success/90',
    },
    {
        name: 'physical',
        icon: 'mdi:bow-arrow',
        ringClass: 'ring-warning/90',
    },
]

// Function to map category to its stats
function getStatsForCategory(category: string) {
    switch (category) {
        case 'magic':
            return magic.value
        case 'utility':
            return utility.value
        case 'defense':
            return defense.value
        case 'physical':
            return physical.value
        default:
            return []
    }
}

const isCollapsed = ref(true)
</script>

<template>
    <div class="grid gap-5 px-1 py-2 mt-2 w-60">
        <template v-for="cat in cats">
            <div
                class="pointer-events-auto p-3 gap-1.5 flex flex-wrap [&_div]:!text-xs border border-base-300/60 rounded-lg relative">
                <div
                    class="pb-1.5 size-9 aspect-square mt-2 flex rounded-full items-center justify-center absolute -top-4 -right-2 bg-base-100 brightness-[98%]">
                    <icon :icon="cat.icon" class="opacity-50 size-[18px]" />
                </div>

                <template v-if="getStatsForCategory(cat.name)">
                    <label
                        v-for="stat in getStatsForCategory(cat.name)"
                        :key="stat.name"
                        class="transition-all duration-150 relative z-0 overflow-hidden cursor-pointer badge has-[:checked]:border-0 badge-outline hover:brightness-60 hover:text-neutral-content border-neutral/30 hover:!bg-neutral">
                        <input
                            type="checkbox"
                            v-model="is.statFilters"
                            class="hidden peer"
                            :value="stat.value || stat.name" />

                        <div
                            :class="stat.bgClass"
                            class="absolute z-10 w-full h-full transition-all duration-150 peer-[:not(:checked)]:bg-transparent"></div>
                        <div
                            class="z-20 font-medium peer-checked:text-neutral-content peer-checked:hover:text-base-content">
                            {{ stat.name }}
                        </div>
                        <!--         <icon :icon="stat.icon" :class="stat.classList" class="w-4 text-base-content/80 size-4 " /> -->
                    </label>
                </template>
            </div>
        </template>
    </div>
</template>

<style scoped></style>
