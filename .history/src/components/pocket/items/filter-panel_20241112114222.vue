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
        <button
            :disabled="
                is.sortAZ == 0 &&
                is.sortPrice == 0 &&
                !is.statFilters.length &&
                !is.catFilters.length
            "
            class="text-mini absolute my-2 -ml-2 flex h-7 w-fit content-center items-center justify-start gap-3 justify-self-center rounded-btn p-0.5 px-3 font-bold hover:bg-base-200 disabled:opacity-40 disabled:hover:bg-transparent"
            @click="filter()">
            <icon icon="qlementine-icons:eraser-16" class="size-5 opacity-80" />
            Clear
        </button>
        <TierFilters />

        <StatFilters />
    </div>
</template>

<style scoped></style>
