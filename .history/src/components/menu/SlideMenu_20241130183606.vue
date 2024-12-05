<script setup lang="ts">
import { useElementTransform } from '@vueuse/motion'

const target = ref(null)

const tab1 = ref(null)
const tab2 = ref(null)
const tab3 = ref(null)

const tab1pos = computed(() => {
    const { x, y, width } = useElementBounding(tab1)
    return { x, y, width }
})

const tab2pos = computed(() => {
    const { x, y, width } = useElementBounding(tab2)
    return { x, y, width }
})

const tab3pos = computed(() => {
    const { x, y, width } = useElementBounding(tab3)
    return { x, y, width }
})

const tab1isHovered = useElementHover(tab1)

const tab2isHovered = useElementHover(tab2)

const tab3isHovered = useElementHover(tab3)

const tabs = [
    {
        name: 'Spells',
        ref: ref(tab1),
        pos: ref(tab1pos),
        hover: ref(tab1isHovered),
    },
    {
        name: 'Runes',
        ref: ref(tab2),
        pos: ref(tab2pos),
        hover: ref(tab2isHovered),
    },
    {
        name: 'Notes',
        ref: ref(tab3),
        pos: ref(tab3pos),
        hover: ref(tab3isHovered),
    },
]
const tabModel = ref('Spells')

const activePos = computed(() => {
    const a = tabs.find((tab) => tab.name == tabModel.value)
    const to = a.pos.value
    const { transform } = useElementTransform(dinger)
})

console.log('this', activePos.value)
const dinger = ref()
</script>

<template>
    <ul
        ref="target"
        class="mt-6 flex h-9 items-center px-1 [&_li]:z-10 [&_li]:w-20 [&_li]:px-2">
        <div
            ref="dinger"
            class="absolute h-9 w-[55px] rounded-md border border-base-200 bg-base-100 opacity-90 shadow-sm" />

        <li>
            <label ref="tab1">
                <input
                    type="radio"
                    name="tabs"
                    value="Spells"
                    class=""
                    v-model="tabModel" />
                Spells
            </label>
        </li>
        <li>
            <label ref="tab2">
                <input
                    type="radio"
                    name="tabs"
                    value="Runes"
                    class=""
                    v-model="tabModel" />
                Runes
            </label>
        </li>
        <li>
            <label ref="tab3">
                <input
                    type="radio"
                    name="tabs"
                    value="Notes"
                    class="hidden"
                    v-model="tabModel" />
                Notes
            </label>
        </li>
    </ul>
</template>

<style scoped></style>
