<script setup lang="ts">
import type { pocket } from '@/types/pocketTypes'
import type { HTMLAttributes } from 'vue'
const props = defineProps<{
    pocket: pocket
    class?: HTMLAttributes['class']
    placeholderClass?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])
</script>
<template>
    <template v-if="set && set.keystone.name != 'empty'">
        <TextureOutline
            :img="set.keystone.img"
            type="keystone"
            class="size-16 bg-b2/30 p-1.5" />
    </template>
    <TextureOutline
        v-else
        type="rune"
        :class="cn('size-16 p-4.5', props.placeholderClass)" />
</template>
<style scoped></style>
