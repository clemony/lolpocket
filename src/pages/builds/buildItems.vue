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





interface Item {
    name: string;
    img: string;
    buy: number;
    sell: number;
    stats: string;
    passive: string;
    active: string;
    type: string;
    tier: string;
}


const tiers = ds.uniqueTiers;


const el = ref<UseDraggableReturn>()
const disabled = ref(false)
function pause() {
    el.value?.pause()
}

function start() {
    el.value?.start()
}

function onStart(event: DraggableEvent) {
    console.log('start drag')
}

function onEnd(event: DraggableEvent) {
    console.log('end drag')
}
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
</script>

<template>
    <Splitpanes id="itemSidebarSplit" class="default-theme px-6  w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)]">


        <Pane size="55" min-size="18" max-size="82" class="relative z-0 h-full ">

            <div class="items-center flex w-full gap-4 !h-9 flex-wrap pl-1.5 pr-2.5">

                <h2 class="text-xl font-semibold grow">
                    Item Sets
                </h2>

                <button class="relative items-center font-normal border-none btn-sm btn btn-outline btn-square"
                    title="add set" alt="add set" @click="is.newSet">


                    <Icon icon="ph:rows-plus-bottom-thin" class="self-center size-6 " />

                </button>


            </div>

            <div
                class="h-full overflow-y-scroll scrollbar-hide before:absolute before:z-10 before:w-full before:h-full before:bg-[linear-gradient(to_bottom,_oklch(var(--b1))_0%,_rgba(255,_255,_255,_0)_10%,_rgba(255,_255,_255,_0)_50%,_rgba(255,_255,_255,_0)_90%,_oklch(var(--b1))_100%)] before:pointer-events-none before:top-9 before:left-0 before:brightness-[98%] pt-6">
                <ItemSets />

            </div>


        </Pane>



        <Pane v-if="us.showSidebar == true" size="45" min-size="18" max-size="82"
            class="transition-all duration-500 delay-150 ">





            <div
                class="h-full px-3 overflow-y-scroll !bg-base-100/90  shadow-warm rounded-box border border-base-300 relative">

                <div
                    class=" border-b-base-300 border-b backdrop-blur-md absolute z-1 top-0 left-0 bg-base-100/90  items-center flex w-full justify-end gap-4 !h-fit  px-2 py-1 z-10 flex-nowrap">

                    <div class="flex items-center justify-start ">
                        <span
                            class="flex items-center px-3 transition-all duration-700 gap-2  h-7   [&_button]:opacity-0 group/search peer  relative">

                            <Icon icon="teenyicons:search-outline"
                                class=" pointer-events-none text-base-content/80 size-3.5 -mt-[2px] -ml-1 absolute" />

                            <input placeholder="Items" v-model="is.searchFilter" spellcheck="false"
                                class="w-full h-full text-xs !outline-none !outline-0 !outline-transparent ring-0  font-medium placeholder:text-base-content p-0 bg-transparent placeholder:text-xs select-all border border-transparent focus-within:border-b-base-300 pl-5"
                                @keydown.enter.prevent />



                            <button :class="{ 'opacity-100': is.searchFilter != '' }"
                                class="absolute z-30 mr-1 transition-all duration-150 opacity-0 pointer-events-auto top-1 right-1 hover:text-base-content/80 text-base-content/60 bg-base-100"
                                @click="is.searchFilter = ''">
                                <Icon icon="teenyicons:x-outline" class='size-3' />
                            </button>


                        </span>

                    </div>
                    <span class="grow"></span>
                    <div class="flex items-center justify-end [&_button]:px-1.5 join">


                        <Sort />

                        <StatFilters />
                        <TierFilters />

                    </div>



                </div>

                <ItemGrid />
            </div>
        </Pane>


    </Splitpanes>
</template>



<style scoped>
.setDrag {
    @apply bg-base-100 rounded-box border-base-300 border p-4;
}

.focus-hover:focus,
.focus-hover:hover,
.focus-hover:focus-within,
.focus-hover:has(input:not(:placeholder-shown)) {
    @apply [&_button]:opacity-100 grow border-base-300 bg-base-100/50 shadow-inner ring-offset-base-content/40;
}

.collapse-title,
.collapse-title:where(.collapse > input[type="checkbox"]),
.collapse-title:where(.collapse > input[type="radio"]) {
    min-height: 1px !important;
}

.collapse-title {
    min-height: 1px !important;
}
</style>