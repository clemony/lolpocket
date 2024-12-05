<script setup lang="ts">
import type { pocket, spell } from 'types'
import { createDefaultSpell } from '@utils/addPocket'
const props = defineProps<{
    pocket: pocket
}>()

const spells = ref(props.pocket.spells[0])

console.log('spsl', spells)

const spell1 = computed(() => {
    let spell = spells.spell1 ? spells.spell1 : createDefaultSpell()
    return spell as spell
})
const spell2 = computed(() => {
    let spell = spells.spell2 ? spells.spell2 : createDefaultSpell()
    return spell as spell
})

const spellArr = [spell1, spell2]
console.log('spdol', spellArr)
</script>

<template>
    <div
        v-for="spell in spells"
        class="size-12 shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm">
        <template v-if="spell != ''">
            <img
                :src="`/img/spells/Summoner${spell}.webp`"
                class="m-0 size-full rounded-lg object-center !p-0" />
        </template>
        <Placeholder v-else class="size-[42px] rounded-lg" />
    </div>
</template>

<style scoped></style>
