<script setup lang="ts">
import type { pocket, spell } from 'types'
const props = defineProps<{
    pocket: pocket
}>()

const spells = ref(props.pocket.spells)
const a = spells[0]
console.log(a)
const b = spells[1]
console.log(b)
</script>

<template>
    <!--     <div
        class="size-12 shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm">
        <img
            v-if="a.name != ''"
            :src="`/img/spells/Summoner${a.name}.webp`"
            class="m-0 size-full rounded-lg object-center !p-0" />
        <Placeholder v-else class="size-[42px] rounded-lg" />
    </div>
    <div
        class="size-12 shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm">
        <img
            v-if="b.name != ''"
            :src="`/img/spells/Summoner${b.name}.webp`"
            class="m-0 size-full rounded-lg object-center !p-0" />
        <Placeholder v-else class="size-[42px] rounded-lg" />
    </div> -->
</template>

<style scoped></style>
