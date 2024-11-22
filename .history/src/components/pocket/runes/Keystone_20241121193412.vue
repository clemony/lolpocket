<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])
</script>
<template>
    <template v-if="set">
        <div
            class="relative z-10 size-18 shrink-0 self-center rounded-full border border-base-200 bg-base-100/50 p-1.5 shadow-pretty backdrop-blur-sm">
            <img
                v-if="set.keystone.name != 'none'"
                :src="set.keystone.img"
                class="size-full opacity-90" />

            <Placeholder
                v-else
                class="border-base-300/80 shadow-inset-sm"
                img="/img/runes/RunesIcon.svg"
                iClass="p-2 opacity-15" />

            <div
                v-if="set.secondary != ''"
                class="absolute -bottom-6 -right-8 z-20 size-12 rounded-full border border-base-200 bg-base-100/60 p-1.5 shadow-pretty backdrop-blur-sm">
                <img
                    :src="`/img/runes/${set.secondary}.webp`"
                    class="size-full drop-shadow-sm" />
            </div>
        </div>
    </template>
</template>
<style scoped></style>
