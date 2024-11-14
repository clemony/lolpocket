<script setup lang="ts">
import { useItemStore } from '../../stores/itemStore'
import { usePocketStore } from '../../stores/pocketStore'
import {
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/base/resizable'

const ps = usePocketStore()
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(ps.getPocket(props.pocketKey))

const is = useItemStore()
const sortAZ = ref(0)
const sortPrice = ref(0)
const isOpen = ref(false)
console.log(isOpen)

const search = ref()
const handleSearch = computed(() => {
    is.searchFilter = search.value // Update Pinia store's searchFilter
})

const dataValue = ''
const loveButt = ref(is.lovedItems)

const likeText = computed(() => {
    if (is.lovedItems.length) {
        return 'Show loved items'
    }
    if (is.lovedItems.length) {
        return 'No loved items'
    }
})
</script>

<template>
    <Layout2>
        <template #panel1>
            <div class="h-full overflow-y-scroll scrollbar-hide">
                <InfoCard
                    cardClass="mb-8 bg-transparent border-none !shadow-none !px-0">
                    <template #header>
                        <h1>Item Sets</h1>
                    </template>
                    <template #description>
                        Drag items from the list at the right. Items are
                        draggable & reorderable within sets and between them.
                        Select a set and
                        <Label class="inline-flex items-center gap-1">
                            <span class="text-base">⌘</span>
                            +
                            <icon icon="ph:mouse-left-click-fill" />
                        </Label>
                        an item from the main list to quick add.
                    </template>
                </InfoCard>
                <ItemSets :pocketKey="pocketKey" />
            </div>
        </template>
        <template #panel2>
            <InfoCard
                v-model:open="isOpen"
                @update:isOpen="(v) => (isOpen = v)"
                class="h-[calc(100%-115px)] max-h-[calc(100%-115px)] overflow-hidden pt-4">
                <template #header>
                    <div class="join">
                        <SearchBox
                            :search="is.searchFilter"
                            :placeholder="'Search Items...'"
                            @update:search="is.searchFilter = $event"
                            class="justify-self-start [&_input]:join-item [&_input]:!rounded-l-lg" />

                        <Label
                            variant="outline"
                            size="icon"
                            class="join-item swap swap-flip relative has-[:disabled]:cursor-default has-[:checked]:!bg-base-200"
                            alt="Filter Likes">
                            <input
                                type="checkbox"
                                name="viewLoved"
                                v-model="is.viewLoved"
                                class="hidden"
                                :disabled="!is.lovedItems.length" />
                            <HeartIcons />
                        </Label>
                    </div>

                    <Grow />

                    <div class="join">
                        <ToggleStateButton
                            @click.stop
                            v-model:model="sortAZ"
                            icon1="qlementine-icons:sort-alpha-asc-16"
                            icon2="qlementine-icons:sort-alpha-desc-16"
                            size="md"
                            @update:model="(v) => (is.sortAZ = v)" />
                        <ToggleStateButton
                            @click.stop
                            :model="sortPrice"
                            icon1="bi:sort-numeric-down"
                            icon2="bi:sort-numeric-up"
                            size="md"
                            :iconSize="7"
                            @update:model="(v) => (is.sortPrice = v)" />

                        <FilterButtons
                            class="join-item !rounded-l-none"
                            :class="{ 'bg-base-200': isOpen == true }">
                            hi
                        </FilterButtons>
                    </div>

                    <!-- <DdCheckbox class='join-item' @update:dataValue="(v) => dataValue = v" :data="ds.uniqueClass" text="Class / Role"
                        v-model:dataValue="dataValue" /> -->
                </template>
                <template #description>
                    <FilterPanel />
                </template>

                <ScrollArea class="h-full max-h-full overflow-auto pb-10 pl-5">
                    <ItemList :pocketKey="pocketKey" />
                </ScrollArea>
            </InfoCard>
        </template>
    </Layout2>
</template>

<style scoped></style>
