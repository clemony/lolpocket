<script setup lang="ts">
import { onMounted, ref, computed, reactive, watch } from 'vue';
import { VueDraggable } from 'vue-draggable-plus'
import { useItemStore } from "../../stores/itemStore";
import { useDataStore } from "../../stores/dataStore";
import { usePocketStore } from '../../stores/pocketStore';
import { ComputedRefSymbol } from '@vue/reactivity';
import { ItemSet } from '../../../types';

const ds = useDataStore();
const is = useItemStore();
const ps = usePocketStore();

const props = defineProps<{
    pocketKey: string,
    set: ItemSet,
}>()

const pocket = ps.getPocket(props.pocketKey);


function handleDragEnd(event) {
    console.log('hi');
    const draggedItem = event.item;
    console.log(draggedItem);
    const targetSet = event.to;

    if (targetSet && targetSet.items) {

        const isDuplicate = targetSet.items.some(item => item.name === draggedItem.name);

        if (isDuplicate) {
            console.log('Duplicate item found. Item not added.');
            event.item.remove();
        } else {

            targetSet.items.push(draggedItem);
        }
    }
}


const quickSearch = ref('');
const returnData = ref([]);
// Use returnData to access the emitted array
watch(returnData, (newVal) => {
    console.log('Received array from child:', newVal);
    is.addToSet(pocket.key, newVal[1], newVal[0]);

});

const filteredItems = computed(() => {
    let filtered = is.items;

    if (quickSearch) {
        const searchTerm = quickSearch.value.toLowerCase();
        filtered = filtered.filter((item: any) =>
            Object.values(item).some((value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm)));
    }
    return filtered;
});

</script>

<template>

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

                    <img :src="`/img/items/${item.id}.webp`" class="drag-img" />

                    <div :key="item.id + 'Count'" :class="{ '!opacity-85': item.count > 1 }"
                        class="absolute rounded-full bg-primary text-primary-content z-30 -right-1.5 -top-1.5 size-6 flex  place-items-center place-content-center font-mono opacity-0 text-sm shadow-warm overflow-hidden ">
                        {{ item.count }} </div>

                </div>


            </label>
            <template #popper :key="item.name + 'Pop'">
                <popItem :item="item" :variant="'remove'" :set="set" :pocketKey="pocketKey" />
            </template>
        </VDropdown>



        <VDropdown theme="detail" alt="Quick Search" :distance="8"
            class="search-drop ghosty drag-label flex basis-16 !p-0 group/qs  after:grid after:place-content-center after:w-full after:h-full after:content-['+'] after:absolute relative hover:after:text-neutral z-0 hover:after:opacity-60 after:opacity-50 !cursor-pointer">


            <div
                class=" group-hover/qs:opacity-40 group-hover/qs:scale-95 scale-105 z-20 opacity-0 select-none bg-[url('/img/ui/frame.webp')] bg-center bg-contain transition-all bg-no-repeat duration-200  w-full h-full brightness-0 cursor-pointer ">

            </div>


            <template #popper>
                <QuickSearch :array="filteredItems" v-model:quickSearch="quickSearch" v-model:returnData="returnData"
                    v-model:thisSet="set.key" type="items" />
            </template>
        </VDropdown>

    </VueDraggable>
</template>

<style scoped></style>