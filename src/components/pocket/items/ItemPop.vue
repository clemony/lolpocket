<script setup lang="ts">
import { useItemStore } from '@/stores/itemStore'
import { useGeneralStore } from '@/stores/generalStore'
import { computed, watch } from 'vue'
import { useChampStore } from '@/stores/champStore'
import { Item, ItemSet } from 'types'

const cs = useChampStore()
const is = useItemStore()
const props = defineProps<{
    item: Item
    variant?: string
    set?: ItemSet
    champ?
    pocketKey?: string
}>()

// Watch for changes to favoriteItems and log the new value
watch(
    () => is.favoriteItems,
    (newVal) => {
        //console.log('favoriteItems changed:', newVal);
    },
    { immediate: true }
)

// Computed property to check if the item is liked
const isLiked = computed(() => {
    return is.favoriteItems.some((item) => item.name === props.item.name)
})
</script>

<template>
    <!-- This will be the content of the popover -->
    <Popover :autofocus="false">
        <PopoverTrigger>
            <slot />
        </PopoverTrigger>
        <PopoverContent
            class="relative grid w-80 max-w-96 min-w-60! overscroll-none p-4"
            hideWhenDetached>
            <div
                class="border-b2 grid w-full grid-cols-[1fr_3fr] gap-2 border-b pb-3">
                <div class="col-start-1 h-full">
                    <img
                        :key="item.id"
                        :src="`/img/items/${item.id}.webp`"
                        :alt="item.name + ' Image'"
                        class="border-b3 shadow-warm pointer-events-none size-14 rounded-md border" />
                </div>

                <!---------------------------⟢ Header ⟣---------------------------->

                <div class="grid h-full grid-cols-1">
                    <h5
                        class="text-4! flex flex-wrap items-start pt-1 pb-3 leading-none tracking-tight">
                        {{ item.name }}
                    </h5>

                    <div class="flex items-end justify-end gap-2">
                        <Button
                            size="xs"
                            variant="accent"
                            class="group/liked relative aspect-square rounded-full p-2 *:absolute *:size-4.5 *:shrink-0 *:transition-all *:duration-100 hover:opacity-75"
                            @click="is.handleLike(item)">
                            <icon
                                v-if="isLiked"
                                icon="teenyicons:heart-solid"
                                class="text-dark-rose" />
                            <icon
                                icon="teenyicons:heart-outline"
                                class="text-ac" />
                        </Button>

                        <Button
                            size="xs"
                            variant="accent"
                            :href="item.wiki"
                            target="_blank"
                            class="aspect-square overflow-hidden rounded-full p-2 hover:opacity-75"
                            alt="link to league wiki">
                            <Icon
                                icon="teenyicons:link-outline"
                                class="text-ac aspect-square size-4 shrink-0" />

                            <!--  <Icon icon="teenyicons:link-remove-outline"
                            class="p-0 m-0 opacity-0 size-3 group-hover:opacity-100" />
 -->
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger
                                v-if="props.variant == 'add'"
                                :key="item.id + 'dropdown'"
                                class="flex aspect-square items-center gap-2 border-none hover:opacity-75"
                                as-child>
                                <Button
                                    size="xs"
                                    variant="accent"
                                    class="rounded-full">
                                    <icon
                                        icon="teenyicons:add-solid"
                                        class="size-3.5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="right" hideWhenDetached>
                                <DropdownMenuLabel>
                                    Add to Set
                                </DropdownMenuLabel>
                                <DropdownMenuItem
                                    v-for="set in is.itemSets"
                                    class="justify-start"
                                    @click="
                                        is.addToSet(pocketKey, set.key, item)
                                    ">
                                    {{ set.name }}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <button
                            v-if="props.variant == 'remove' && set"
                            class="btn btn-circle btn-accent btn-xs aspect-square hover:opacity-75"
                            alt="remove from set"
                            title="remove from set"
                            @click="
                                is.removeFromSet(props.pocketKey, set.key, item)
                            ">
                            <icon
                                icon="teenyicons:denied-outline"
                                class="size-3.5" />
                        </button>

                        <button
                            v-if="props.variant == 'remove' && props.champ"
                            class="btn btn-circle btn-accent btn-xs aspect-square hover:opacity-75"
                            alt="remove from set"
                            title="remove from set"
                            @click="cs.removeFromSet(item, props.champ)">
                            <icon
                                icon="teenyicons:denied-outline"
                                class="size-3.5" />
                        </button>
                    </div>
                </div>
            </div>

            <!-------------------------------⟢ Stats ⟣-------------------------------->
            <ScrollArea class="max-h-96">
                <div
                    :key="item.name + 'statsdiv'"
                    v-show="
                        item.stats ||
                        item.active.length > 2 ||
                        item.passive.length > 2
                    "
                    class="text-2 grid grid-cols-1 gap-2 self-start py-2 whitespace-pre-line">
                    <p
                        v-html="item.stats"
                        v-if="item.stats"
                        class="text-2 leading-5 capitalize"></p>

                    <p
                        v-html="item.active"
                        v-if="item.active.length > 2"
                        class=""></p>

                    <p
                        v-html="item.passive"
                        v-if="item.passive.length > 2"
                        :key="item.name + 'Passive'"
                        class=""></p>
                </div>
                <!--  {{ item.passive }} first-line:font-bold  first-line:tracking-wide-->
            </ScrollArea>
            <div class="border-t-b2 flex items-end border-t pt-2">
                <p
                    v-if="item.id"
                    class="flex grow items-center gap-3 pt-2 align-text-bottom leading-none">
                    <span>Item ID:</span>
                    <span class="">{{ item.id }}</span>
                </p>
                <p
                    v-if="item.buy"
                    class="flex items-center justify-end gap-1 self-end px-1 leading-none">
                    <img src="/img/icons/Gold.png" class="h-3" />
                    {{ item.buy }}
                </p>
            </div>
        </PopoverContent>
    </Popover>
</template>

<style scoped></style>
