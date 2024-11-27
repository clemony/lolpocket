<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])
</script>
<template>
    <template v-if="set && set.keystone.name != 'none'">
        <div
            class="border-b2 bg-b1/50 shadow-pretty relative z-10 size-18 shrink-0 self-center rounded-full border p-1.5 backdrop-blur-sm">
            <img :src="set.keystone.img" class="size-full opacity-90" />
        </div>
    </template>
    <TextureOutline v-else type="rune" class="size-18 p-4.5" />
</template>
<style scoped></style>
