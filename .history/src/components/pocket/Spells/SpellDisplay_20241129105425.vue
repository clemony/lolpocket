<script setup lang="ts">
import type { pocket, spell } from 'types'
const props = defineProps<{
    pocket: pocket
}>()

const spells = ref(props.pocket.spells)
</script>

<template>
    <div
        v-for="(spell, index) in spells"
        :key="index"
        class="size-12 shrink-0 rounded-lg border border-base-300/70 bg-base-100/50 p-0 shadow-warm">
        <template v-if="(index as unknown as number) < 2">
            <img
                @="console.log(index)"
                v-if="spell.name != ''"
                :src="`/img/spells/Summoner${spell.name}.webp`"
                class="m-0 size-full rounded-lg object-center !p-0" />
            <Placeholder v-else class="size-[42px] rounded-lg" />
        </template>
    </div>
</template>

<style scoped></style>
