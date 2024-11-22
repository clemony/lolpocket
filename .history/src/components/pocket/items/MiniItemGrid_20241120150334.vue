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
            class="shrink-0 rounded-full border border-base-300/70 bg-base-100/50 p-1 shadow-pretty backdrop-blur-sm">
            <Item
                v-if="index < 6"
                :key="item.id"
                :item="item"
                :pocket="pocket"
                imgClass="rounded-full shadow-sm drop-shadow-sm p-0 m-0"
                class="!size-[2.375rem] !rounded-full p-0 ring-0"
                labelClass="!rounded-full p-0 " />
        </div>
    </template>
    <Placeholder
        v-for="index in makeBox(items.length)"
        class="!size-[38px] flex-1 !shrink-0 rounded-lg" />
</template>

<style scoped></style>
