<script setup lang="ts">
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
watch(
    () => isOutside.value,
    (newVal) => {
        console.log(newVal)
    }
)
const tab1 = ref(null)
const tab2 = ref(null)
const tab3 = ref(null)
const tabModel = ref(tab1)
const dinger = ref(null)

const tab1pos = computed(() => {
    const { x, y, width } = useElementBounding(tab1)
    return { x, y, width }
})

const tab2pos = computed(() => {
    const { x, y, width } = useElementBounding(tab1)
    return { x, y, width }
})

const tab3pos = computed(() => {
    const { x, y, width } = useElementBounding(tab1)
    return { x, y, width }
})
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
                    value="tab1"
                    v-model="tabModel" />
                Spells
            </label>
        </li>
        <li>
            <label ref="tab2">
                <input
                    type="radio"
                    name="tabs"
                    value="tab1"
                    v-model="tabModel" />
                Runes
            </label>
        </li>
        <li>
            <label ref="tab3">Notes</label>
        </li>
    </ul>
</template>

<style scoped></style>
