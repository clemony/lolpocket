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
const tab1pos = computed(() => {
    const { x, y, width } = useElementBounding(tab1)
    return { x, y, width }
})

const tab2 = ref(null)
const tab2pos = computed(() => {
    const { x, y, width } = useElementBounding(tab1)
    return { x, y, width }
})
const tab3 = ref(null)
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
            class="absolute h-9 w-[55px] rounded-md border border-base-200 bg-base-100 opacity-90 shadow-sm" />
        <li>
            <label ref="tab1">Spells</label>
        </li>
        <li>
            <label ref="tab2">Runes</label>
        </li>
        <li>
            <label ref="tab3">Notes</label>
        </li>
    </ul>
</template>

<style scoped></style>
