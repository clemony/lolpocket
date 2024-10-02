<script setup lang="ts">
import { onMounted, ref, computed, reactive, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus'
import { useItemStore } from "../../stores/itemStore";
import { Item, useDataStore } from "../../stores/dataStore";
const ds = useDataStore();
const is = useItemStore();

onMounted(() => {
    const ds = useDataStore();
    const is = useItemStore();
    if (is.itemSets.length < 1) {
        is.newSet();
    }

});


const quickSearch = ref('');
const returnData = ref([]);

// Use returnData to access the emitted array
watch(returnData, (newVal) => {
    console.log('Received array from child:', newVal);
    is.addToSet(newVal[0], newVal[1]);

});
/* 
watch(() => returnData,
    (newVal) => {
        console.log(returnData)
        console.log("parentdata: ", newVal);
    },
    { immediate: true }
);
 */
const filteredItems = computed(() => {
    let filtered = is.items;


    // Apply search filter if any
    if (quickSearch) {
        const searchTerm = quickSearch.value.toLowerCase();
        filtered = filtered.filter((item: any) =>
            Object.values(item).some((value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm)));
    }
    return filtered;
});


function handleDragEnd(event) {
    console.log('hi');
    const draggedItem = event.item; // The item being dragged (from source)
    console.log(draggedItem);
    const targetSet = event.to; // The target set where the item is dropped

    // Ensure you have access to the target set's items
    if (targetSet && targetSet.items) {
        // Check if the dragged item already exists in the target set
        const isDuplicate = targetSet.items.some(item => item.name === draggedItem.name);

        if (isDuplicate) {
            // If it's a duplicate, do not add the dragged item
            console.log('Duplicate item found. Item not added.');
            event.item.remove(); // This removes the dragged item if it's a duplicate
        } else {
            // Proceed to add the dragged item if it's not a duplicate
            targetSet.items.push(draggedItem); // Make sure to clone if necessary
        }
    }
}



const viewFilters = defineModel({
    default: 'hideFilters'
});

const dropdownShown = reactive({});



const submitAndClose = (key) => {
    console.log('Form submitted for set key:', key);

    // Close the dropdown for the specific set after submission
    dropdownShown[key] = false;
};

const suggestions = ["Early", "Mid", "Late", "Core", "Offensive", "Defensive", "Utility", "DPS", "Burst", "Situational"];

</script>

<template>


    <VueDraggable tag="div" v-model="is.itemSets" :delay="0" :animation="300" :group="{ name: 'sets' }"
        :prevent-on-filter='true' ghostClass="ghost" :force-fallback="true" :fallbackTolerance="0"
        fallbackClass="drag-clone" :fallbackOnBody="true" class="z-0 h-full">

        <div v-for="set in is.itemSets" dragClass="setDrag" class="grid px-1 pt-1" :key="set.key">

            <div class="flex items-center h-10 gap-3 px-1 mt-1 ">
                <VDropdown theme="detail" class="" v-model:shown="dropdownShown[set.key]">
                    <button class="self-center text-xs opacity-60">{{ set.name || 'Set ' + set.key }}</button>

                    <template #popper>

                        <div class="grid gap-2 rounded-lg ">
                            <div class="relative p-1.5 overflow-hidden border-b border-base-300 ">
                                <input type="text"
                                    class="w-full pt-1 italic bg-transparent rounded select-all input-xs peer focus:not-italic opacity-80 focus:opacity-100"
                                    spellcheck='false' :placeholder="'Set ' + set.key" v-model="set.name"
                                    @keyup.enter="submitAndClose" />

                                <icon icon='ri:edit-fill'
                                    class="opacity-50  size-3.5 absolute right-2.5 top-[11px] peer-focus:opacity-0" />
                                <!--                     <button
                                    class="size-4 opacity-0 peer-focus:opacity-80 *:size-3 absolute right-2 top-[4px] *:absolute "
                                    @">
                                    <icon icon='teenyicons:x-outline' />

                                </button> -->

                                <ClearButton :click="set.name = ''" />
                            </div>

                            <div class="flex flex-wrap gap-2 px-2 pb-3 max-w-44">
                                <button v-close-popper v-for="word in suggestions"
                                    class="text-xs capitalize badge-sm badge-neutral badge hover:badge-ghost"
                                    @click="set.name = word">
                                    {{ word }}
                                </button>

                            </div>
                        </div>
                    </template>
                </VDropdown>
                <span class="self-start border-b h-1/2 grow border-base-300"></span>

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
                                    alt="Delete Set" @click="is.deleteSet(set.key)" :disabled="is.itemSets.length == 1">
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






            <VueDraggable ref="el" v-model="set.items" :group="{
                name: 'items', pull: true, put: ['items'],
                revertClone: false
            }" :scroll="false" :bubbleScroll="false" :key="set.key" :fallbackTolerance="0" fallbackClass="drag-clone"
                :force-fallback="true" :fallbackOnBody="true" @end="handleDragEnd"
                class="!p-1 drag-draggable item overflow-hidden  !justify-start scrollbar-hide">


                <VDropdown v-for="item in set.items" :key="item.id" :overflow-padding="20" :shift="true" theme="detail"
                    :distance="6" @click.right.prevent="" :ref="item.name" class="relative max-w-[64px] max-h-[64px] ">

                    <label class="!overflow-hidden drag-label">
                        <div class="!overflow-hidden drag-wrapper">

                            <img :src="item.img" class="drag-img" />

                            <div :key="item.id + 'Count'" :class="{ '!opacity-85': item.count > 1 }"
                                class="absolute rounded-full bg-primary text-primary-content z-30 -right-1.5 -top-1.5 size-6 flex  place-items-center place-content-center font-mono opacity-0 text-sm shadow-warm overflow-hidden ">
                                {{ item.count }} </div>

                        </div>


                    </label>
                    <template #popper :key="item.name + 'Pop'">
                        <ItemPop :item="item" :variant="'remove'" :set="set" />
                    </template>
                </VDropdown>



                <VDropdown theme="detail" alt="Quick Search" :distance="8"
                    class="search-drop ghosty drag-label flex basis-16 !p-0 group/qs  after:grid after:place-content-center after:w-full after:h-full after:content-['+'] after:absolute relative hover:after:text-neutral z-0 hover:after:opacity-60 after:opacity-50 !cursor-pointer">


                    <div
                        class=" group-hover/qs:opacity-40 group-hover/qs:scale-95 scale-105 z-20 opacity-0 select-none bg-[url('/img/ui/frame.webp')] bg-center bg-contain transition-all bg-no-repeat duration-200  w-full h-full brightness-0 cursor-pointer ">

                    </div>


                    <template #popper>
                        <QuickSearch :array="filteredItems" v-model:quickSearch="quickSearch"
                            v-model:returnData="returnData" v-model:thisSet="set.key" />
                    </template>
                </VDropdown>

            </VueDraggable>

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