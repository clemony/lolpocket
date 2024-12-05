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
        class="absolute right-4 top-10 z-10 h-fit flex-col items-center justify-end gap-1.5">
        <div
            :class="
                cn(
                    'z-20 mt-1 h-fit w-fit gap-2',

                    '[&_:first-child]:z-20',

                    '[&_:nth-child(2)]:z-10',

                    '[&_:last-child]:z-0'
                )
            ">
            <template v-for="rune in runes1.concat(runes2)">
                <div
                    class="grid place-items-center rounded-full shadow-inner ring-base-300"
                    :class="{
                        'shadow-warm shadow-neutral/40 ring-1 ring-neutral/80':
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
    </div>
</template>
<style scoped></style>
