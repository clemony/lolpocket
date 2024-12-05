<script setup lang="ts">
import { createDefaultSpell } from '@utils/addPocket'
import type { pocket, spell } from 'types'
const props = defineProps<{
    pocket: pocket
}>()

const a = ref(props.pocket.spells[0])
console.log(a)
const b = ref(props.pocket.spells[1])
console.log(b)

onMounted(() => {
    !a.value ?
        ((a.value = createDefaultSpell()) as spell)
    :   props.pocket.spells[0]
    !b.value ?
        ((b.value = createDefaultSpell()) as spell)
    :   props.pocket.spells[1]
})
</script>

<template>
    <div
        class="size-12 shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm"
        :class="{ 'shadow-inner': !a || !a.name }">
        <img
            v-if="a && a.name"
            :src="`/img/spells/Summoner${a.name}.webp`"
            class="m-0 size-full rounded-lg object-center !p-0" />
    </div>
    <div
        class="size-12 shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm">
        <img
            v-if="b && b.name"
            :src="`/img/spells/Summoner${b.name}.webp`"
            class="m-0 size-full rounded-lg object-center !p-0" />
    </div>
</template>

<style scoped></style>
