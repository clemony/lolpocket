<script setup lang="ts">
import { onMounted, ref, computed, reactive, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus'
import { useItemStore } from "../../stores/itemStore";
import { useDataStore } from "../../stores/dataStore";
import { usePocketStore } from '../../stores/pocketStore';
import { ComputedRefSymbol } from '@vue/reactivity';
import { ItemSet } from '../../../types';
import ItemsetItems from './itemset-items.vue';
import { generateRandomName } from '../../script/keygen';
const ds = useDataStore();
const is = useItemStore();





const ps = usePocketStore();

const props = defineProps<{
    pocketKey: string;
}>()

const pocketKey = props.pocketKey;


const pocket = ps.getPocket(pocketKey);
console.log('okl', pocket);


const items = ref<any[]>([]);

if (pocket) {
    watch(pocket.items[0], (newPocket) => {
        pocket.items[0].itemSets = newPocket.itemSets || [];
    }, { immediate: true });


    watch(items, (newItemSets) => {
        if (pocket) {
            pocket.items[0].itemSets = newItemSets;
        }
    });

}

const selectedStarIndex = ref(0);

const findStarredIndex = () => {
    if (pocket) {
        const starredSet = pocket.items[0]?.starred?.[0];
        if (starredSet) {
            // Find the index of the starred set in the itemSets array
            const index = pocket.items[0].itemSets.findIndex(itemSet => itemSet.key === starredSet.key);
            if (index !== -1) {
                selectedStarIndex.value = index;
            }
        }
    }
};

// Call this method when the pocket is loaded or updated
findStarredIndex();

function updateStarredItemSet(newStarredItemSet: ItemSet) {
    const pocket = ps.pockets.find(p => p.key === pocketKey);

    if (pocket) {
        // Ensure the starred array is initialized
        if (!pocket.items[0].starred) {
            pocket.items[0].starred = [];
        }

        // Clear existing starred sets and add the new one
        pocket.items[0].starred.splice(0, pocket.items[0].starred.length, newStarredItemSet);
        ps.$persist;
    } else {
        console.error(`Pocket with key ${pocketKey} not found.`);
    }
}







const dropdownShown = reactive({});



const submitAndClose = (key) => {
    console.log('Form submitted for set key:', key);
    dropdownShown[key] = false;
};



const suggestions = ["Early", "Mid", "Late", "Core", "Offensive", "Defensive", "Utility", "DPS", "Burst", "Situational"];


onMounted(() => {
    if (pocket && pocket.items[0].itemSets.length == '') {
        is.newSet();
    }
});


</script>

<template>


    <VueDraggable v-if="pocket" tag="div" v-model="pocket.items[0].itemSets" :delay="0" :animation="300"
        :group="{ name: 'sets' }" :prevent-on-filter='true' ghostClass="ghost" :force-fallback="true"
        :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true" class="z-0 h-full">

        <div v-for="(set, index) in pocket.items[0].itemSets" dragClass="setDrag" class="grid px-1 pt-1" :key="set.key">

            <div class="flex items-center h-10 gap-3 px-1 mt-1 ">
                <VDropdown theme="detail" class="" v-model:shown="dropdownShown[set.key]">
                    <button class="self-center text-xs capitalize opacity-60">{{ set.name }}</button>

                    <template #popper>

                        <div class="grid gap-2 rounded-lg ">
                            <div class="relative p-1.5 overflow-hidden border-b border-base-300 ">
                                <input type="text"
                                    class="w-full pt-1 italic capitalize bg-transparent rounded select-all input-xs peer focus:not-italic opacity-80 focus:opacity-100"
                                    spellcheck='false' :placeholder="set.name" @keyup.enter="submitAndClose" />

                                <icon icon='ri:edit-fill'
                                    class="opacity-50  size-3.5 absolute right-2.5 top-[11px] peer-focus:opacity-0" />


                            </div>

                            <div class="flex flex-wrap gap-2 px-2 pb-3 max-w-44">
                                <button v-close-popper v-for="word in suggestions"
                                    class="text-xs capitalize badge-sm badge-neutral badge hover:badge-ghost"
                                    @click="set.name = word">
                                    {{ word }}
                                </button>
                                <button v-close-popper
                                    class="text-xs capitalize badge-sm badge hover:badge-ghost gradient ![background-size:100%]"
                                    @click="set.name = generateRandomName() + ' Set'">
                                    Random
                                </button>

                            </div>


                        </div>
                    </template>
                </VDropdown>
                <span class="self-start border-b h-1/2 grow border-base-300"></span>

                <label class="group/star *:transition-all  *:duration-300  h-full w-4  *:h-full grid place-content-center  cursor-pointer relative 
              
                ">

                    <input type="radio" name="starSet" :value="set" class="hidden peer"
                        v-model="pocket.items[0].starred" @change="console.log(pocket.items[0].starred)"
                        :checked="pocket.items[0].starred.key == set.key" />
                    <icon icon="iconoir:star-outline"
                        class="absolute z-10 opacity-20 group-hover/star:opacity-15 peer-checked:opacity-20" />
                    <icon icon='iconoir:star-solid'
                        class="absolute z-0 opacity-0 group-hover/star:opacity-70 peer-checked:opacity-30" id="solid" />

                </label>


                <VDropdown theme="detail" placement="left-start" class="arrow ">

                    <button class="relative flex items-center justify-center group/menu size-4">
                        <icon icon='teenyicons:cog-outline'
                            class="absolute opacity-50 i1 size-3 group-hover/menu:opacity-0" />
                        <icon icon='teenyicons:cog-solid'
                            class="absolute opacity-0 i2 size-3 group-hover/menu:opacity-80" />
                    </button>

                    <template #popper>
                        <div
                            class="relative items-center text-xs rounded-lg text-baseline shadow-[inset_1px_1px_10px_10px,_rgba(255,_255,_255,_0.9)] p-1 ">
                            <div class="grid items-center gap-1 flex-nowrap">

                                <button
                                    class="flex items-center gap-3   !justify-start  px-3 btn btn-xs text-xs btn-ghost hover:bg-base-200"
                                    alt="Clear Items" @click="is.resetItems(set.key)">
                                    <icon icon='ph:eraser' class="-ml-1 size-4" />
                                    <span>Clear Items</span>
                                </button>
                                <div class="border-b border-base-200"></div>
                                <button
                                    class="relative flex !justify-start items-center gap-3  px-3  btn btn-xs text-xs btn-ghost group/trash disabled:bg-transparent  disabled:cursor-not-allowed  hover:bg-base-200"
                                    alt="Delete Set" @click="is.deleteSet(pocket.key, set.key)"
                                    :disabled="is.itemSets.length == 1">
                                    <icon icon='iconoir:bin-full'
                                        class="object-center -ml-1 group-disabled/trash:opacity-0 size-4" />
                                    <icon icon="iconoir:bin"
                                        class="absolute -ml-1 opacity-0 group-disabled/trash:opacity-60 size-4" />
                                    <span> Delete Set</span>
                                </button>
                            </div>
                        </div>
                    </template>

                </VDropdown>





            </div>


            <ItemsetItems :pocketKey="pocketKey" :set="set" />




        </div>
    </VueDraggable>
</template>

<style scoped>
.v-popper--shown {
    .i1 {
        @apply opacity-0;
    }

    .i2 {
        @apply opacity-80;
    }
}



.ghost {
    @apply w-[96%] rounded-box bg-base-200 m-4;
}
</style>