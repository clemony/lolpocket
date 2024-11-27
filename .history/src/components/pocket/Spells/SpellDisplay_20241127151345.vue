<script setup lang="ts">
import type { pocket, spell } from 'types'
import { createDefaultSpell } from '@utils/AddPocket'
const props = defineProps<{
    pocket: pocket
}>()

const spells = ref(props.pocket.spells[0])

const spell1 = computed(() => {
    let spell = spells.spell1 ? spells.spell1 : createDefaultSpell()
    return spell as spell
})
const spell2 = computed(() => {
    let spell = spells.spell2 ? spells.spell2 : createDefaultSpell()
    return spell as spell
})

const spellArr = [spell1, spell2]
</script>

<template>
    <div
        v-for="spell in spells"
        class="border-b3/70 bg-b1/50 shadow-warm size-12 shrink-0 rounded-lg border p-0">
        <template v-if="spell != ''">
            <img
                :src="`/img/spells/Summoner${spell}.webp`"
                class="m-0 size-full rounded-lg object-center p-0!" />
        </template>
        <Placeholder v-else class="size-[42px] rounded-lg" />
    </div>
</template>

<style scoped></style>
