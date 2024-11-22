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
            class="shrink-0 rounded-lg border border-b3/70 bg-b1/50 p-0 shadow-warm backdrop-blur-sm">
            <Item
                :item="item"
                :pocket="pocket"
                imgClass="rounded-lg shadow-xs drop-shadow-sm p-0! m-0 object-center  size-full border border-b3"
                class="size-14! rounded-full! p-0! ring-0 hover:ring-0"
                labelClass="rounded-full! p-0! border-0!" />
        </div>
    </template>
    <!--     <Placeholder
        v-for="index in makeBox(items.length)"
        class="size-14! flex-1 shrink-0! rounded-lg" /> -->
</template>

<style scoped></style>
