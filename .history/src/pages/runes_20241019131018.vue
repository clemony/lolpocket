<route lang="json">
{
    "name": "Runes",
    "alias": "/runes/runes",
    "meta": {
        "title": "Runes",
        "icon": "teenyicons:hexagon-outline"
    }
}
</route>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '../../stores/dataStore'
import { useRuneStore } from '../../stores/runeStore'
const ds = useDataStore()

const runes = ref<Rune[]>([])

interface Rune {
    name: string
    wiki: string
    tier: number
    type: string
    img: string
    stats: string
    path: string
}

// Populate runes array from data store on component mount
onMounted(() => {
    runes.value = ds.getRunes() // Ensure `getRunes` returns the array of runes from the store
})
</script>
<!-- 
<template>
    <div class="px-6 py-8">
        <div class="border border-base-300 shadow-warm w-fit rounded-btn h-96 bg-gradient-to-b to-transparent"
            :class="'from-' + pathselect">

            <div class="flex  [&_img]:h-6 bg-opacity-50 transition-colors duration-500">

                <label v-for="(path, index) in uniquePaths" :key="index"
                    class=" bg-base-200/50   shadow-[inset_0px_1px_0px_1px_#00000007] flex grow relative overflow-hidden py-1 items-center  has-[:checked]:border-b-transparent has-[:checked]:bg-transparent border-b-2 border-b-base-300 bg-clip-padding transition-all duration-500">

                    <input class="hidden peer" type="radio" v-model="pathselect" name="path-select" :aria-label="path"
                        :value="path" @change="handlePath()" />

                    <div class="flex items-center justify-center mx-2 size-8 aspect-square">
                        <img :src="'/img/runes/' + path + '.webp'" class="" />
                    </div>
                    <div
                        class="capitalize opacity-0 w-0 peer-checked:w-32 peer-checked:opacity-100 transition-all duration-500 font-bold   mt-1.5 ">
                        {{ path }}</div>

                </label>
            </div>
            <div class='w-full h-0.5 -mt-0.5 gradient'></div>

        </div>
    </div>


</template> -->

<style scoped></style>
