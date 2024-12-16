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
        isMagicOpen: false,
    },
    {
        name: 'defense',
        icon: 'ph:shield-plus',
        ringClass: 'ring-success/90',
        isDefenseOpen: false,
    },

    {
        name: 'utility',
        icon: 'hugeicons:potion',
        ringClass: 'ring-blues/90',
        isUtilityOpen: false,
    },
    {
        name: 'physical',
        icon: 'mdi:bow-arrow',
        ringClass: 'ring-warning/90',
        isPhysicalOpen: false,
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
</script>

<template>
    <div
        class="grid h-fit grid-cols-2 justify-around gap-x-8 gap-y-4 odd:col-start-2">
        <!--    <h2>Item Stats</h2> -->
        <div v-for="(cat, i) in cats" :defaultOpen="false">
            <h5 class="semibold text-3! mb-1.5 capitalize">
                {{ cat.name }}
            </h5>

            <ul class="flex flex-col gap-y-3">
                <template v-if="getStatsForCategory(cat.name)">
                    <li
                        v-for="stat in getStatsForCategory(cat.name)"
                        :key="stat.name"
                        class="">
                        <label class="flex flex-nowrap gap-3">
                            <input
                                type="checkbox"
                                v-model="is.statFilters"
                                class="checkbox checkbox-sm rounded-xs opacity-80"
                                :value="stat.value || stat.name" />
                            <div class="text-2 text-nowrap">
                                {{ stat.name }}
                            </div>
                            <!--         <icon :icon="stat.icon" :class="stat.classList" class="w-4 text-bc/80 size-4 " /> -->
                        </label>
                    </li>
                    <li v-if="cat.name == 'physical'" class="w-1/4 grow"></li>
                </template>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
