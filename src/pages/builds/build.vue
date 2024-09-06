<route lang="json">{
    "name": "Build",
    "alias": "/build",
    "path": "/build",
    "meta": {
        "title": "Build",
        "icon": "teenyicons:folder-outline"
    },
    "children": [
        {
            "path": "sidebar",
            "component": "championGrid",
            "name": "Champions"
        }
    ]
}</route>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Drag, DropList } from "vue-easy-dnd";
import { useBStore } from "../../stores/buildStore";
import { useDataStore } from "../../stores/dataStore";

// Define emit for communicating with the parent component
const emit = defineEmits(['open-sidebar']);

// Function to handle opening the sidebar and passing the component name
const openChampionGrid = () => {
    emit('open-sidebar', 'ChampionGrid');
};


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

function deleteItemsInSet() {
    this.buildSets.items = [''];
}

function onInsert(set, event) {
    if (!set.items.items) {
        console.error('Items array is undefined for set:', set);
    } else {
        set.items.items.splice(event.index, 0, event.data); // Insert at the specified index
        console.log('Inserted item at index:', event.index, 'data:', event.data);
    }
}

function onReorder(set, event) {
    // Apply reorder operation using Vue's reactivity system
    set.$event.apply(set.items);
}

/* function remove(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
    items.value.splice(event.index, 0, event.data);
}

 */
//const items = ref<Item[]>([]);
const tiers = ds.uniqueTiers;



const itemFilters = ref([]);
const tierFilters = ref([]);
const itemCategories = ref([]);




onMounted(() => {
    const ds = useDataStore();
    const bs = useBStore();
    if (bs.buildSets.length < 1) {
        bs.newSet();
    }
    console.log('build sets: ', bs.buildSets);
    // items.value = ds.getItems(); // Ensure `getRunes` returns the array of runes from the store

});



</script>

