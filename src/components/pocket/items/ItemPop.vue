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
    <Popover>
        <PopoverTrigger autofocus="false">
            <slot />
        </PopoverTrigger>
        <PopoverContent
            class="relative grid w-80 !min-w-60 max-w-96 overscroll-none p-4"
            hideWhenDetached>
            <div
                class="grid w-full grid-cols-[1fr_3fr] gap-2 border-b border-base-200 pb-3">
                <div class="col-start-1 h-full">
                    <img
                        :key="item.id"
                        :src="`/img/items/${item.id}.webp`"
                        :alt="item.name + ' Image'"
                        class="pointer-events-none size-14 rounded-md border border-base-300 shadow-warm" />
                </div>

                <!---------------------------⟢ Header ⟣---------------------------->

                <div class="grid h-full grid-cols-1">
                    <h5
                        class="flex flex-wrap items-start pb-3 pt-1 !text-lg leading-none tracking-tight">
                        {{ item.name }}
                    </h5>

                    <div class="flex items-end justify-end gap-2">
                        <Button
                            size="xs"
                            variant="neutral"
                            class="group/liked relative aspect-square rounded-full p-2 *:absolute *:size-4.5 *:shrink-0 *:transition-all *:duration-100 hover:opacity-75"
                            @click="is.handleLike(item)">
                            <icon
                                v-if="isLiked"
                                icon="teenyicons:heart-solid"
                                class="text-dark-rose" />
                            <icon
                                icon="teenyicons:heart-outline"
                                class=""
                                :class="{ 'text-neutral/20': isLiked }" />
                        </Button>

                        <Button
                            size="xs"
                            variant="neutral"
                            :href="item.wiki"
                            target="_blank"
                            class="aspect-square overflow-hidden rounded-full p-2 hover:opacity-75"
                            alt="link to league wiki">
                            <Icon
                                icon="teenyicons:link-outline"
                                class="aspect-square size-4 shrink-0" />

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
                                    variant="neutral"
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
                            class="btn btn-circle btn-neutral btn-xs aspect-square hover:opacity-75"
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
                            class="btn btn-circle btn-neutral btn-xs aspect-square hover:opacity-75"
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
                    class="grid grid-cols-1 gap-2 self-start whitespace-pre-line py-2 text-sm">
                    <p
                        v-html="item.stats"
                        v-if="item.stats"
                        class="text-sm capitalize leading-5"></p>

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
            <div class="flex items-end border-t border-t-base-200 pt-2">
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
