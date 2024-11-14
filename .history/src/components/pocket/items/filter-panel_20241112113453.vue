<script setup lang="ts">
import { useItemStore } from '@stores/itemStore'
const is = useItemStore()

function filter() {
    is.sortAZ = 0
    is.sortPrice = 0
    is.statFilters.splice(0)
    is.catFilters.splice(0)
}
</script>

<template>
    <div class="flex">
        <InfoCard title="Item Tier">
            <TierFilters />
        </InfoCard>
        <InfoCard title="Item Stats">
            <StatFilters />
        </InfoCard>
    </div>
</template>

<style scoped></style>
