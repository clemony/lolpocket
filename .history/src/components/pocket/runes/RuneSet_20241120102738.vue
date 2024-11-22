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
    <div :class="cn(props.class)">
        <template v-for="rune in runes1">
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
    </div>
    <div :class="cn(props.class)">
        <template v-for="rune in runes2">
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
    </div>
</template>
<style scoped></style>
