<route lang="json">{
    "name": "Dashboard",
    "props": true,
    "path": "/pocket/:pocketKey"
}</route>

<script lang="ts">
export default {
    name: 'Dashboard',
}
</script>

<script setup lang="ts">

import { usePocketStore } from '../../stores/pocketStore'

import { useSessionStore } from '@stores/sessionStore'
const sn = useSessionStore();

const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const route = useRoute()



const pocketKey = ref(route.params.pocketKey as string);
const pocket = ref(ps.getPocket(pocketKey.value));

// Watch for changes to the route parameter and update pocket data accordingly
watch(
    () => route.params.pocketKey,
    (newPocketKey) => {
        if (newPocketKey) {
            pocketKey.value = newPocketKey as string;
            pocket.value = ps.getPocket(newPocketKey);
        }
    }
);

onActivated(() => {
    console.log('index')
})

const pTabs = defineModel({
    default: 'final',
})


</script>

<template>
<div class="grid grid-cols-[150px_auto_300px]  gap-9 h-[calc(100%-100px)] max-h-[calc(100%-70px)] w-full px-6 relative"
    :key="pocketKey">

    <div class="h-fit w-full items-start gap-3 px-4">
        <div class="flex flex-col h-auto gap-4">
            <h1 class="mb-3 mt-3">Build</h1>
            <div>Overview</div>
            <div>Start</div>
            <div>Core Items</div>
            <div>Final Build</div>
        </div>
        <Skeleton class='size-10' />
    </div>

    <div id='pocket-contents'
        class=" carousel carousel-vertical w-full h-full overflow-x-hidden overflow-y-scroll mt-4">
        <a class="carousel-item size-full  relative" ref="overview" id="overview">
            <DashboardOverview :pocket="pocket" />
        </a>
        <a class="carousel-item size-full" ref="early" id="early">
            tabjj
        </a>
        <a class="carousel-item size-full" ref="mid" id="mid">
            tab
        </a>
        <a class="carousel-item size-full" ref="late" id="late">
            <DashboardItems :key="pocketKey" :pocketKey="pocketKey" />
        </a>

    </div>




    <div class="relative max-h-full">
        <DashboardSidebar :key="pocketKey" :pocketKey="pocketKey" />
    </div>
</div>
</template>

<style scoped></style>