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
    <div class="flex flex-wrap gap-x-0.5 gap-y-2">
        <template v-for="(item, index) in items" :key="item.id">
            <div
                v-if="index < 6"
                :key="item.id"
                class="size-10 shrink-0 rounded-lg bg-base-100/50 p-0 shadow-warm backdrop-blur-sm [&_first-child]:!rounded-tl-full">
                <Item
                    :item="item"
                    :pocket="pocket"
                    imgClass="rounded-lg shadow-sm drop-shadow-sm !p-0 m-0 object-center  size-full border border-neutral/70"
                    class="!size-11 !p-0 ring-0 hover:ring-0"
                    labelClass="!rounded-full !p-0 !border-0  overflow-hidden" />
            </div>
        </template>
        <ShadowedPlaceholder
            v-for="index in makeBox(items.length, 6)"
            class="size-11" />
    </div>
</template>

<style scoped></style>
