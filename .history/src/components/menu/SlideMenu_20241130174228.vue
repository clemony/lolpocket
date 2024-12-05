<script setup lang="ts">
const target = ref(null)

const tab1 = ref()
const tab2 = ref()
const tab3 = ref()

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

const tab1isHovered = computed(() => {
    return useElementHover(tab1)
})

const tab2isHovered = computed(() => {
    return useElementHover(tab2)
})
const tab3isHovered = computed(() => {
    return useElementHover(tab3)
})

const tabs = [
    {
        name: 'Spells',
        ref: tab1,
    },
    {
        name: 'Runes',
        ref: tab2,
    },
    {
        name: 'Notes',
        ref: tab3,
    },
]
console.log(tabs)
watch(
    () => tab1,
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
                    :value="tab.name"
                    class="hidden"
                    v-model="tabModel" />
                {{ tab.name }}
            </label>
        </li>
    </ul>
</template>

<style scoped></style>
