<script setup lang="ts">
import { ref } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import PocketSidebar from './components/pocket-sidebar.vue';

const ps = usePocketStore();
const props = defineProps<{
    pocketKey: string;
}>();

const pocket = ref(ps.getPocket(props.pocketKey));

const modules = [];
const module = []

</script>

<template>
    <Splitpanes v-if="pocket" id="champSidebarSplit"
        class="default-theme px-6  w-full max-h-[calc(100%-100px)] h-[calc(100%-100px)] ">
        <Pane max-size="100" size="73" min-size="73" class="grid grid-rows-[1fr_3fr] h-full pb-1">



            <div class="grid items-start w-full h-full gap-3 px-1 pb-4">
                <div class="flex gap-3">
                    <h2 class="text-xl font-semibold tracking-tight ">
                        Planner
                    </h2>


                    <div class="overflow-clip scrollbar-hide">

                    </div>
                </div>
            </div>




        </Pane>



        <Pane v-if="ps.showSidebar == true" size="27" max-size="27" min-size="27" class="relative max-h-full ">

            <PocketSidebar :pocketKey="props.pocketKey" />


        </Pane>

    </Splitpanes>

</template>

<style scoped></style>