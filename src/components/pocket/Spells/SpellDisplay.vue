<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const spells = [
    props.pocket.spells[0].spell1.name,
    props.pocket.spells[0].spell2.name,
]
</script>

<template>
    <div
        v-for="spell in spells"
        class="size-12 shrink-0 rounded-lg border border-b3/70 bg-b1/50 p-0 shadow-warm">
        <template v-if="spell != ''">
            <img
                :src="`/img/spells/Summoner${spell}.webp`"
                class="m-0 size-full rounded-lg object-center p-0!" />
        </template>
        <Placeholder v-else class="size-[42px] rounded-lg" />
    </div>
</template>

<style scoped></style>
