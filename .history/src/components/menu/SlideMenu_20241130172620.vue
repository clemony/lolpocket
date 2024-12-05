<script setup lang="ts">
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
watch(
    () => isOutside.value,
    (newVal) => {
        console.log(newVal)
    }
)

const tabs = [
    {
        name: 'Spells',
        ref: ref(null),
        pos: () =>
            computed(() => {
                const { x, y, width } = useElementBounding(tabs[0].ref)
                return { x, y, width }
            }),
        isHovered: () =>
            computed(() => {
                return useElementHover(tabs[0].ref)
            }),
    },
    {
        name: 'Runes',
        ref: ref(null),
        pos: () =>
            computed(() => {
                const { x, y, width } = useElementBounding(tabs[1].ref)
                return { x, y, width }
            }),
        isHovered: () =>
            computed(() => {
                return useElementHover(tabs[1].ref)
            }),
    },
    {
        name: 'Notes',
        ref: ref(null),
        pos: () =>
            computed(() => {
                const { x, y, width } = useElementBounding(tabs[2].ref)
                return { x, y, width }
            }),
        isHovered: () =>
            computed(() => {
                return useElementHover(tabs[2].ref)
            }),
    },
]

watch(
    () => tabs[0].isHovered.value,
    (newVal) => {
        console.log(newVal)
    }
)
const tabModel = ref(tabs[0])
const dinger = ref(null)
</script>

<template>
    <ul
        ref="target"
        class="mt-6 flex h-9 items-center px-1 [&_li]:z-10 [&_li]:w-20 [&_li]:px-2">
        <div
            ref="dinger"
            class="absolute h-9 w-[55px] rounded-md border border-base-200 bg-base-100 opacity-90 shadow-sm" />
        <li v-for="(tab, i) in tabs" :key="i">
            <label :ref="tab.ref">
                <input
                    type="radio"
                    name="tabs"
                    value="tab1"
                    class="hidden"
                    v-model="tabModel" />
                {{ tab.name }}
            </label>
        </li>
    </ul>
</template>

<style scoped></style>
