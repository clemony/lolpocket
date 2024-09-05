<<<<<<< HEAD
<script setup lang="ts">
</script>

<template>
=======
<route lang="json">{
    "name": "Runes",
    "alias": "/runes/runes",
    "meta": {
        "title": "Runes",
        "icon": "teenyicons:hexagon-outline"
    }
}</route>
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useDataStore } from "@stores/dataStore";
const ds = useDataStore();

const runes = ref<Rune[]>([]);

// Use a computed property to extract unique paths from the runes array
const uniquePaths = computed(() => {
    const paths = runes.value.map(rune => rune.path);
    return Array.from(new Set(paths)); // Create an array with only unique paths
});

console.log(uniquePaths);
interface Rune {
    name: string;
    wiki: string;
    tier: number;
    type: string;
    img: string;
    stats: string;
    path: string;
}

const pathselect = defineModel({
    default: 'precision',
});

const activePath = ref(pathselect.value);
function handlePath() {

    console.log(activePath);
};
// Populate runes array from data store on component mount
onMounted(() => {
    runes.value = ds.getRunes(); // Ensure `getRunes` returns the array of runes from the store
});


</script>

<template>
    <div class="px-6 py-8">
        <div class="border border-base-300 shadow-warm w-fit rounded-btn h-96">
            <div class="join  [&_img]:h-6  rounded-b-none ">

                <label v-for="(path, index) in uniquePaths" :key="index"
                    class="group join-item btn  flex grow  [&_img]:drop-shadow-sm relative overflow-hidden px-5">

                    <input class="hidden peer" type="radio" v-model="pathselect" name="path-select" :aria-label="path"
                        :value="path" @change="handlePath()" />

                    <img :src="'/img/runes/' + path + '.webp'" />
                    <div
                        class="capitalize opacity-0 w-0  peer-checked:w-32 peer-checked:opacity-100 transition-all duration-500 !font-medium text-base mt-1.5">
                        {{ path }}</div>



                    <div class="w-[105%]  absolute bottom-0 -left-1 h-1.5 p-0 m-0 " :class="'peer-checked:bg-' + path">
                    </div>

                </label>
            </div>

        </div>
    </div>


>>>>>>> 0d8a5d3 (fix?)
</template>

<style scoped></style>