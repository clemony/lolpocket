<script setup lang="ts">
import { makeBox } from '@utils/makeBox'
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
            class="shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm backdrop-blur-sm [&_first-child]:!rounded-tl-full">
            <Item
                :item="item"
                :pocket="pocket"
                imgClass="rounded-lg shadow-sm drop-shadow-sm !p-0 m-0 object-center  size-full border border-base-300"
                class="!size-14 !p-0 ring-0 hover:ring-0 [&_first-child]:!rounded-tl-full"
                labelClass="!rounded-full !p-0 !border-0 [&_first-child]:!rounded-tl-full overflow-hidden" />
        </div>
    </template>
    <Placeholder
        v-for="index in makeBox(items.length)"
        class="!size-14 flex-1 !shrink-0 gap-1 rounded-lg" />
</template>

<style scoped></style>
