<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import {
    type DraggableEvent,
    type UseDraggableReturn,
    VueDraggable
} from 'vue-draggable-plus'
import { useItemStore } from "../../stores/itemStore";
import { useDataStore } from "../../stores/dataStore";
import { useUserStore } from '../../stores/userStore';
const us = useUserStore();
const ds = useDataStore();
const is = useItemStore();



const quickSearch = ref('');
const filteredItems = computed(() => {
    let filtered = is.items;

    // Apply search filter if any
    if (quickSearch) {
        const searchTerm = quickSearch.value.toLowerCase();
        filtered = filtered.filter((item) => Object(item).some((value) => typeof value === 'string' && value.toLowerCase().includes(searchTerm)));
    }
    return filtered;
});


const disabled = ref(false)

const onUpdate = () => {
    console.log('update')
}

onMounted(() => {
    const ds = useDataStore();
    const is = useItemStore();
    if (is.itemSets.length < 1) {
        is.newSet();
    }

});

const viewFilters = defineModel({
    default: 'hideFilters'
});


function onAdd() {
    console.log('add')
}
function remove() {
    console.log('remove')
}

const isDropdownShown = ref(false); // Manage dropdown visibility state
const set = ref({ key: 1, name: '' }); // Dummy set object for demonstration

const submitAndClose = () => {
    console.log('Form submitted with:', set.value.name);

    // Close the dropdown after submission
    isDropdownShown.value = false;
};

const suggestions = ["Early", "Mid", "Late", "Core", "Offensive", "Defensive", "Utility", "DPS", "Burst", "Situational"];

const selectedSuggestion = ref('');
</script>

<template>


    <VueDraggable tag="div" v-model="is.itemSets" :delay="0" :animation="300" :group="{ name: 'sets' }"
        :prevent-on-filter='true' ghostClass="ghost" @update="onUpdate" @add="onAdd" @remove="remove"
        :force-fallback="true" :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true"
        class="z-0 h-full">

        <div v-for="set in is.itemSets" dragClass="setDrag" class="grid px-3" :key="set.key">

            <!-- 
                <div class="h-full cursor-move">
                    <icon icon='material-symbols-light:drag-handle' class="pointer-events-none size-7 opacity-20" />
                </div> -->

            <div class="flex items-center h-10 gap-3 px-1 mt-1 ">
                <VDropdown theme="overlay" class="" v-model:shown="isDropdownShown">
                    <button class="self-center text-xs opacity-60">{{ set.name || 'Set ' + set.key }}</button>

                    <template #popper>

                        <div class="grid gap-2 rounded-lg ">
                            <div class="relative p-1.5 overflow-hidden border-b border-neutral-500 ">
                                <input type="text"
                                    class="w-full pt-1 italic bg-transparent rounded select-all input-xs peer focus:not-italic opacity-80 focus:opacity-100"
                                    spellcheck='false' :placeholder="'Set ' + set.key" v-model="set.name"
                                    @keyup.enter="submitAndClose" />

                                <icon icon='ri:edit-fill'
                                    class="opacity-50  size-3.5 absolute right-2.5 top-[11px] peer-focus:opacity-0" />
                                <button
                                    class="size-4 opacity-0 peer-focus:opacity-80 *:size-3 absolute right-2 top-[4px] *:absolute "
                                    @click="set.name = ''">
                                    <icon icon='teenyicons:x-outline' />

                                </button>
                            </div>

                            <div class="flex flex-wrap gap-2 px-2 pb-3 max-w-44">
                                <button v-close-popper v-for="word in suggestions"
                                    class="text-xs  badge-sm badge-primary badge opacity-70 capitalize hover:badge-ghost has-[:checked]:badge-ghost"
                                    @click="set.name = word">
                                    {{ word }}
                                </button>

                            </div>
                        </div>
                    </template>
                </VDropdown>
                <span class="self-start border-b h-1/2 grow border-base-300"></span>

                <VDropdown theme="overlay" placement="left-start" class="arrow ">

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
                                    class="flex items-center gap-2 font-normal  !justify-start  px-3 btn btn-xs text-xs btn-ghost hover:bg-neutral "
                                    alt="Clear Items" @click="is.resetItems(set.key)">
                                    <icon icon='material-symbols-light:reset-focus-sharp' class="-ml-1 size-5" />
                                    <span>Clear All Items</span>
                                </button>
                                <div class="border-b border-neutral-500"></div>
                                <button
                                    class="relative flex !justify-start items-center gap-2  px-3  btn btn-xs text-xs btn-ghost group/trash disabled:bg-transparent disabled:opacity-60 disabled:cursor-not-allowed font-normal !text-neutral-content"
                                    alt="Delete Set" @click="is.deleteSet(set.key)" :disabled="is.itemSets.length == 1">
                                    <icon icon='ep:folder-delete'
                                        class="object-center group-disabled/trash:opacity-0 size-4.5 -ml-0.5" />
                                    <icon icon="ep:folder"
                                        class="absolute opacity-0 group-disabled/trash:opacity-60 size-4.5 -ml-0.5" />
                                    <span> Delete Set</span>
                                </button>


                            </div>

                            <!--                                 <button
                                    class="shadow-none  absolute bottom-3 right-1.5 transition-opacity duration-300  peer-focus:opacity-100 text-base-content/60 hover:text-base-content/90 opacity-0 peer-focus:z-10 z-0"
                                    alt="Clear Text" title="Clear Text">

                                    <icon icon='teenyicons:x-circle-solid' class=" size-3" />
                                </button> -->
                        </div>

                    </template>

                </VDropdown>





            </div>






            <VueDraggable ref="el" v-model="set.items" :group="{
                name: 'items', pull: true, put: ['items'],
                revertClone: false
            }" :force-fallback="true" :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true"
                @remove="remove" class="!p-1 drag-draggable item overflow-hidden">


                <VDropdown v-for="item in set.items" :key="item.id" :overflow-padding="20" :shift="true" theme="detail"
                    :distance="6" @click.right.prevent="" :ref="item.name" class="relative max-w-[64px] max-h-[64px]">

                    <label class="drag-label">
                        <div class="drag-wrapper">
                            <input type="radio" :value="item" v-model="is.selectedItem" class="hidden peer" />
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


                <!--          <button
                    class="group-hover/item:opacity-100 opacity-0 absolute top-0.5 right-0.5 bg-base-100/70 rounded-full"
                    alt="Remove item from set" title="Remove">
                    <icon icon='teenyicons:x-circle-solid' class="   size-3.5" />
                </button> -->

                <VDropdown theme="overlay" class="p-1  ghosty drag-label !w-[64px] ">
                    <div
                        class="grid items-center border-none !pointer-events-auto drag-wrapper opacity-40 place-content-center w-full h-full">
                        +
                    </div>

                    <template #popper>
                        <div class="p-2">
                            <input placeholder="search..." v-model="quickSearch" spellcheck="false"
                                class="w-full h-full text-xs italic !outline-none !outline-0 !outline-transparent ring-0 focus:not-italic bg-transparent placeholder:text-xs "
                                @keydown.enter.prevent
                                @click="console.log('qs: ', quickSearch, 'filtI: ', filteredItems)" />
                            <ul v-if="quickSearch" class="">
                                <li v-for="item in filteredItems" :key="item.id">
                                    {{ item.name }}
                                </li>
                            </ul>
                        </div>
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