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
        <Item
            v-if="index < 6"
            :key="item.id"
            :item="item"
            :pocket="pocket"
            class="size-[43px] shrink-0 shadow-warm"
            rounded-box />
    </template>
    <Placeholder
        v-for="index in makeBox(items.length)"
        class="size-[38px] rounded-lg" />
</template>

<style scoped></style>
