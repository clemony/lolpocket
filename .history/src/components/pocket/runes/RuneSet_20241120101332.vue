<script setup lang="ts">
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()

const pocket = ref(props.pocket)

const set = ref(pocket.value.runes[0].runeSets[pocket.value.runes[0].starred])

const runes = [
    set.value.p1,
    set.value.p2,
    set.value.p3,
    set.value.s1,
    set.value.s2,
]
</script>
<template 
        v-if="set">

        <template v-for="rune in runes">
            <div class="rounded-full">
                <LoadImg
                    v-if="rune.name != 'none'"
                    :url="rune.img"
                    class="col-start-1 size-[35px] overflow-auto rounded-full shadow-warm ring-1 ring-base-300" />
                <Placeholder
                    v-else
                    :size="35"
                    class="border-base-300/80 shadow-inset-sm"
                    img="/img/runes/RunesIcon.svg"
                    iClass="p-2 opacity-15" />
            </div>
        </template>
    </div>
</template>
<style scoped></style>
