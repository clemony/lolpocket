<script setup lang="ts">
import { newRuneSet } from '@utils/pocketUtilities'
import type { pocket, RuneSet } from 'types'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    pocket: pocket
    class?: HTMLAttributes['class']
    type?: string
    style: any
}>()

const pocket = ref(props.pocket)
console.log(pocket)

const set = computed(() => {
    let a = pocket.value.runes[0].runeSets[pocket.value.runes[0].starred]
    const b = pocket.value.runes[0].runeSets[0]
    !a && b ? (a = b)
    : !b ? (a = newRuneSet())
    : a
    return a
})

console.log(set)
const runes1 = [set.value.p1, set.value.p2, set.value.p3]

const runes2 = [set.value.s1, set.value.s2]

const whichOne = ref()
onMounted(() => {
    props.type == 'runes1' ?
        (whichOne.value = runes1)
    :   (whichOne.value = runes2)
})
</script>
<template>
    <div
        class="absolute right-2.5 top-0 z-10 h-56 w-12 flex-col items-center justify-end space-y-1 rounded-lg">
        <template v-for="rune in runes1.concat(runes2)">
            <div
                class="grid w-fit place-items-center rounded-full shadow-inner ring-1 ring-base-300"
                :class="{
                    'border border-neutral/80 shadow-warm shadow-neutral/40 ring-1 ring-transparent ring-offset-2 ring-offset-base-100/50':
                        rune.name != 'none',
                }">
                <LoadImg
                    v-if="rune.name != 'none'"
                    :url="rune.img"
                    class="size-10 overflow-hidden rounded-full" />
                <ShadowedPlaceholder v-else class="size-10 rounded-full" />
            </div>
        </template>
    </div>
</template>
<style scoped></style>
