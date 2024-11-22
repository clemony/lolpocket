<script setup lang="ts">
import { makeBox } from '@lib/utils'
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const items = computed(() => {
    const s =
        /*         pocket.value.items[0].final[0].items ?
            pocket.value.items[0].final[0].items
        : */ pocket.value.items[0].itemSets[pocket.value.items[0].starred].items
    return s
})
</script>
<template>
    <template v-for="(item, index) in items" :key="item.id">
        <div
            v-if="index < 6"
            :key="item.id"
            class="shrink-0 rounded-full border border-base-300/70 bg-base-100/50 p-1 shadow-[0_3px_10px_rgb(0,0,0,0.2),inset_-1px_-1px_0px_1px_#00000008] backdrop-blur-sm">
            <Item
                :item="item"
                :pocket="pocket"
                imgClass="rounded-full shadow-sm drop-shadow-sm !p-0 m-0 object-center scale-105 border border-base-300"
                class="!size-[3.3rem] !rounded-full !p-0.5 ring-0 hover:ring-0"
                labelClass="!rounded-full !p-0 !border-0" />
        </div>
    </template>
    <!--     <Placeholder
        v-for="index in makeBox(items.length)"
        class="!size-14 flex-1 !shrink-0 rounded-lg" /> -->
</template>

<style scoped></style>
