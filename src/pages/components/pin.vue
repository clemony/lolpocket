<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { usePocketStore } from '../../stores/pocketStore';
import type { pocket } from '../../stores/pocketStore';
import { useItemStore } from '../../stores/itemStore';
import { useRuneStore } from '../../stores/runeStore';
import { useGeneralStore } from '../../stores/generalStore';
import Grid from 'gridjs-vue'

const is = useItemStore();
const ps = usePocketStore();
const rs = useRuneStore();
const gs = useGeneralStore();

const props = defineProps<{
    pocketArray: Array<pocket>;
    arrayName: string;
}>();

</script>

<template>
    <!------------------------⟢ pin ⟣------------------------->
    <label
        class="  relative *:size-full p-2 ml-1 flex justify-center items-center cursor-pointer hover:transition-all hover:duration-500 "
        @click.stop>
        <input type="checkbox" class="hidden peer" :key="'check' + pocket.key" v-model="pocket.pinned" />
        <icon icon="iconoir:pin" class="absolute peer-checked:opacity-0 opacity-40" />
        <icon icon="iconoir:pin-solid"
            class="absolute opacity-0 pinned peer-checked:opacity-100 peer-checked:animate-bounce peer-checked:duration-700  peer-checked:[cubic-bezier(0,1.08,.71,.97)]  peer-checked:repeat-[1.5] fill-mode-both " />

        <icon :class="{ 'visible': true }" :checked="pocket.pinned" icon="iconoir:pin-slash-solid"
            class="absolute invisible transition-all duration-300 delay-200 opacity-0 hover:peer-checked:opacity-100 unpin size-full animate-out spin-out-90" />
    </label>
</template>

<style scoped></style>