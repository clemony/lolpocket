<script setup lang="ts">
import { useItemStore } from '../../stores/itemStore'
import { useDataStore } from '../../stores/dataStore'
import { useGeneralStore } from '../../stores/generalStore'
import { usePocketStore } from '../../stores/pocketStore'
import { useSessionStore } from '@stores/sessionStore'
const sn = useSessionStore();

const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
    id?: any
}>()

const pocket = ref(ps.getPocket(props.pocketKey));

const us = useGeneralStore()
const is = useItemStore()


const search = ref()

const handleSearch = computed(() => {
    is.searchFilter = search.value // Update Pinia store's searchFilter
})



const animated = ref(false)

function handleClick() {
    animated.value = true
    if (pocket) {
        is.newSet(pocket.value.key)
    }
}

const likeText = computed(() => {
    if (is.lovedItems.length) {
        return 'Filter Likes'
    }
    if (is.lovedItems.length) {
        return 'No liked Items'
    }
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
<Splitpanes id="itemSidebarSplit" :dbl-click-splitter="false"
    class="default-theme h-[calc(100%-100px)] max-h-[calc(100%-100px)] w-full px-4 pb-2">
    <Pane size="55" min-size="18" max-size="82" class="relative z-0 h-full">
        <div class="flex !h-9 w-full flex-wrap items-start gap-2.5 pl-1.5 pr-3.5">
            <h2 class="!text-xl font-semibold tracking-tight">Item Sets</h2>

            <button :class="{ click: animated == true }" @animationend="animated = false" @click="handleClick"
                class="group/add relative mt-[4px] grid size-5 self-start *:size-full" title="add set" alt="add set">
                <Icon icon="teenyicons:add-small-outline"
                    class="absolute self-center transition-all duration-500 group-hover/add:opacity-0" />
                <icon icon="teenyicons:plus-circle-solid"
                    class="absolute self-center opacity-0 transition-all duration-500 group-hover/add:opacity-100" />
            </button>
        </div>

        <div class="h-full overflow-y-scroll scrollbar-hide">
            <ItemSets :pocketKey="pocketKey" />
        </div>
    </Pane>

    <Pane size="45" min-size="18" max-size="82"
        class="before:-z-1 relative z-[2] mt-3 h-[calc(100%-130px)] rounded-box border border-base-300 bg-base-100 transition-all delay-150 duration-500 before:absolute before:-left-5 before:top-1/2 before:h-9 before:w-4"
        id="itemGrid">
        <div
            class="shadow-warm absolute z-30 flex h-8 w-full flex-nowrap content-center items-center gap-4 border-b border-b-base-300/50 bg-base-100/95 backdrop-blur-md">
            <SearchBox :search="is.searchFilter" :placeholder="'Search Items...'"
                @update:search="is.searchFilter = $event" />

            <span class="grow"></span>
            <div class="mb-[5px] flex h-6 w-full content-center justify-end gap-1.5 px-2">
                <label alt="Filter Likes" :title="likeText"
                    class="tab swap swap-flip relative mr-2 px-2 *:absolute has-[:disabled]:cursor-default">
                    <input type="checkbox" v-model="is.viewLiked" class="hidden"
                        :disabled="is.lovedItems.length == 0" />

                    <icon v-if="is.lovedItems.length > 0" icon="teenyicons:heart-outline"
                        class="swap-off mb-1 size-4" />
                    <icon v-if="is.lovedItems.length > 0" icon="teenyicons:heart-solid"
                        class="swap-on mb-1 size-4 text-base-content/80" />
                    <icon v-else icon="fluent:heart-off-20-regular" class="mb-[4px] size-5 text-base-content/30" />
                </label>

                <FilterPanel />
            </div>
        </div>

        <div class="shadow-inset relative z-[2] h-full overflow-auto rounded-b-box px-3">
            <ItemList :pocketKey="pocketKey" />
        </div>
    </Pane>
</Splitpanes>
</template>

<style scoped></style>
