<script setup lang="ts">
import type { pocket } from 'types'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    pocket: pocket
    class?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])

const runes1 = [set.value.p1, set.value.p2, set.value.p3]

const runes2 = [set.value.s1, set.value.s2]
</script>
<template v-if="set">
    <template v-for="rune in runes1">
        <div
            class="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]backdrop-blur-sm shrink-0 rounded-full border border-base-200 bg-base-100/60 p-1.5">
            <template v-if="rune.name != 'none'">
                <LoadImg
                    :url="rune.img"
                    class="size-[35px] overflow-auto rounded-full shadow-warm ring-1 ring-base-300" />
            </template>
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
