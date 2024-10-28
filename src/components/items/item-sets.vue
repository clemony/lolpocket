<script setup lang="ts">
import { onMounted, ref, computed, reactive, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { useItemStore } from '@stores/itemStore'
import { usePocketStore } from '@stores/pocketStore'

import { ItemSet } from 'types'
import ItemsetItems from './itemset-items.vue'
import { generateRandomName } from '@utils/keygen'

const is = useItemStore()

const ps = usePocketStore()

const props = defineProps<{
    pocketKey: string
}>()

const pocketKey = props.pocketKey

const pocket = ps.getPocket(pocketKey)

const items = ref<any[]>([])

if (pocket) {
    watch(
        pocket.items[0],
        (newPocket) => {
            pocket.items[0].itemSets = newPocket.itemSets || []
        },
        { immediate: true }
    )

    watch(items, (newItemSets) => {
        if (pocket) {
            pocket.items[0].itemSets = newItemSets
        }
    })
}

function updateStarredIndex(evt) {
    const { oldIndex, newIndex } = evt

    if (!pocket) {
        return
    }

    if (pocket.items[0].starred === oldIndex) {
        pocket.items[0].starred = newIndex
    } else if (
        pocket.items[0].starred > oldIndex &&
        pocket.items[0].starred <= newIndex
    ) {
        pocket.items[0].starred--
    } else if (
        pocket.items[0].starred < oldIndex &&
        pocket.items[0].starred >= newIndex
    ) {
        pocket.items[0].starred++
    }
}

const dropdownShown = reactive({})

const submitAndClose = (key) => {
    console.log('Form submitted for set key:', key)
    dropdownShown[key] = false
}

const suggestions = [
    'Early',
    'Mid',
    'Late',
    'Core',
    'Offensive',
    'Defensive',
    'Utility',
    'DPS',
    'Burst',
    'Situational',
]

</script>

<template>
<VueDraggable v-if="pocket" tag="div" v-model="pocket.items[0].itemSets" :delay="0" :animation="300"
    :group="{ name: 'sets' }" :prevent-on-filter="true" ghostClass="ghost" :force-fallback="true"
    @end="updateStarredIndex" :fallbackTolerance="0" fallbackClass="drag-clone" :fallbackOnBody="true"
    class="z-0 h-full">
    <div v-for="(set, index) in pocket.items[0].itemSets" dragClass="setDrag" class="grid px-1 pt-1" :key="set.key">
        <div class="mt-1 flex h-10 items-center gap-3 px-1">
            <VDropdown theme="detail" class="" v-model:shown="dropdownShown[set.key]">
                <button class="self-center  capitalize opacity-60">
                    {{ set.name }}
                </button>

                <template #popper>
                    <div class="grid gap-2 rounded-lg">
                        <div class="relative overflow-hidden border-b border-base-300 p-1.5">
                            <input type="text"
                                class="peer input-xs w-full select-all rounded bg-transparent pt-1 capitalize italic opacity-80 focus:not-italic focus:opacity-100"
                                spellcheck="false" :placeholder="set.name" @keyup.enter="submitAndClose" />

                            <icon icon="ri:edit-fill"
                                class="absolute right-2.5 top-[11px] size-3.5 opacity-50 peer-focus:opacity-0" />
                        </div>

                        <div class="flex max-w-44 flex-wrap gap-2 px-2 pb-3">
                            <button v-close-popper v-for="word in suggestions"
                                class="badge badge-neutral badge-sm  capitalize hover:badge-ghost"
                                @click="set.name = word">
                                {{ word }}
                            </button>
                            <button v-close-popper
                                class="gradient badge badge-sm  capitalize ![background-size:100%] hover:badge-ghost"
                                @click="
                                    set.name = generateRandomName() + ' Set'
                                    ">
                                Random
                            </button>
                        </div>
                    </div>
                </template>
            </VDropdown>
            <span class="h-1/2 grow self-start border-b border-base-300"></span>

            <label
                class="group/star relative grid h-full w-4 cursor-pointer place-content-center *:h-full *:transition-all *:duration-300">
                <input type="radio" name="starSet" :value="index" class="peer hidden" v-model="pocket.items[0].starred"
                    @change="console.log(pocket.items[0].starred)" :checked="pocket.items[0].starred == index" />
                <icon icon="iconoir:star-dashed"
                    class="absolute z-10 opacity-20 group-hover/star:opacity-15 peer-checked:opacity-20" />
                <icon icon="iconoir:star-solid"
                    class="absolute z-0 text-yellow-400 opacity-0 group-hover/star:text-yellow-300 group-hover/star:opacity-70 peer-checked:opacity-80" />
            </label>

            <VDropdown theme="detail" placement="left-start" class="arrow">
                <button class="group/menu relative flex size-4 items-center justify-center">
                    <icon icon="teenyicons:cog-outline"
                        class="i1 absolute size-3 opacity-50 group-hover/menu:opacity-0" />
                    <icon icon="teenyicons:cog-solid"
                        class="i2 absolute size-3 opacity-0 group-hover/menu:opacity-80" />
                </button>

                <template #popper>
                    <div
                        class="text-baseline relative items-center rounded-lg p-1  shadow-[inset_1px_1px_10px_10px,_rgba(255,_255,_255,_0.9)]">
                        <div class="grid flex-nowrap items-center gap-1">
                            <button
                                class="btn btn-ghost btn-xs flex items-center !justify-start gap-3 px-3  hover:bg-base-200"
                                alt="Clear Items" @click="is.resetItems(set.key)">
                                <icon icon="ph:eraser" class="-ml-1 size-4" />
                                <span>Clear Items</span>
                            </button>
                            <div class="border-b border-base-200"></div>
                            <button
                                class="group/trash btn btn-ghost btn-xs relative flex items-center !justify-start gap-3 px-3  hover:bg-base-200 disabled:cursor-not-allowed disabled:bg-transparent"
                                alt="Delete Set" @click="is.deleteSet(pocket.key, set.key)"
                                :disabled="is.itemSets.length == 1">
                                <icon icon="iconoir:bin-full"
                                    class="-ml-1 size-4 object-center group-disabled/trash:opacity-0" />
                                <icon icon="iconoir:bin"
                                    class="absolute -ml-1 size-4 opacity-0 group-disabled/trash:opacity-60" />
                                <span> Delete Set</span>
                            </button>
                        </div>
                    </div>
                </template>
            </VDropdown>
        </div>

        <ItemsetItems :pocketKey="pocketKey" :set="set" />
    </div>
</VueDraggable>
</template>

<style scoped>
.v-popper--shown {
    .i1 {
        @apply opacity-0;
    }

    .i2 {
        @apply opacity-80;
    }
}

.ghost {
    @apply m-4 w-[96%] rounded-box bg-base-200;
}
</style>
