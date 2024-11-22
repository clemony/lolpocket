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
            class="grid size-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-base-300/70">
            <template v-if="rune.name != 'none'">
                <LoadImg :url="rune.img" class="size-16 object-center" />
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
