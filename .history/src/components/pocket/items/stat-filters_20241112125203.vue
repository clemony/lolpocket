<script setup lang="ts">
import { computed, ref } from 'vue'
import { useItemStore } from '@stores/itemStore'
const is = useItemStore()
import { stats } from '@data/stats'

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
    <div class="flex flex-col gap-3 pt-4">
        <div v-for="cat in cats" class="">
            <span class="capitalize">{{ cat.name }}</span>
            <ul
                class="grid grid-flow-col grid-cols-4 grid-rows-[repeat(auto-fill)] justify-start gap-x-4 gap-y-3">
                <template v-if="getStatsForCategory(cat.name)">
                    <li
                        v-for="stat in getStatsForCategory(cat.name)"
                        :key="stat.name">
                        <label class="flex gap-3">
                            <input
                                type="checkbox"
                                v-model="is.statFilters"
                                class="checkbox checkbox-sm rounded-full opacity-80"
                                :value="stat.value || stat.name" />

                            <div
                                class="absolute z-10 h-full w-full transition-all duration-150 peer-[:not(:checked)]:bg-transparent"></div>
                            <span
                                class="z-20 text-sm peer-checked:text-neutral-content peer-checked:hover:text-base-content">
                                {{ stat.name }}
                            </span>
                            <!--         <icon :icon="stat.icon" :class="stat.classList" class="w-4 text-base-content/80 size-4 " /> -->
                        </label>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
