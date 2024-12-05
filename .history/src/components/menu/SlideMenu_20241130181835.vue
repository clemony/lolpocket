<script setup lang="ts">
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
        tab1: {
            name: 'Spells',
            ref: ref(tab1),
            pos: ref(tab1pos),
            hover: ref(tab1isHovered),
        },
        tab2: {
            name: 'Runes',
            ref: ref(tab2),
            pos: ref(tab2pos),
            hover: ref(tab2isHovered),
        },
        tab3: {
            name: 'Notes',
            ref: ref(tab3),
            pos: ref(tab3pos),
            hover: ref(tab3isHovered),
        },
    },
]
const tabModel = ref(tab1)

const activePos = computed(() => {
    const a = tabs.find((tab) => tab == tabModel.value)
    return a
})

console.log('this', activePos.value)
const dinger = ref()

watch(
    () => tab1isHovered.value,
    (newVal) => {
        console.log(newVal)
    }
)
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
                    :value="tabs[0].tab1.ref"
                    class="hidden"
                    v-model="tabModel" />
                Spells
            </label>
        </li>
        <li>
            <label ref="tab2">
                <input
                    type="radio"
                    name="tabs"
                    value="tab2"
                    class="hidden"
                    v-model="tabModel" />
                Runes
            </label>
        </li>
        <li>
            <label ref="tab3">
                <input
                    type="radio"
                    name="tabs"
                    value="tab3"
                    class="hidden"
                    v-model="tabModel" />
                Notes
            </label>
        </li>
    </ul>
</template>

<style scoped></style>
