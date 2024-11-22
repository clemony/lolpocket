<script setup lang="ts">
import type { pocket } from 'types'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    pocket: pocket
    class?: HTMLAttributes['class']
    type: string
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])

const runes1 = [set.value.p1, set.value.p2, set.value.p3]

const runes2 = [set.value.s1, set.value.s2]

const this1 = ref()
onMounted(() => {
    props.type == 'runes1' ? (this1.value = runes1) : (this1.value = runes2)
})
</script>
<template v-if="set">
    <template v-for="rune in this1">
        <div
            class="shrink-0 rounded-full border border-base-300/70 bg-base-100/50 p-0 shadow-[0_3px_10px_rgb(0,0,0,0.2),inset_-1px_-1px_0px_1px_#00000008] backdrop-blur-sm">
            <template v-if="rune.name != 'none'">
                <LoadImg
                    :url="rune.img"
                    class="size-22 rounded-full shadow-sm drop-shadow-sm" />
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
