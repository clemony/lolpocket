<route lang="json">{
    "props": true,
    "path": "/pocket/:pocketKey/pocket-items",
    "component": "/src/pages/pocket/pocket-items.vue",
    "meta": {
        "title": "Pocket",
        "icon": "teenyicons:folder-outline"
    }
}</route>

<script setup lang="ts">
import { onMounted, ref, computed, reactive } from 'vue';
import { useItemStore } from "../../stores/itemStore";
import { useDataStore } from "../../stores/dataStore";
import { useGeneralStore } from '../../stores/generalStore';
import { usePocketStore } from '../../stores/pocketStore';

const props = defineProps<{
    pocketKey: string;
}>();
const currentPocket = computed(() => ps.getPocket(props.pocketKey));

const us = useGeneralStore();
const is = useItemStore();

const ps = usePocketStore();
const search = ref();



const handleSearch = computed(() => {
    is.searchFilter = search.value; // Update Pinia store's searchFilter
});


const pocket = ps.getPocket(props.pocketKey);

const animated = ref(false);

function handleClick() {
    animated.value = true;
    if (pocket) {
        is.newSet(pocket.key)
    }
};



const likeText = computed(() => {
    if (is.likedItems.length > 0) {
        return 'Filter Likes';
    }
    if (is.likedItems.length == 0) {
        return 'No liked Items';
    }
});


</script>

<template>


    <Splitpanes id="itemSidebarSplit" :dbl-click-splitter='false'
        class="default-theme px-4 pb-2 w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)]">


        <Pane size="55" min-size="18" max-size="82" class="relative z-0 h-full ">

            <div class="items-start flex w-full gap-2.5 !h-9 flex-wrap pl-1.5 pr-3.5">

                <h2 class="text-xl font-semibold tracking-tight ">
                    Item Sets
                </h2>

                <button :class="{ 'click': animated == true }" @animationend="animated = false" @click="handleClick"
                    class="relative mt-[4px] self-start grid  size-5 group/add *:size-full" title="add set"
                    alt="add set">


                    <Icon icon="teenyicons:add-small-outline"
                        class="absolute self-center transition-all duration-500 group-hover/add:opacity-0" />
                    <icon icon='teenyicons:plus-circle-solid'
                        class="absolute self-center transition-all duration-500 opacity-0 group-hover/add:opacity-100" />
                </button>
            </div>

            <div class="h-full overflow-y-scroll scrollbar-hide ">
                <ItemSets :pocketKey="pocketKey" />

            </div>

        </Pane>



        <Pane v-if="ps.showSidebar == true" size="45" min-size="18" max-size="82"
            class="relative mt-3  transition-all duration-500 z-[2] delay-150 border border-base-300 rounded-box bg-base-100 before:absolute before:w-4 h-[calc(100%-130px)] before:bg-red-700 before:-left-5 before:top-1/2 before:h-9 before:-z-1"
            id="itemGrid">



            <div
                class="absolute z-30 flex items-center content-center w-full h-8 gap-4 border-b border-b-base-300/50 flex-nowrap bg-base-100/95 backdrop-blur-md shadow-warm">

                <SearchBox :search="is.searchFilter" :placeholder="'Search Items...'"
                    @update:search="is.searchFilter = $event" />


                <span class="grow"></span>
                <div class="flex content-center justify-end w-full gap-1.5 px-2 mb-[5px] h-6">

                    <label alt="Filter Likes" :title="likeText"
                        class="px-2 tab swap swap-flip relative *:absolute mr-2 has-[:disabled]:cursor-default">
                        <input type="checkbox" v-model="is.viewLiked" class="hidden"
                            :disabled="is.likedItems.length == 0" />

                        <icon v-if="is.likedItems.length > 0" icon="teenyicons:heart-outline"
                            class="mb-1 swap-off size-4" />
                        <icon v-if="is.likedItems.length > 0" icon="teenyicons:heart-solid"
                            class="mb-1 text-base-content/80 swap-on size-4" />
                        <icon v-else icon='fluent:heart-off-20-regular' class="mb-[4px]  text-base-content/30 size-5" />
                    </label>


                    <FilterPanel />

                </div>

            </div>


            <div class="relative z-[2] overflow-auto h-full px-3 shadow-inset rounded-b-box ">


                <ItemList :pocketKey='pocketKey' />
            </div>

        </Pane>


    </Splitpanes>
</template>



<style scoped></style>