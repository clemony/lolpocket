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
            class="shadow-pretty shrink-0 rounded-full border border-base-200 bg-base-100/50 ring-1 ring-neutral/60 ring-offset-1 ring-offset-base-100 backdrop-blur-sm">
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
