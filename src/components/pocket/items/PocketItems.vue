<script setup lang="ts">
<<<<<<< HEAD
<<<<<<< HEAD
import { useAccountStore } from '@stores/accountStore'
import { getPocket } from '@/utils/pocketUtilities'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
import { useScroll } from '@vueuse/core'

const as = useAccountStore()
=======
import { useItemStore } from '@/stores/itemStore'
import { usePocketStore } from '@/stores/pocketStore'
=======
import { useAccountStore } from '@stores/accountStore'
>>>>>>> 404a531d (update 84 files and delete 4 files)
import { getPocket } from '@/utils/pocketUtilities'
import { useTempStore } from '@stores/tempStore'
const ts = useTempStore()
import { useScroll } from '@vueuse/core'

<<<<<<< HEAD
const ps = usePocketStore()
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
const as = useAccountStore()
>>>>>>> 404a531d (update 84 files and delete 4 files)
const props = defineProps<{
    pocketKey: string
}>()

const pocket = ref(getPocket(props.pocketKey))

<<<<<<< HEAD
<<<<<<< HEAD
const sortItemsAZ = ref(0)
=======
const is = useItemStore()
const sortAZ = ref(0)
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
const sortItemsAZ = ref(0)
>>>>>>> 404a531d (update 84 files and delete 4 files)
const sortPrice = ref(0)
const isOpen = ref(false)

const search = ref()
const handleSearch = computed(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    ts.itemSearchFilter = search.value // Update Pinia store's searchFilter
})

const likeText = computed(() => {
    if (as.favoriteItems.length) {
        return 'Show favorite items'
    }
    if (as.favoriteItems.length) {
        return 'No favorite items'
    }
})
const isFilterOpen = ref(false)
const toggleFilter = useToggle(isFilterOpen)
=======
    is.searchFilter = search.value // Update Pinia store's searchFilter
=======
    ts.itemSearchFilter = search.value // Update Pinia store's searchFilter
>>>>>>> 404a531d (update 84 files and delete 4 files)
})

const likeText = computed(() => {
    if (as.favoriteItems.length) {
        return 'Show favorite items'
    }
    if (as.favoriteItems.length) {
        return 'No favorite items'
    }
})
<<<<<<< HEAD
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
const isFilterOpen = ref(false)
const toggleFilter = useToggle(isFilterOpen)
>>>>>>> 404a531d (update 84 files and delete 4 files)
</script>

<template>
    <Layout2
        class="max-h-inhhert h-inherit"
        scroll
        :panel1Min="14"
        :panel2Min="26">
        <template #panel1>
            <ScrollArea
                class="relative h-full max-h-full overflow-x-hidden overflow-y-auto"
                scrollbar-hide>
                <LayoutSpacer />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)
                <Card class="mb-2 border-none bg-transparent px-0 shadow-none!">
                    <CardHeader class="pb-4">
                        <h1 class="tracking-tighter">Item Sets</h1>
                    </CardHeader>
                    <CardDescription class="px-8">
<<<<<<< HEAD
=======
                <InfoCard
                    cardClass="mb-2 bg-transparent border-none shadow-none! px-0!">
                    <template #header>
                        <h1>Item Sets</h1>
                    </template>
                    <template #description>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)
                        Drag items from the list at the right. Items are
                        draggable & reorderable within sets and between them.
                        Select
                        <Label class="relative inline-block h-4.5 w-5">
                            <img
                                src="/img/ui/check.png"
                                class="absolute top-px size-[14px] brightness-50" />
                        </Label>
                        a set and
                        <div class="relative inline-block h-4.5 w-14">
                            <Label
<<<<<<< HEAD
<<<<<<< HEAD
                                class="absolute top-1 flex w-14 items-center justify-center gap-1">
=======
                                class="absolute -top-px flex w-14 items-center justify-center gap-1">
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                                class="absolute top-1 flex w-14 items-center justify-center gap-1">
>>>>>>> 404a531d (update 84 files and delete 4 files)
                                <span class="text-3">⌘</span>
                                +
                                <icon
                                    icon="ph:mouse-left-click-fill"
                                    class="size-4 shrink-0" />
                            </Label>
                        </div>
                        an item from the main list to quick add. Sets,
                        themselves, can be dragged into your preferred order.
<<<<<<< HEAD
<<<<<<< HEAD
                    </CardDescription>
                </Card>
=======
                    </template>
                </InfoCard>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                    </CardDescription>
                </Card>
>>>>>>> 404a531d (update 84 files and delete 4 files)
                <ItemSets :pocketKey="pocketKey" />
            </ScrollArea>
        </template>
        <template #panel2>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)
            <Card as-child
                    class="inset-0 mr-2 ml-8 h-[calc(100%-140px)] max-h-[calc(100%-140px)] w-fit justify-self-end overflow-hidden pt-4">
                <Collapsible
                    v-model:open="isFilterOpen">
                    <CardHeader as-child>
                        <CollapsibleTrigger
                            class="flex border-0 ring-0 ring-offset-0 outline-hidden">
                            <SearchBox
                                @click.stop
                                :search="ts.itemSearchFilter"
                                :placeholder="'Search Items...'"
                                @update:search="ts.itemSearchFilter = $event"
                                iconClass="p-2.5 -ml-2 ring-0 ring-offset-0 outline-hidden"
                                inputClass="pr-6 pl-12 ring-0 ring-offset-0 outline-hidden"
                                class="bg-b1/40 border-b2 h-10 max-w-1/2 justify-self-start [&_input]:rounded-l-lg!" />