<template>
    <div class="w-full   py-4 grid grid-cols-2 items-center content-center ">
        <div class="pb-0  ml-6 mr-5 flex gap-2">

            <Icons />

            <div class="has-[:focus]:border-b-base-300 grow border-b-transparent border-b">
                <input type="text" placeholder="Build Name" spellcheck='false'
                    class="input input-ghost focus:bg-transparent font-bold tracking-tight text-xl pl-0 mr-4 border-none rounded-none focus:border-none  placeholder:italic placeholder:font-light" />
            </div>


            <div class="join *:text-xs">
                <input class="join-item btn btn-sm" type="radio" name="options" aria-label="Items" />
                <input class="join-item btn btn-sm" type="radio" name="options" aria-label="Runes" />

            </div>



            <button class="btn btn-sm btn-square p-0 " alt="Create export for League Client"
                title="Create export for League Client" onclick="my_modal_2.showModal()">
                <Icon icon="teenyicons:upload-outline" class="" />
            </button>
            <dialog id="my_modal_2" class="modal">
                <div class="modal-box m-auto">
                    <h3 class="text-lg font-bold">Hello!</h3>
                    <p class="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" class="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>



        </div>

        <div class="px-4 p flex justify-end">
            <div class="dropdown dropdown-end">
                <label role="button" for="my-drawer-4"
                    class=" drawer-button cursor-pointer hover:bg-transparent avatar-group -space-x-6 rtl:space-x-reverse w-fit "
                    @click="openChampionGrid">
                    <div v-for="champion in bs.buildChampions"
                        class="avatar hover:border-base-300 hover:drop-shadow-sm">
                        <div class="w-12">
                            <img :src="champion" class="scale-110" />
                        </div>
                    </div>

                    <div class="avatar placeholder">
                        <div class="bg-neutral text-neutral-content w-12">

                            <Icon icon="teenyicons:add-solid" />
                        </div>
                    </div>
                </label>





            </div>

        </div>
    </div>

    <button class="absolute right-0 h-[calc(100%-130px)] p-1">
        <icon icon='teenyicons:right-outline' />
    </button>

    <!--     /* -------------------------------------------------------------------------- */
         /*                                 SPLIT START                                */
         /* -------------------------------------------------------------------------- */ -->

    <Splitpanes id="buildSplit" class="default-theme px-6 pb-4 w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)]">
        <Pane size="50" class="rounded-box !bg-base-100/90 border border-base-300 shadow-warm relative h-full px-4">

            <div
                class=" border-b-base-300 border-b backdrop-blur-md absolute z-1 top-0 left-0 bg-base-100/90  items-center flex w-full  justify-end gap-4 !h-fit flex-wrap  py-1 px-4">

                <h2 class=" font-semibold text-base grow justify-start">Sets</h2>

                <button
                    class="items-center btn  btn-xs btn-outline border-none rounded-md  h-full  relative font-normal"
                    @click="bs.newSet">


                    <Icon icon="teenyicons:add-solid" class="self-center size-3 -mt-[2px]" />
                    new set

                </button>
            </div>
            <div class="pt-11 ">
                <div v-for="set in bs.buildSets" class="group">
                    <div :key="set.key"
                        class="input input-xs !outline-none !ring-0 !border-0 flex items-center gap-4 bg-transparent mb-5 p-0 ">

                        <div class="flex grow relative h-fit group">
                            <input type="text"
                                class="p-0 py-2 mt-2 mb-1 select-all border-b border-transparent focus:border-base-200 text-[0.72rem]] font-mono grow peer transition-colors duration-300"
                                :placeholder="'Set ' + set.key" :value="set.name" />

                            <button
                                class="btn  btn-square
                         btn-xs border-0 peer-hover:opacity-100 opacity-0 bg-transparent shadow-none hover:bg-transparent absolute bottom-[15px] right-3 text-base-content/50 transition-opacity duration-300  peer-focus:opacity-0 peer-focus:z-0 z-10"
                                alt="Edit Name" title="Edit Name">
                                <icon icon='ic:baseline-edit' class="size-3.5 " />

                            </button>


                            <button
                                class="btn  btn-square
                     btn-xs border-0  bg-transparent shadow-none hover:bg-transparent absolute bottom-[15px] right-3 transition-opacity duration-300  peer-focus:opacity-100 text-base-content/60 hover:text-base-content/90 opacity-0 peer-focus:z-10 z-0"
                                alt="Clear Text" title="Clear Text">

                                <icon icon='teenyicons:x-circle-solid' class="   size-3" />
                            </button>

                        </div>



                        <div class="grid grid-cols-2 *:aspect-square">
                            <button
                                class="size-5 hover:bg-base-200 rounded-btn text-base-content/80 transition-opacity duration-300 peer-focus:opacity-0 grid place-content-center"
                                alt="Clear Items" title="Clear Items">
                                <icon icon='teenyicons:clockwise-outline' class="size-[0.8rem] pb-[2px]" />
                            </button>

                            <button
                                class=" size-5 hover:bg-base-200 rounded-btn
             text-base-content/80 transition-opacity duration-300 peer-focus:opacity-0 ml-1.5 disabled:bg-transparent  relative grid place-content-center disabled:opacity-40"
                                alt="Delete Set" title="Delete Set" @click="bs.deleteSet(set.key)"
                                :disabled="set.key == 1">
                                <icon icon='ph:trash-light' class="size-3.5 object-center" />
                            </button>
                        </div>

                    </div>





                    <drop-list row direction="row" :items="set.items.items" @insert="onInsert(set, $event)"
                        @reorder="onReorder(set, $event)"
                        class="w-full flex flex-wrap gap-4 place-items-start place-content-start " mode="cut">



                        <template v-slot:item="{ item }">
                            <drag :data="item" :key="item.name" class="slot shadow-lil overflow-hidden">
                                <img :src="item.img"
                                    class="shadow-contrast size-full rounded-md flex place-items-center place-content-center pointer-events-none" />
                            </drag>
                        </template>

                        <template v-slot:feedback>
                            <div :key="'feedback'" :type="'item'" :data="''" class="slot shadow-lil overflow-hidden">
                                <div
                                    class="shadow-contrast size-full rounded-md flex place-items-center place-content-center ">
                                    <icon icon="teenyicons:add-solid" class="size-4 opacity-50 drop-shadow-sm" />
                                </div>

                            </div>
                        </template>
                        <template v-slot:empty>
                            <div :key="'emptySlot'" class="slot shadow-lil overflow-hidden">
                                <div
                                    class="shadow-contrast size-full rounded-md flex place-items-center place-content-center ">
                                    <icon icon="teenyicons:add-solid" class="size-4 opacity-50 drop-shadow-sm" />
                                </div>

                            </div>
                        </template>
                        <template v-slot:default>
                            <div :key="'emptySlot'" class="slot shadow-lil overflow-hidden">
                                <div
                                    class="shadow-contrast size-full rounded-md flex place-items-center place-content-center ">
                                    <icon icon="teenyicons:add-solid" class="size-4 opacity-50 drop-shadow-sm" />
                                </div>

                            </div>
                        </template>
                        <template v-slot:reordering-feedback>
                            <div :key="'reorderFeedbackSlot'" class="slot shadow-lil overflow-hidden">
                                <div
                                    class="shadow-contrast size-full rounded-md flex place-items-center place-content-center ">
                                    <icon icon="teenyicons:add-solid" class="size-4 opacity-50 drop-shadow-sm" />
                                </div>

                            </div>
                        </template>
                        <template v-slot:inserting-drag-image>

                        </template>
                        <template v-slot:reordering-drag-image>
                        </template>

                    </drop-list>

                    <div class="border-b border-base-300 mt-7 mb-4" />
                </div>
            </div>
        </Pane>


        <!--     /* -------------------------------------------------------------------------- */
         /*                                 PANE TWOOOOOOOO                            */
         /* -------------------------------------------------------------------------- */ -->


        <Pane size="50"
            class="max-h-full min-w-[105px] !bg-base-100/90  shadow-warm rounded-box border border-base-300 relative  ">

            <div
                class=" border-b-base-300 border-b backdrop-blur-md absolute z-1 top-0 left-0 bg-base-100/90  items-center flex w-full justify-end gap-4 !h-fit flex-wrap px-2 py-1 z-10">

                <h2 class=" font-semibold text-base grow mx-2 justify-start">Items</h2>


                <div class="relative has-[input:not(:placeholder-shown)]:hide-stuff">
                    <input tabindex="0" role="" placeholder=" "
                        class="peer bg-base-100/80 h-[24px] min-w-5 w-8 focus:w-28 italic text-xs !outline-0 !outline-transparent !outline-none rounded-btn ring-0 focus:outline-0 focus:ring-0   focus:text-base-content transition-all duration-500  pl-2 placeholder:font-mono focus:not-italic placeholder:text-xs placeholder:align-center focus:bg-base-100/50 focus:border border-base-300 focus:ring-offset-base-content/40 z-20  top-0 left-0 max-w-28 has[&_input]:focus:ring-1 has[&_input]:focus:ring-offest-1 focus:shadow-inner relative peer"
                        @keydown.enter.prevent v-shortkey.focus="['meta' || 'ctrl', 'i']" />


                    <span
                        class="absolute block text-base-content/60  z-20 bg-base-100 size-3 rounded-full right-4 top-[5px] pointer-events-none peer-[:not(:placeholder-shown)]:hidden">
                        <Icon icon="teenyicons:search-outline" />
                    </span>
                    <button
                        class="absolute hidden btn  btn-ghost btn-outline border-none text-base-content/60 z-20 bg-base-100  p-0 px-1 min-h-[22px] h-[22px] w-6 rounded-r-btn rounded-l-none right-[9px] top-[2px] peer-[:not(:placeholder-shown)]:block">
                        <Icon icon="teenyicons:backspace-outline" />
                    </button>
                </div>



                <div class="dropdown">
                    <div tabindex="0" role="button"
                        class="items-center btn  btn-xs btn-outline border-none rounded-md  h-full  relative ">

                        <div :class="{ 'opacity-90': itemFilters.length > 0 }"
                            class="opacity-0 filter-on rounded-full size-2 after:size-2 after:absolute after:top-0 after:left-0 after:bg-success  bg-success absolute top-[2px] left-[20px] after:rounded-full after:animate-ping">
                        </div>

                        <Icon icon="teenyicons:filter-outline" class="self-center size-3 -mt-[2px]" />


                    </div>

                    <ul tabindex="0"
                        class="dropdown-content backdrop-blur-md border border-base-300 menu bg-base-100/90 rounded-box z-[1] w-52 p-2 top-[29px]  shadow [&_label]:py-1   [&_span]:text-nowrap rounded-t-none rounded-b-lg">
                        <li class="disabled pointer-events-none items-end flex px-2">

                            <button
                                class="btn btn-outline btn-neutral btn-square border-none  pointer-events-auto btn-xs"
                                alt="Reset Filters" title="Reset Filters" @click="itemFilters.length = 0">
                                <Icon icon="teenyicons:clockwise-outline" class="self-center size-3.5 -mt-[2px] p-0" />
                            </button>

                        </li>
                        <li class="">
                            <label class="cursor-pointer   label gap-4   justify-start">
                                <input type="checkbox" v-model="itemFilters" value="AP"
                                    class="checkbox checkbox-info checkbox-xs rounded-[4px]" />
                                <span class="label-text ">Ability Power</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-info checkbox-xs rounded-[4px]" value="MP" />
                                <span class="label-text">Magic Pen</span>
                            </label>

                        </li>


                        <div class="divider-thin"></div>

                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-blue checkbox-xs rounded-[4px]" value="AH" />
                                <span class="label-text">Ability Haste</span>
                            </label>
                        </li>

                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-blue checkbox-xs rounded-[4px]" value="HSP" />
                                <span class="label-text">Heal + Shield Power</span>
                            </label>
                        </li>

                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-blue checkbox-xs rounded-[4px]" value="mana" />
                                <span class="label-text">Mana</span>
                            </label>
                        </li>

                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-blue checkbox-xs rounded-[4px]" value="MP5" />
                                <span class="label-text">Mana Regen</span>
                            </label>
                        </li>

                        <div class="divider-thin"></div>

                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-success checkbox-xs rounded-[4px]" value="HP" />
                                <span class="label-text">Health</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-success checkbox-xs rounded-[4px]" value="HP5" />
                                <span class="label-text">Health Regen</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-success checkbox-xs rounded-[4px]" value="ARM" />
                                <span class="label-text">Armor</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-success checkbox-xs rounded-[4px]" value="MR" />
                                <span class="label-text">Magic Resist</span>
                            </label>
                        </li>

                        <div class="divider-thin"></div>

                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-warning checkbox-xs rounded-[4px]" value="AD" />
                                <span class="label-text">Attack Damage</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-warning checkbox-xs rounded-[4px]" value="AS" />
                                <span class="label-text">Attack Speed</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-warning checkbox-xs rounded-[4px]" value="crit" />
                                <span class="label-text">Critical Strike</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-warning checkbox-xs rounded-[4px]" value="apen" />
                                <span class="label-text">Armor Pen</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters"
                                    class="checkbox checkbox-warning checkbox-xs rounded-[4px]" value="lethality" />
                                <span class="label-text">Lethality</span>
                            </label>
                        </li>

                        <div class="divider-thin"></div>

                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters" class="checkbox checkbox-xs rounded-[4px]"
                                    value="MS" />
                                <span class="label-text">Movespeed</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters" class="checkbox checkbox-xs rounded-[4px]"
                                    value="GP10" />
                                <span class="label-text">GP/10</span>
                            </label>
                        </li>
                        <li>
                            <label class="cursor-pointer label gap-4 justify-start">
                                <input type="checkbox" v-model="itemFilters" class="checkbox checkbox-xs rounded-[4px]"
                                    value="tenacity" />
                                <span class="label-text">Tenacity</span>
                            </label>
                        </li>
                    </ul>
                </div>




                <div class="dropdown">
                    <div tabindex="0" role="button"
                        class="items-center btn  btn-xs btn-outline border-none rounded-md  h-full  relative font-normal">

                        <div :class="{ 'opacity-90': tierFilters.length > 0 }"
                            class="opacity-0 filter-on rounded-full size-2 after:size-2 after:absolute after:top-0 after:left-0 after:bg-success  bg-success absolute top-[2px] left-[20px] after:rounded-full after:animate-ping">
                        </div>

                        Item Tier
                        <Icon icon="teenyicons:down-small-outline" />

                    </div>

                    <ul tabindex="0"
                        class="dropdown-content backdrop-blur-md border border-base-300 menu bg-base-100/90 rounded-box z-10 w-52 p-2 top-[29px]  shadow [&_label]:py-1   [&_span]:text-nowrap rounded-t-none rounded-b-lg">
                        <li class="disabled pointer-events-none items-end flex px-2">
                            Item Tier
                        </li>
                        <li v-for="tier in tiers">
                            <label>
                                <input type="checkbox" :value="tier" :id="tier" v-model="itemCategories"
                                    class="checkbox checkbox-xs mr-2" />
                                {{ tier }}
                            </label>

                        </li>
                    </ul>
                </div>






            </div>

            <ItemGrid class="pt-14 max-h-full overflow-scroll z-0" />


        </Pane>

    </Splitpanes>

</template>

<style>
.slot {
    @apply size-[60px] aspect-square rounded-md ring-1 ring-offset-[2px] ring-base-300/90 ring-offset-base-100;
}

#buildSplit {

    .splitpanes--vertical>.splitpanes__splitter,
    .splitpanes__splitter {
        @apply !w-5 !min-w-5;

        &::before,
        &::after {
            background-color: oklch(var(--b3)) !important;
        }
    }

}

#buildSplit .splitpanes--vertical>.splitpanes__splitter,
#buildSplit .splitpanes--horizontal>.splitpanes__splitter {
    @apply w-4 h-4;

    &::before,
    &::after {
        background-color: oklch(var(--b3)) !important;
    }
}

.filter-on {
    &::after {
        @apply content-[''];
    }
}

.DragFeedback__feedback {
    opacity: 0 !important;
    visibility: hidden !important;
    display: none !important;
}

.drop-allowed {}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>
