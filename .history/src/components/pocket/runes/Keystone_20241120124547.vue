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
        <div class="z-0 shrink-0 self-center opacity-90 relative">
            <img
                v-if="set.keystone.name != 'none'"
                :src="set.keystone.img"
                class="size-[60px] object-cover" />

                    <img :src="`/img/runes/set."
            <Placeholder
                v-else
                :size="35"
                class="border-base-300/80 shadow-inset-sm"
                img="/img/runes/RunesIcon.svg"
                iClass="p-2 opacity-15" />
        </div>
    </template>
</template>
<style scoped></style>
