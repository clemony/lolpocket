<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { usePocketStore } from '@stores/pocketStore'
import type { pocket } from '@stores/pocketStore'
import { useItemStore } from '@stores/itemStore'
import { useRuneStore } from '@stores/runeStore'
import { useGeneralStore } from '@stores/generalStore'
import Grid from 'gridjs-vue'

const is = useItemStore()
const ps = usePocketStore()
const rs = useRuneStore()
const gs = useGeneralStore()

const props = defineProps<{
    pocketArray: Array<pocket>
    arrayName: string
}>()
</script>

<template><!------------------------⟢ pin ⟣------------------------->
<label
    class="relative ml-1 flex cursor-pointer items-center justify-center p-2 *:size-full hover:transition-all hover:duration-500"
    @click.stop>
    <input type="checkbox" class="peer hidden" :key="'check' + pocket.key" v-model="pocket.pinned" />
    <icon icon="iconoir:pin" class="absolute opacity-40 peer-checked:opacity-0" />
    <icon icon="iconoir:pin-solid"
        class="pinned peer-checked:[cubic-bezier(0,1.08,.71,.97)] absolute opacity-0 fill-mode-both peer-checked:animate-bounce peer-checked:opacity-100 peer-checked:duration-700 peer-checked:repeat-[1.5]" />

    <icon :class="{ visible: true }" :checked="pocket.pinned" icon="iconoir:pin-slash-solid"
        class="unpin invisible absolute size-full opacity-0 transition-all delay-200 duration-300 animate-out spin-out-90 hover:peer-checked:opacity-100" />
</label></template>

<style scoped></style>
