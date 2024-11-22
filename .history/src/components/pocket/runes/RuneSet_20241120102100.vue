<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
    runes1?: boolean
    runes2?: boolean
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])

const runes1 = ref([set.value.p1, set.value.p2, set.value.p3])

const runes2 = ref([set.value.s1, set.value.s2])

const runes = computed(() => {
    const s =
        props.runes1 ? runes1.value
        : props.runes2 ? runes2
        : 'none'
    return s
})
</script>
<template v-if="set">
    <template v-for="rune in runes">
        <div class="rounded-full">
            <template v-if="rune.name != 'none'">
                <LoadImg
                    :url="rune.img"
                    class="col-start-1 size-[35px] overflow-auto rounded-full shadow-warm ring-1 ring-base-300" />
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
