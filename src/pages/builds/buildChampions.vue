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
import {
    VueDraggable
} from 'vue-draggable-plus'

const us = useUserStore();
const cs = useChampStore();


const query = ref("");

// Search list based on the query
const searchList = computed(() => {
    return cs.champions.filter(
        (champion) =>
            champion.name.toLowerCase().includes(query.value.toLowerCase())
    );
});



const filter = computed(() => {
    if (cs.champions2.length > 0) {
        return 'Leftovers';
    } else {
        return 'All Champions';
    }
});

function onUpdate() {
    console.log('update')
}
function onAdd() {
    console.log('add')
}
function remove() {
    console.log('remove')
}
</script>

<template>
    <Splitpanes id="champSidebarSplit" class="default-theme px-6  w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)]">
        <Pane max-size="100" size="73" min-size="73" class="pb-2">
            <Splitpanes id="champSplit" horizontal class="w-full h-full default-theme">
                <Pane size="18" min-size="18" max-size="82"
                    class="relative flex w-full h-full px-4 overflow-y-scroll border rounded-box frost border-base-300 shadow-warm">
                    <SelectedChamps />
                </Pane>

                <Pane size="82" min-size="18" max-size="82"
                    class="relative h-full px-4 border rounded-box frost border-base-300 shadow-warm">

                    <div
                        class=" border-b-base-300 border-b backdrop-blur-md absolute z-10 top-0 left-0 bg-base-100/90  items-center flex w-full  justify-end gap-4 !h-fit flex-wrap  py-1 px-4">

                        <h2 class="justify-start sub-text grow">
                            Champ Select
                        </h2>
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


                    <!--       has-[:checked]:drop-shadow-[0px_2px_2px_#00000070] shadow-lil  -->


                    <VueDraggable id="allChamps" v-model="cs.filteredChampions" ghostClass="ghosty" :delay="0"
                        :animation="300" :group="{ name: 'champs', pull: 'clone', put: false, revertClone: false }"
                        :force-fallback="true" :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true"
                        @update="onUpdate" @add="onAdd" @remove="remove" :prevent-on-filter='true'
                        class="drag-draggable champion">

                        <label v-for="(champion, index) in cs.filteredChampions" :key="champion.name" :setData="index"
                            ref="list" class="drag-label has-[:checked]:bg-primary/40" dragClass="setDrag"
                            @click.right.prevent="">

                            <div class="drag-wrapper">
                                <input type="radio" :value="champion" v-model="cs.selectedChampion"
                                    class="hidden peer" />
                                <img :src="champion.img" class="drag-img" />
                            </div>
                        </label>

                    </VueDraggable>
                </Pane>
            </Splitpanes>







        </Pane>



        <Pane v-if="us.showSidebar == true" size="27" max-size="27" min-size="27" class="relative max-h-full ">


            <ChampionSidebar :champion="cs.selectedChampion" />

        </Pane>

    </Splitpanes>



</template>

<style scoped>
.grid-container {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(80px, 1fr));

    @apply gap-[1.5%];


}

.champ {
    @apply !h-[80px] !w-[80px];
}

.grid-tip {
    @apply max-w-[80px];
}

.linker:hover+div {
    opacity: 1;
    display: flex;
}


#champSplit>div.splitpanes__splitter {}
</style>
