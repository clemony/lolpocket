<script setup lang="ts">
import { useChampStore } from '../../stores/champStore'
import { usePocketStore } from '../../stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'


const sn = useSessionStore()
const cs = useChampStore()
const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey));

onBeforeRouteLeave((to, from) => {
    console.log(from)
    pocket.value.component = from.name
});

onBeforeRouteUpdate(async (to, from) => {
    console.log('frompok', from.params.pocketKey);
    console.log('tokp', to.params.pocketKey);
    if (to.params.pocketKey != from.params.pocketKey) {

        const newPocket = ps.getPocket(to.params.pocketKey)
        pocket.value = await newPocket
        if (newPocket.component) {
            console.log('newpok', newPocket.component);
            const component = newPocket.component
            await useRoute(`/pocket/${newPocket.key}/${component}`)
        }
    }
})
</script>

<template>
<div class="grid grid-cols-[auto_300px]  gap-6 h-[calc(100%-100px)] max-h-[calc(100%-70px)] w-full px-6">
    <div class="grid  max-h-[calc(100%-70px)] pb-1">
        <div class="grid w-full items-start gap-3 px-1 pb-4">
            <div class="flex gap-3">
                <h2 class="!text-xl font-semibold tracking-tight">
                    Champions
                </h2>

                <div class="join">
                    <button
                        class="group btn btn-square btn-outline btn-xs mt-[1px] grid place-items-center border-none *:size-4 disabled:bg-transparent"
                        :disabled="cs.championsInPocket.length == 0" @click="cs.resetChamps()">
                        <icon icon="ph:eraser" class="" />
                    </button>
                </div>
            </div>
            <div class="overflow-clip scrollbar-hide">
                <PocketSelectedChampions v-if="pocket" :pocketKey="pocket.key" />
            </div>
        </div>

        <div
            class="border-base-300 shadow-warm relative overflow-hidden rounded-box border transition-all delay-150 duration-500">
            <div
                class="shadow-warm absolute z-30 flex h-8 w-full flex-nowrap content-center items-center gap-4 border-b border-b-base-300/50 bg-base-100/95 backdrop-blur-md">
                <SearchBox :search="cs.champSearch" :placeholder="'Search Champions...'"
                    @update:search="cs.champSearch = $event" />

                <span class="grow"></span>
                <div class="flex w-full content-center justify-end px-4 *:px-2">
                    <select
                        class="align-self-end select select-bordered select-xs max-w-xs justify-self-end shadow-inner">
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

            <div
                class="shadow-inset relative z-0 max-h-inherit rounded-b-box bg-base-100 px-3 h-[400px] overflow-y-scroll">
                <ListChamps v-if="pocket" :pocketKey="pocket.key" />
            </div>
        </div>
    </div>

    <div class="relative max-h-inherit ">
        <ChampionSidebar :champion="cs.selectedChampion" />
    </div>
</div>
</template>
