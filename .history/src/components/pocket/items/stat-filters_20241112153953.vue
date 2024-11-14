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
const isOpen = ref(false)
</script>

<template>
    <div class="flex gap-3 pt-4">
        <!--    <h2>Item Stats</h2> -->
        <Collapsible v-for="cat in cats" v-model:open="isOpen">
            <CollapsibleTrigger>
                <DividerStart class="h-8 capitalize">
                    {{ cat.name }}
                </DividerStart>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <ul class="flex flex-col gap-y-3">
                    <template v-if="getStatsForCategory(cat.name)">
                        <li
                            v-for="stat in getStatsForCategory(cat.name)"
                            :key="stat.name"
                            class="w-1/4 grow">
                            <label class="flex flex-nowrap gap-3">
                                <input
                                    type="checkbox"
                                    v-model="is.statFilters"
                                    class="checkbox checkbox-sm rounded-xs opacity-80"
                                    :value="stat.value || stat.name" />
                                <div class="text-nowrap text-sm">
                                    {{ stat.name }}
                                </div>
                                <!--         <icon :icon="stat.icon" :class="stat.classList" class="w-4 text-base-content/80 size-4 " /> -->
                            </label>
                        </li>
                        <li
                            v-if="cat.name == 'physical'"
                            class="w-1/4 grow"></li>
                    </template>
                </ul>
            </CollapsibleContent>
        </Collapsible>
    </div>
</template>

<style scoped></style>
