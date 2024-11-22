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
            class="grid size-12 shrink-0 place-items-center overflow-hidden rounded-lg border border-base-300">
            <template v-if="rune.name != 'none'">
                <LoadImg :url="rune.img" class="-ml-1 -mt-1 size-16" />
            </template>
            <TextureOutline
                v-else
                :size="35"
                img="/img/runes/RunesIcon.svg"
                iClass="p-2 " />
        </div>
    </template>
</template>
<style scoped></style>
