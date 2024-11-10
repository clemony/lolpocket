<script setup lang="ts">
import type { pocket } from 'types';

const props = defineProps<{
    pocket: pocket
    model?: any
}>()


const emit = defineEmits(['update'])

const model = ref({ items: [] })
onMounted(() => {
    if (props.model) {
        model.value = props.model
    }
})

</script>

<template>
<div class="flex gap-2 justify-start">
    <template v-if="model.items.length">



        <template v-for="(item, index) in model.items" :key="item.id">
            <img v-if="index < 6" :src="`/img/items/${item.id}.webp`"
                class='size-[55px] rounded-md overflow-hidden border border-base-300 shadow-sm' />

        </template>
        <template v-if="model.items.length < 6">
        </template>
    </template>
    <template v-else>
        <div class='flex gap-2'>
            <PlaceholderSquare v-for="index in 6" :key="index" class='size-[55px] ' no-hover />
        </div>
    </template>

    <slot />
</div>
</template>

<style scoped></style>