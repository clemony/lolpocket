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
        class="size-[38px] shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-1 shadow-[0_3px_10px_rgb(0,0,0,0.2),inset_-1px_-1px_0px_1px_#00000008] backdrop-blur-sm">
        <template v-if="spell != ''">
            <img
                :src="`/img/spells/Summoner${spell}.webp`"
                class="size-full rounded-lg" />
        </template>
        <Placeholder v-else class="size-[38px] rounded-lg" />
    </div>
</template>

<style scoped></style>
