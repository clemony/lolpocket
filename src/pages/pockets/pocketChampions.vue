<route lang="json">{
    "name": "championGrid",
    "alias": "/champions/championSelect",
    "meta": {
        "title": "Runes",
        "icon": "teenyicons:hexagon-outline"
    }
}</route>

<script setup lang="ts">
import { useUserStore } from '../../stores/userStore';
import { ref, computed, onMounted } from "vue";
import { useChampStore } from '../../stores/champStore';
import SelectedChamps from '../champions/selectedChamps.vue';

const us = useUserStore();
const cs = useChampStore();

const props = defineProps<{
    pocketKey: string;
}>()



</script>

<template>
    <Splitpanes id="champSidebarSplit"
        class="default-theme px-6  w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)] ">
        <Pane max-size="100" size="73" min-size="73" class="grid grid-rows-[1fr_3fr] h-full pb-1">



            <div class="grid items-start w-full h-full gap-3 px-1 pb-4">
                <div class="flex gap-3">
                    <h2 class="text-xl font-semibold tracking-tight ">
                        Champions
                    </h2>

                    <div class=" join">
                        <button
                            class="grid mt-[1px]  btn btn-xs btn-outline border-none  btn-square  place-items-center group *:size-4 disabled:bg-transparent"
                            :disabled="cs.championsInPocket.length == 0" @click="cs.resetChamps()">
                            <icon icon='ph:eraser' class="" />

                        </button>

                    </div>
                </div>
                <div class="">
                    <SelectedChamps :pocketKey="props.pocketKey" />
                </div>
            </div>


            <div
                class="relative overflow-hidden transition-all duration-500 delay-150 border h-fullborder-base-300 rounded-box shadow-warm">
                <div
                    class="absolute z-30 flex items-center content-center w-full h-8 gap-4 border-b border-b-base-300/50 flex-nowrap bg-base-100/95 backdrop-blur-md shadow-warm">

                    <SearchBox :search="cs.champSearch" :placeholder="'Search Champions...'"
                        @update:search="cs.champSearch = $event" />


                    <span class="grow"></span>
                    <div class="flex content-center justify-end w-full *:px-2 px-4">

                        <select
                            class="max-w-xs shadow-inner select select-bordered select-xs align-self-end justify-self-end">
                            <option disabled selected>Class</option>
                            <option>Marksman</option>
                            <option>Mage</option>
                            <option>Tank</option>
                            <option>Support</option>
                            <option>Fighter</option>
                            <option>Assassin</option>
                        </select>



                    </div>


                </div>

                <div class="relative z-0 h-full px-3 shadow-inset rounded-b-box bg-base-100">

                    <ListChamps />
                </div>



            </div>



        </Pane>



        <Pane v-if="us.showSidebar == true" size="27" max-size="27" min-size="27" class="relative max-h-full ">


            <ChampionSidebar :champion="cs.selectedChampion" />

        </Pane>

    </Splitpanes>



</template>

<style scoped></style>
