<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()
</script>

<template>
    <div
        v-if="pocket.spells[0].spell1 && pocket.spells[0].spell1.name != ''"
        class="size-[38px] overflow-hidden rounded-lg p-0 shadow-standard">
        <img
            :src="`/img/spells/Summoner${pocket.spells[0].spell1.name}.webp`"
            class="size-full" />
    </div>
    <Placeholder v-else class="size-[38px] rounded-lg" />

    <div
        v-if="pocket.spells[0].spell2 && pocket.spells[0].spell2.name != ''"
        class="size-[38px] overflow-hidden rounded-lg p-0 shadow-standard">
        <img
            :src="`/img/spells/Summoner${pocket.spells[0].spell2.name}.webp`"
            class="size-full" />
    </div>
    <Placeholder v-else class="size-[38px] rounded-lg" />
</template>

<style scoped></style>
