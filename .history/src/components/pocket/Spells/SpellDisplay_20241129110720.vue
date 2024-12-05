<script setup lang="ts">
import type { pocket, spell } from 'types'
const props = defineProps<{
    pocket: pocket
}>()

const spells = ref(props.pocket.spells)
const a = spells[0]
const b = spells[1]
</script>

<template>
    <template v-for="(spell, i) in spells" :key="i">
        <div
            v-if="spells.spell1 || spells.spell2"
            class="size-12 shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm">
            <img
                v-if="spell.name != ''"
                :src="`/img/spells/Summoner${spell.name}.webp`"
                class="m-0 size-full rounded-lg object-center !p-0" />
            <Placeholder v-else class="size-[42px] rounded-lg" />
        </div>
    </template>
</template>

<style scoped></style>
