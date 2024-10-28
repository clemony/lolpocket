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

onBeforeRouteLeave((to, from) => {
    console.log(from)
    pocket.value.component = from.name
});

onBeforeRouteUpdate(async (to, from) => {
    if (to.params.pocketKey !== from.params.pocketKey) {
        const newPocket = ps.getPocket(to.params.pocketKey)
        pocket.value = await newPocket
        if (newPocket.component) {
            const component = newPocket.component
            await useRoute(`/pocket/${newPocket.key}/${component}`)
        }
    }
})
</script>

<template>
<div class="grid grid-cols-[auto_300px]  gap-6 h-[calc(100%-100px)] max-h-[calc(100%-70px)] w-full px-6"
    :key="pocketKey">
    <div>
        <div class="h-fit w-full items-start gap-3 px-1 pb-4">
            <div class="flex h-auto gap-3">
                <h2 class="!text-xl font-semibold tracking-tight">
                    Dashboard
                </h2>
            </div>
        </div>
        <splitpanes>
            <pane>
                <TabList :modelName="pTabs" :defaultTab="3">


                    <!------------------------⟢ first back ⟣------------------------->

                    <tab :value="1">
                        <template #header>
                            <input type="radio" class="peer hidden" name="pTabs" v-model="pTabs" value="1" />
                            <span class='pl-1 pr-4'>Early Game</span>
                        </template>

                        <template #content>
                            hi
                        </template>
                    </tab>
                    <!----------------------⟢ mid ⟣---------------------------->

                    <tab :value="2">
                        <template #header>
                            <input type="radio" class="peer hidden" name="pTabs" v-model="pTabs" value="2" />
                            <span class='pl-1 pr-4'> Mid Game</span>
                        </template>

                        <template #content>
                            hi
                        </template>
                    </tab>

                    <!----------------------⟢ final ⟣---------------------------->

                    <tab :value="3">
                        <template #header>
                            <input type="radio" class="peer hidden" name="pTabs" v-model="pTabs" value="3" />
                            <span class='pl-1 pr-4'>Final Build</span>
                        </template>
                        <template #content>
                            <DashboardItems :key="pocketKey" :pocketKey="pocketKey" />
                        </template>
                    </tab>
                </TabList>
            </pane>
        </splitpanes>
    </div>

    <div class="relative max-h-full">
        <DashboardSidebar :key="pocketKey" :pocketKey="pocketKey" />
    </div>
</div>
</template>

<style scoped></style>