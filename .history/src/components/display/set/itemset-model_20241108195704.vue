<script setup lang="ts">
import type { pocket } from 'types';

const props = defineProps<{
    pocket: pocket
    model?: any
}>()
</script>

<template>
<div class="flex gap-2 justify-start">
    <template v-if="model.items">



        <template v-for="(item, index) in model.items" :key="item.id">
            <LoadImg v-if="index < 6" :url="`/img/items/${item.id}.webp`"
                class='size-[55px] rounded-md overflow-hidden border border-base-300 shadow-sm' />

        </template>
        <template v-if="model.items.length < 6">
        </template>
    </template>
    <template v-if="!model.items">
        <div class='flex gap-2'>
            <PlaceholderSquare v-for="index in 6" :key="index" class='size-[55px] ' no-hover />
        </div>
    </template>

    <slot />
</div>
</template>

<style scoped></style>