<<<<<<< HEAD

                            <div
                                class="mask mask-heart red-gradient size-7 scale-y-90" />
                            <Label
                                @click.stop
                                size="icon"
                                class="rating"
                                alt="Filter Likes">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    class="mask mask-heart bg-domination" />
                            </Label>

                            <Grow />

                            <div class="join shadow-xs">
                                <ToggleStateButton
                                    class="join-item rounded-r-none"
                                    @click.stop
                                    v-model:model="sortItemsAZ"
                                    icon1="qlementine-icons:sort-alpha-asc-16"
                                    icon2="qlementine-icons:sort-alpha-desc-16"
                                    @update:model="
                                        (v) => (ts.sortItemsAZ = v)
                                    " />
                                <ToggleStateButton
                                    class="join-item rounded-none"
                                    @click.stop
                                    :model="sortPrice"
                                    icon1="bi:sort-numeric-down"
                                    icon2="bi:sort-numeric-up"
                                    :iconSize="7"
                                    @update:model="(v) => (ts.sortPrice = v)" />

                                <FilterButton
                                    @click="toggleFilter"
                                    class="join-item rounded-l-none"
                                    :class="{
                                        'bg-b2': isFilterOpen == true,
                                    }"></FilterButton>
                            </div>
                        </CollapsibleTrigger>
                    </CardHeader>
                    <CardDescription>
                        <CollapsibleContent>
                            <FilterPanel />
                        </CollapsibleContent>
                    </CardDescription>
                </Collapsible>
<CardContent>
                    <ItemList :pocket="pocket" />
</CardContent>
            </Card>
=======
            <HeaderCard
                v-model:open="isOpen"
                @update:isOpen="(v) => (isOpen = v)"
                cardClass="inset-0 w-fit justify-self-end h-[calc(100%-140px)] max-h-[calc(100%-140px)] overflow-hidden pt-4 ml-8 mr-2 "
                headerClass="-ml-px flex">
                <template #header>
                    <div
                        class="flex border-0 ring-0 ring-offset-0 outline-hidden">
                        <SearchBox
                            @click.stop
                            :search="is.searchFilter"
                            :placeholder="'Search Items...'"
                            @update:search="is.searchFilter = $event"
                            iconClass="p-2.5 -ml-2 ring-0 ring-offset-0 outline-hidden"
                            inputClass="pr-6 pl-12 ring-0 ring-offset-0 outline-hidden"
                            class="bg-b1/40 border-b2 h-10 max-w-1/2 justify-self-start [&_input]:rounded-l-lg!" />
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)

                            <div
                                class="mask mask-heart red-gradient size-7 scale-y-90" />
                            <Label
                                @click.stop
                                size="icon"
                                class="rating"
                                alt="Filter Likes">
                                <input
                                    type="radio"
                                    name="rating-2"
                                    class="mask mask-heart bg-domination" />
                            </Label>

                            <Grow />

                            <div class="join shadow-xs">
                                <ToggleStateButton
                                    class="join-item rounded-r-none"
                                    @click.stop
                                    v-model:model="sortItemsAZ"
                                    icon1="qlementine-icons:sort-alpha-asc-16"
                                    icon2="qlementine-icons:sort-alpha-desc-16"
                                    @update:model="
                                        (v) => (ts.sortItemsAZ = v)
                                    " />
                                <ToggleStateButton
                                    class="join-item rounded-none"
                                    @click.stop
                                    :model="sortPrice"
                                    icon1="bi:sort-numeric-down"
                                    icon2="bi:sort-numeric-up"
                                    :iconSize="7"
                                    @update:model="(v) => (ts.sortPrice = v)" />

<<<<<<< HEAD
                        <FilterButton
                            class="rounded-l-none"
                            :class="{ 'bg-b2': isOpen == true }">
                            hi
                        </FilterButton>
                    </div>
                </template>
                <template #description>
                    <FilterPanel />
                </template>

                <ItemList :pocket="pocket" />
            </HeaderCard>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
                                <FilterButton
                                    @click="toggleFilter"
                                    class="join-item rounded-l-none"
                                    :class="{
                                        'bg-b2': isFilterOpen == true,
                                    }"></FilterButton>
                            </div>
                        </CollapsibleTrigger>
                    </CardHeader>
                    <CardDescription>
                        <CollapsibleContent>
                            <FilterPanel />
                        </CollapsibleContent>
                    </CardDescription>
                </Collapsible>
<CardContent>
                    <ItemList :pocket="pocket" />
</CardContent>
            </Card>
>>>>>>> 404a531d (update 84 files and delete 4 files)
        </template>
    </Layout2>
</template>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)
<style>
.red-gradient {
    background: linear-gradient(270deg, #c56758, #e4aba1, #ca7852);
    background-size: 600% 600%;

    animation: AnimationName 10s ease infinite;
}

@keyframes AnimationName {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
<<<<<<< HEAD
=======
<style scoped></style>
>>>>>>> 4634f11e (update 8 files and delete 426 files)
=======
>>>>>>> 404a531d (update 84 files and delete 4 files)
