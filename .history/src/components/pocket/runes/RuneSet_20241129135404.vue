<script setup lang="ts">
import { newRuneSet } from '@utils/pocketUtilities'
import type { pocket } from 'types'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    pocket: pocket
    class?: HTMLAttributes['class']
    type: string
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
<template v-if="set">
    <template v-for="rune in whichOne">
        <div
            class="grid place-items-center rounded-full shadow-warm"
            :class="{
                'opacity-100 shadow-neutral/40 ring-1 ring-neutral/80':
                    rune.name != 'none',
            }">
            <LoadImg
                :url="rune.img"
                class="size-11 rounded-full bg-transparent" />
        </div>
    </template>
</template>
<style scoped></style>
