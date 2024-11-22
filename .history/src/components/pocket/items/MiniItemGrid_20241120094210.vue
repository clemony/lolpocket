<script setup lang="ts">
import { makeBox } from '@lib/utils'
import { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()
</script>
<template>
    <div
        class="mt-1 grid h-fit w-full grid-flow-row auto-rows-auto grid-cols-3 items-start justify-between gap-1 pr-2">
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
    </div>
</template>

<style scoped></style>
