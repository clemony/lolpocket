<script setup lang="ts">
import { computed } from 'vue'
import { useItemStore } from '@/stores/itemStore'
import { useDataStore } from '@/stores/dataStore'

const ds = useDataStore()
const is = useItemStore()

const icons = [
    {
        index: 0,
        icon: ['teenyicons:circle-solid'],
    },
    {
        index: 1,
        icon: [''],
    },
]
</script>

<template>
    <div class="flex flex-col pt-1">
        <h5>Tier</h5>
        <ul class="pt-1 [&_label]:py-1.5">
            <li v-for="cat in ds.uniqueCats">
                <label
                    class="label pointer-events-auto cursor-pointer justify-start gap-4">
                    <input
                        type="checkbox"
                        :value="cat"
                        :id="cat"
                        v-model="is.catFilters"
                        class="checkbox checkbox-sm rounded-xs opacity-80" />
                    <span class="text-2">{{ cat }}</span>
                </label>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
