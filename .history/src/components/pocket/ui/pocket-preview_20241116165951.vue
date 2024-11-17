<script setup lang="ts">
import { pocket } from '../../../../types'
const props = defineProps<{
    pocket?: pocket
}>()

const slotIndex = [1, 2, 3, 4, 5, 6]

function clean(thing) {
    return thing.replace(/\s/g, '').replace(/\'/g, '').replace(/\./g, '')
}

const pocket = props.pocket
</script>

<template>
    <div v-if="props.pocket" class="grid grid-cols-[1fr_3fr] gap-2 p-2">
        <div class="grid items-center justify-around gap-1 gap-y-1.5">
            <!-------------------⟢ champ ⟣-------------------->

            <div class="">
                <div
                    v-if="pocket.champions[0].starred"
                    class="grid size-[40px] shrink-0 place-items-center overflow-hidden rounded-lg shadow-sm ring-0 ring-neutral/25">
                    <img
                        :src="`/img/champions/${clean(pocket.champions[0].starred)}.webp`"
                        class="size-[40px] scale-[115%]" />
                </div>

                <PlSquare v-else :size="40" />
            </div>

            <!-------------------⟢ rune ⟣-------------------->

            <div>
                <div
                    v-if="
                        pocket.runes[0].runeSets[pocket.runes[0].starred]
                            .keystone &&
                        pocket.runes[0].runeSets[pocket.runes[0].starred]
                            .keystone.name != 'none'
                    "
                    class="flex !aspect-square size-[40px] justify-center rounded-lg drop-shadow-sm">
                    <img
                        :src="
                            pocket.runes[0].runeSets[pocket.runes[0].starred]
                                .keystone.img
                        "
                        class="h-full w-auto shrink-0 object-contain" />
                </div>

                <PlCircle v-else :size="40" />

                <!--   <div v-if="pocket.runes[0].runeSets[pocket.runes[0].starred].secondary && pocket.runes[0].runeSets[pocket.runes[0].starred].secondary != 'none'"
                                        class=' rounded !aspect-square size-5 flex justify-center p-px shadow-sm'>
                                        <img :src="`/img/runes/${pocket.runes[0].runeSets[pocket.runes[0].starred].secondary}.webp`"
                                            class='h-full w-auto  shrink-0  object-contain'>
                                    </div> -->
            </div>
        </div>

        <!-------------------⟢ items ⟣-------------------->

        <div
            class="grid w-full grid-cols-3 items-center justify-around gap-1.5">
            <template v-if="pocket.items[0].itemSets[pocket.items[0].starred]">
                <template
                    v-for="(item, index) in pocket.items[0].itemSets[
                        pocket.items[0].starred
                    ].items">
                    <img
                        v-if="index <= 5"
                        :key="item.id"
                        :src="`/img/items/${item.id}.webp`"
                        class="r size-[40px] shrink-0 rounded-lg shadow-sm" />
                </template>
            </template>

            <template v-for="(slot, index) in slotIndex">
                <template
                    v-if="
                        index >=
                        pocket.items[0].itemSets[pocket.items[0].starred].items
                            .length
                    ">
                    <PlSquare :size="40" />
                </template>
            </template>
        </div>
    </div>
</template>

<style scoped></style>
