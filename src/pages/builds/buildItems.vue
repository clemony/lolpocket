<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import {
    type DraggableEvent,
    type UseDraggableReturn,
    VueDraggable
} from 'vue-draggable-plus'
import { useBStore } from "../../stores/buildStore";
import { useDataStore } from "../../stores/dataStore";

// Define emit for communicating with the parent component
/* const emit = defineEmits(['open-sidebar']); */

// Function to handle opening the sidebar and passing the component name
/* const openChampionGrid = () => {
    emit('open-sidebar', 'ChampionGrid');
};
 */

const ds = useDataStore();
const bs = useBStore();





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
    const bs = useBStore();
    if (bs.buildSets.length < 1) {
        bs.newSet();
    }
});
</script>

<template>
    <Splitpanes id="buildSplit" class="default-theme px-6 pb-4 w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)]">
        <Pane size="50" class="rounded-box !bg-base-100/90 border border-base-300 shadow-warm relative h-full px-4">

            <div
                class=" border-b-base-300 border-b backdrop-blur-md absolute z-1 top-0 left-0 bg-base-100/90  items-center flex w-full  justify-end gap-4 !h-fit flex-wrap  py-1 px-4">

                <h2 class=" font-semibold text-base grow justify-start">
                    Sets
                </h2>

                <button
                    class="items-center btn  btn-xs btn-outline border-none rounded-md  h-full  relative font-normal"
                    @click="bs.newSet">


                    <Icon icon="teenyicons:add-solid" class="self-center size-3 -mt-[2px]" />
                    new set

                </button>
            </div>


            <VueDraggable class="pt-11 " tag="div" v-model="bs.buildSets" group="sets" dragClass="setDrag"
                direction="vertical">
                <div v-for="set in bs.buildSets" class="group">
                    <div :key="set.key"
                        class="input input-xs !outline-none !ring-0 !border-0 flex items-center gap-4 bg-transparent mb-4 p-0 ">



                        <div class="h-full cursor-move">
                            <icon icon='material-symbols-light:drag-handle'
                                class="size-7 opacity-20 pointer-events-none" handle />
                        </div>

                        <div class="flex grow relative h-fit group">
                            <input type="text"
                                class="p-0  mt-2 mb-1 select-all border-b border-transparent focus:border-base-200 text-[0.72rem]] grow peer transition-colors duration-300 font-mono"
                                :placeholder="'Set ' + set.key" :value="set.name" />

                            <button
                                class=" peer-hover:opacity-100 opacity-0  shadow-none  absolute bottom-3 right-1.5 text-base-content/50 transition-opacity duration-300  peer-focus:opacity-0 peer-focus:z-0 z-10"
                                alt="Edit Name" title="Edit Name">
                                <icon icon='ic:baseline-edit' class="size-3.5 " />

                            </button>


                            <button
                                class="shadow-none  absolute bottom-3 right-1.5 transition-opacity duration-300  peer-focus:opacity-100 text-base-content/60 hover:text-base-content/90 opacity-0 peer-focus:z-10 z-0"
                                alt="Clear Text" title="Clear Text">

                                <icon icon='teenyicons:x-circle-solid' class="   size-3" />
                            </button>

                        </div>



                        <div class="grid grid-cols-2 *:aspect-square mb-1">
                            <button
                                class="size-5 hover:bg-base-200 rounded-btn text-base-content/80 transition-opacity duration-300 peer-focus:opacity-0 grid place-content-center"
                                alt="Clear Items" title="Clear Items" @click="bs.resetItems(set.key, $event)">
                                <icon icon='teenyicons:clockwise-outline' class="size-[0.8rem] pb-[2px]" />
                            </button>

                            <button
                                class=" size-5 hover:bg-base-200 rounded-btn
             text-base-content/80 transition-opacity duration-300 peer-focus:opacity-0 ml-1.5 disabled:bg-transparent  relative grid place-content-center disabled:opacity-40"
                                alt="Delete Set" title="Delete Set" @click="bs.deleteSet(set.key)"
                                :disabled="bs.buildSets.length == 1">
                                <icon icon='ph:trash-light' class="size-3.5 object-center" />
                            </button>
                        </div>

                    </div>





                    <VueDraggable ref="el" v-model="set.items.items" group="items" @update="onUpdate"
                        class="item-drop-list w-full flex flex-wrap gap-4 place-items-start place-content-start ">



                        <div v-for="item in set.items.items" :key="item.id"
                            class="slot shadow-lil  relative group/item">
                            <img :src="item.img"
                                class="shadow-contrast size-full rounded-md flex place-items-center place-content-center pointer-events-none" />
                            <!--          <button
                                    class="group-hover/item:opacity-100 opacity-0 absolute top-0.5 right-0.5 bg-base-100/70 rounded-full"
                                    alt="Remove item from set" title="Remove">
                                    <icon icon='teenyicons:x-circle-solid' class="   size-3.5" />
                                </button> -->
                            <div :key="item.id + 'Count'" :class="{ '!opacity-85': item.count > 1 }"
                                class="absolute rounded-full bg-primary text-primary-content z-30 -right-1.5 -top-1.5 size-6 flex  place-items-center place-content-center font-mono opacity-0 text-sm shadow-warm">
                                {{ item.count }} </div>



                        </div>


                        <div class="slot shadow-lil overflow-hidden">
                            <div
                                class="shadow-contrast size-full rounded-md flex place-items-center place-content-center ">
                                <icon icon="teenyicons:add-solid" class="size-4 opacity-50 drop-shadow-sm" />
                            </div>

                        </div>


                    </VueDraggable>

                    <div class="border-b border-base-300 mt-7 mb-3"></div>
                </div>
            </VueDraggable>
        </Pane>


        <!--     /* -------------------------------------------------------------------------- */
         /*                                 PANE TWOOOOOOOO                            */
         /* -------------------------------------------------------------------------- */ -->


        <Pane size="50"
            class="max-h-full min-w-[105px] !bg-base-100/90  shadow-warm rounded-box border border-base-300 relative  ">

            <div
                class=" border-b-base-300 border-b backdrop-blur-md absolute z-1 top-0 left-0 bg-base-100/90  items-center flex w-full justify-end gap-4 !h-fit  px-2 py-1 z-10 flex-nowrap">

                <div class="flex justify-start w-full">
                    <h2 class=" font-semibold text-base  mx-2 justify-start">Items</h2>




                    <div class="group/search peer relative w-8  gap-3 h-[24px] rounded-btn border border-transparent focus-hover justify-end flex transition-all duration-700 content-center
                        overflow-hidden [&_button]:opacity-0">


                        <Icon icon="teenyicons:search-outline"
                            class="absolute text-base-content/60 bg-base-100 size-4 left-1 top-[2px] pointer-events-none " />
                        <span class="size-4 "></span>


                        <input placeholder="search..." v-model="bs.searchFilter" spellcheck="false"
                            class="w-full h-full text-xs italic !outline-none !outline-0 !outline-transparent ring-0 focus:not-italic ml-3 text-right placeholder:text-xs placeholder:opacity-0 "
                            @keydown.enter.prevent v-shortkey.focus="['meta' || 'ctrl', 'i']" />



                        <button :class="{ 'opacity-100': bs.searchFilter != '' }"
                            class="opacity-0 transition-all duration-150 hover:text-base-content/80  text-base-content/60 z-30 bg-base-100  mr-1 pointer-events-auto"
                            @click="console.log(bs.searchFilter = '')">
                            <Icon icon="teenyicons:x-circle-solid" class='size-3' />
                        </button>


                    </div>
                    <span class="grow "></span>
                </div>
                <Sort />
                <StatFilters />



                <div class="dropdown ">
                    <div tabindex="0" role="button"
                        class="items-center btn  btn-xs btn-outline border-none rounded-md  h-full  relative font-normal flex-nowrap text-nowrap">

                        <div :class="{ 'opacity-90': bs.tierFilters.length > 0 }"
                            class="opacity-0 filter-on rounded-full size-2 after:size-2 after:absolute after:top-0 after:-right-[0px] after:bg-success  bg-success absolute top-[3px] right-[0px] after:rounded-full after:animate-ping">
                        </div>

                        Type
                        <Icon icon="teenyicons:down-small-outline" />

                    </div>

                    <ul tabindex="0"
                        class="dropdown-content backdrop-blur-md border border-base-300 menu bg-base-100/90 rounded-box z-10 w-52 p-2 top-[29px] -right-[10px] shadow [&_label]:py-1   [&_span]:text-nowrap rounded-t-none rounded-b-lg">

                        <li class="disabled pointer-events-none flex">
                            <div class="flex items-center">
                                <span class="grow text-xs flex align-middle font-semibold">FILTER / TYPE</span>
                                <button
                                    class="btn btn-outline btn-neutral btn-square border-none  pointer-events-auto btn-xs"
                                    alt="Reset Filters" title="Reset Filters" @click="bs.tierFilters.length = 0">
                                    <Icon icon="teenyicons:clockwise-outline"
                                        class="self-center size-3.5 -mt-[2px] p-0" />
                                </button>
                            </div>
                        </li>

                        <li v-for="tier in tiers">
                            <label>
                                <input type="checkbox" :value="tier" :id="tier" v-model="bs.tierFilters"
                                    class="checkbox checkbox-xs mr-2" />
                                {{ tier }}
                            </label>

                        </li>
                    </ul>
                </div>






            </div>
            <div class="overflow-y-auto">
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
.focus-hover:focus-within {
    @apply [&_button]:opacity-100 grow border-base-300 bg-base-100/50 shadow-inner ring-offset-base-content/40;
}
</style>