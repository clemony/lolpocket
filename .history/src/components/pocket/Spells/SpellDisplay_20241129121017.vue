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
    <div class="grid h-full place-items-center space-y-1.5">
        <div class="grid size-full place-items-center">
            <div
                v-if="a && a.name"
                class="size-11 shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm">
                <img
                    :src="`/img/spells/Summoner${a.name}.webp`"
                    class="m-0 size-full rounded-lg object-center !p-0" />
            </div>
            <div
                v-else
                class="size-11 shrink-0 rounded-lg border border-base-300/70 bg-base-200/30 p-0 opacity-70 shadow-inner" />
        </div>
        <div class="grid size-full place-items-center">
            <div
                v-if="b && b.name"
                class="size-11 shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm">
                <img
                    :src="`/img/spells/Summoner${b.name}.webp`"
                    class="m-0 size-full rounded-lg object-center !p-0" />
            </div>
            <div
                v-else
                class="size-11 shrink-0 rounded-lg border border-base-300/70 bg-base-200/30 p-0 opacity-70 shadow-inner" />
        </div>
    </div>
</template>

<style scoped></style>
