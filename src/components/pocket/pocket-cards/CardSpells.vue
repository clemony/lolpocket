<script setup lang="ts">
import { createDefaultSpell } from '@utils/addPocket'
import type { pocket, spell } from 'types'
const props = defineProps<{
    pocket: pocket
}>()

const a = ref(props.pocket.spells[0])

const b = ref(props.pocket.spells[1])

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
    <div class="text-accent-300 drop-shadow-sm">
        <icon icon="game-icons:spell-book" class="size-7 shrink-0" />
        <!--  <div
            class="size-9 overflow-hidden rounded-full border border-transparent bg-white/20 shadow-smooth backdrop-blur-sm">
            <img
                v-if="a && a.name"
                :src="`/img/spells/Summoner${a.name}.webp`"
                class="size-full" />
        </div>
        <div
            class="size-9 overflow-hidden rounded-full border border-transparent bg-white/20 shadow-smooth backdrop-blur-sm">
            <img
                v-if="b && b.name"
                :src="`/img/spells/Summoner${b.name}.webp`"
                class="size-full" />
        </div> -->
    </div>
</template>

<style scoped></style>
