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
        <div class="relative z-0 shrink-0 self-center opacity-90">
            <img
                v-if="set.keystone.name != 'none'"
                :src="set.keystone.img"
                class="size-[60px] object-cover" />

            <Placeholder
                v-else
                :size="35"
                class="border-base-300/80 shadow-inset-sm"
                img="/img/runes/RunesIcon.svg"
                iClass="p-2 opacity-15" />

            <div
                v-if="set.secondary != ''"
                class="absolute -right-2 bottom-2 size-12 rounded-full border border-base-200 bg-base-100/70 p-2 shadow-smooth backdrop-blur-sm">
                <img
                    :src="`/img/runes/${set.secondary}.webp`"
                    class="size-full drop-shadow-soft" />
            </div>
        </div>
    </template>
</template>
<style scoped></style>
