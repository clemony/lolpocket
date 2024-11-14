<script setup lang="ts">
import { useItemStore } from '@stores/itemStore'
import { useGeneralStore } from '@stores/generalStore'
import { computed, watch } from 'vue'
import { useChampStore } from '@stores/champStore'
import { Item, ItemSet } from 'types'

const cs = useChampStore()
const is = useItemStore()
const props = defineProps<{
    item: Item
    variant: string
    set?: ItemSet
    champ?
    pocketKey?: string
}>()

// Watch for changes to lovedItems and log the new value
watch(
    () => is.lovedItems,
    (newVal) => {
        //console.log('lovedItems changed:', newVal);
    },
    { immediate: true }
)

// Computed property to check if the item is liked
const isLiked = computed(() => {
    return is.lovedItems.some((item) => item.name === props.item.name)
})
</script>

<!-- This will be the content of the popover -->
<template v-if="props.item">
    <div class="relative grid w-72 !min-w-60 max-w-96 overscroll-none p-4">
        <div
            class="grid w-full grid-cols-[1fr_2fr] gap-2 border-b border-base-300 pb-3">
            <div class="col-start-1 h-full">
                <img
                    :key="item.id"
                    :src="`/img/items/${item.id}.webp`"
                    :alt="item.name + ' Image'"
                    class="pointer-events-none size-14 rounded-md border border-base-300 shadow-warm" />
            </div>

            <!---------------------------⟢ Header ⟣---------------------------->

            <div class="grid h-full grid-cols-1">
                <div class="text-middle flex">
                    <h3
                        class="flex flex-wrap text-sm font-bold leading-4 tracking-tight">
                        {{ item.name }}
                    </h3>
                </div>

                <div class="flex items-end justify-end gap-2">
                    <button
                        class="group/liked btn btn-circle btn-neutral btn-xs relative aspect-square *:absolute *:size-3.5 *:transition-all *:duration-100 hover:opacity-75"
                        @click="is.handleLike(item)">
                        <icon
                            v-if="isLiked"
                            icon="teenyicons:heart-solid"
                            class="text-dark-rose" />
                        <icon
                            icon="teenyicons:heart-outline"
                            class=""
                            :class="{ 'text-neutral/20': isLiked }" />
                    </button>

                    <a
                        :href="item.wiki"
                        target="_blank"
                        class="btn btn-circle btn-neutral btn-xs aspect-square hover:opacity-75"
                        alt="link to league wiki">
                        <Icon icon="teenyicons:link-outline" class="size-3" />

                        <!--  <Icon icon="teenyicons:link-remove-outline"
                            class="p-0 m-0 opacity-0 size-3 group-hover:opacity-100" />
 -->
                    </a>

                    <VDropdown
                        v-if="props.variant == 'add'"
                        theme="default"
                        :key="item.id + 'dropdown'"
                        class="btn btn-circle btn-neutral btn-xs flex aspect-square items-center gap-2 border-none hover:opacity-75">
                        <icon icon="teenyicons:add-solid" class="size-3.5" />

                        <template #popper :key="item.name + 'addToSet'">
                            <ul
                                class="pointer-events-auto grid !w-full min-w-28 items-center gap-2 p-2">
                                <span class="cursor-default pl-2">
                                    Add to Set
                                </span>
                                <li
                                    v-for="set in is.itemSets"
                                    class="btn btn-ghost btn-xs justify-start"
                                    @click="
                                        is.addToSet(pocketKey, set.key, item)
                                    ">
                                    {{ set.name }}
                                </li>
                            </ul>
                        </template>
                    </VDropdown>

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

        <div
            :key="item.name + 'statsdiv'"
            v-show="
                item.stats || item.active.length > 2 || item.passive.length > 2
            "
            class="grid grid-cols-1 gap-2 self-start whitespace-pre-line border-b border-base-300 py-2 text-sm">
            <p
                v-html="item.stats"
                v-if="item.stats"
                class="text-sm capitalize leading-5"></p>

            <p v-html="item.active" v-if="item.active.length > 2"></p>

            <p
                v-html="item.passive"
                v-if="item.passive.length > 2"
                :key="item.name + 'Passive'"
                class="text-pretty"></p>
        </div>
        <!--  {{ item.passive }} first-line:font-bold  first-line:tracking-wide-->

        <div class="flex items-end pt-2">
            <p v-if="item.id" class="flex grow items-end gap-2 align-baseline">
                Item ID:
                <span class="font-mono">{{ item.id }}</span>
            </p>
            <p
                v-if="item.buy"
                class="flex items-center justify-end gap-1 self-end px-1">
                <img src="/img/icons/Gold.png" class="h-3" />
                {{ item.buy }}
            </p>
        </div>
    </div>
</template>

<style scoped></style>
