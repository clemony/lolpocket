<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useChampStore } from '../../stores/champStore';
import { VueDraggable } from 'vue-draggable-plus'
import { pocket, usePocketStore } from '../../stores/pocketStore';

const cs = useChampStore();
const ps = usePocketStore();

const props = defineProps<{
    pocketKey: string;
}>()

console.log('pocket key in component: ', props.pocketKey)

// Computed property to retrieve the specific pocket
const thisPocket = computed<pocket | undefined>(() => {
    if (!ps.pockets || !props.pocketKey) return undefined;
    const key = Number(props.pocketKey);
    return ps.pockets.find((pocket: pocket) => pocket.key === key);
});

// Create a reactive array to hold champions for VueDraggable
const champions = ref<any[]>([]);

// Watch for changes in thisPocket and update champions
watch(thisPocket, (newPocket) => {
    champions.value = newPocket?.champions[0]?.champions || []; // Assuming you want the first champions array
}, { immediate: true });

// Sync changes back to the store when champions are updated
watch(champions, (newChampions) => {
    if (thisPocket.value) {
        thisPocket.value.champions[0].champions = newChampions; // Update the original pocket

    }

});

console.log('this pocket: ', thisPocket);
console.log('champions: ', champions.value);

console.log(ps.pockets)


const filteredChamps = ref('');
const quickSearch = ref('');
</script>

<template>




    <VueDraggable v-if="thisPocket" v-model="champions" :delay="0" :animation="300"
        :group="{ name: 'champs', pull: true, put: true, revertClone: false }" :prevent-on-filter='true'
        ghostClass="ghosty" :force-fallback="true" :fallbackTolerance="0" fallbackClass="drag-clone"
        :fallbackOnBody="true"
        class="h-full overflow-x-scroll drag-draggable  !flex-nowrap py-1 items-center overflow-y-hidden px-0.5">


        <div v-for="(champion, index) in champions" :key="champion.name" class=" basis-18 shrink-0">
            <label class="drag-label basis-18 shrink-0" dragClass="setDrag">

                <div class="drag-wrapper ">

                    <img :src="champion.img" class="drag-img scale-[115%]" draggable='false' />

                    <input type="radio" :value="champion" v-model="cs.selectedChampion" class="hidden" />
                </div>

            </label>
        </div>

        <VDropdown theme="detail" alt="Quick Search" :distance="8"
            class=" ghosty shrink-0 drag-label flex w-[68px] h-[68px] !p-0 group/qs  after:grid after:place-content-center after:w-full after:h-full after:content-['+'] after:absolute relative hover:after:text-neutral z-0 hover:after:opacity-60 after:opacity-50 cursor-pointer  overflow-hidden search-drop">


            <div
                class=" group-hover/qs:opacity-40 group-hover/qs:scale-95 scale-105 z-20 opacity-0 select-none bg-[url('/img/ui/frame.webp')] bg-center bg-contain transition-all bg-no-repeat duration-200  w-full h-full brightness-0 cursor-pointer ">

            </div>


            <template #popper>
                <QuickSearch :array="filteredChamps" v-model:quickSearch="quickSearch" />
            </template>
        </VDropdown>
        <!--          <button
            class="group-hover/item:opacity-100 opacity-0 absolute top-0.5 right-0.5 bg-base-100/70 rounded-full"
            alt="Remove item from set" title="Remove">
            <icon icon='teenyicons:x-circle-solid' class="   size-3.5" />
        </button> -->




        <!--         <div class="overflow-hidden slot shadow-lil">
            <div class="flex rounded-md shadow-contrast size-full place-items-center place-content-center ">
                <icon icon="teenyicons:add-solid" class="opacity-50 size-4 drop-shadow-sm" />
            </div>

        </div> -->



    </VueDraggable>

</template>

<style scoped>
.active {}
</style>