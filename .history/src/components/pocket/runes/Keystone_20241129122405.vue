<script setup lang="ts">
import type { pocket } from 'types'
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
    <template v-if="set && set.keystone.name != 'none'">
        <TextureOutline
            :img="set.keystone.img"
            type="rune"
            :class="
                cn(
                    'relative z-10 size-16 shrink-0 rounded-full border border-base-200 bg-base-100/50 p-1.5 shadow-pretty backdrop-blur-sm',
                    props.class
                )
            " />
    </template>
    <TextureOutline
        v-else
        type="rune"
        :class="cn('size-16 p-4.5', props.placeholderClass)" />
</template>
<style scoped></style>
