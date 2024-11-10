<script setup lang="ts">
import type { pocket } from 'types';
import { makeBox } from '@lib/utils'

const props = defineProps<{
    pocket: pocket
    model?: any
}>()


const model = ref({ items: [] })

watch(
    () => props.model,
    (newVal) => {
        model.value = newVal
    }
)
onMounted(() => {
    if (props.model) {
        model.value = props.model
    }
})

</script>

<template>
<div class="flex gap-4 justify-start">
    <template v-if="model.items.length">



        <template v-for="(item, index) in model.items" :key="item.id">
            <img v-if="index < 6" :src="`/img/items/${item.id}.webp`"
                class='size-[55px] rounded-lg overflow-hidden border border-base-300 shadow-sm' />

        </template>
        <PlaceholderSquare v-for="index in makeBox(model.items.length)" :key="model" class='size-[55px] brightness-90'
            no-hover />
    </template>
    <template v-else>
        <div class='flex gap-4'>
            <PlaceholderSquare v-for="index in 6" :key="index" class='size-[55px] ' no-hover />
        </div>
    </template>

    <slot />
</div>
</template>

<style scoped></style>