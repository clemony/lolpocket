<script setup lang="ts">
import { itemDrawer } from '@components/drawer/data'
import { toggleDrawerState } from '@/functions/utils'
import { useAccountStore } from '@stores/accountStore'
import { useTempStore } from '@stores/tempStore'
import { useDataStore } from '@stores/dataStore'
import { filteredItems } from './data/client/filter'
const ds = useDataStore()
const as = useAccountStore()

const ts = useTempStore()

const debounceArray = refDebounced(filteredItems, 50)
/* console.log('💠 - debounceArray:', debounceArray)
watch(
    () => debounceArray,
    (newVal) => {
        console.log('💠 - newVal:', newVal)
    }
)
 */
//:key="transitionKey"

const hold = []
</script>

<template>
    <div>
        <transition-slide
            group
            class="flex max-h-full flex-wrap items-start justify-around gap-5 px-1">
            <Item
                v-for="(item, i) in filteredItems"
                :key="i"
                :item="item"
                ref="el"
                class="size-18 shadow-sm select-none"
                @click="toggleDrawerState(itemDrawer, null, null, item)" />

            <div
                v-for="index in 18"
                :key="index"
                class="invisible aspect-square size-18 opacity-0"></div>
        </transition-slide>
    </div>
</template>

<style></style>
