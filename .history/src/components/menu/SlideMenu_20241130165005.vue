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
    const { x, y } = useElementBounding(tab1)
    return { x, y }
})

const tab2 = ref(null)
const tab2pos = computed(() => {
    const { x, y } = useElementBounding(tab1)
    return { x, y }
})
const tab3 = ref(null)
const tab3pos = computed(() => {
    const { x, y } = useElementBounding(tab1)
    return { x, y }
})
</script>

<template>
    <ul
        ref="target"
        class="mt-6 flex h-9 items-center px-1 before:absolute before:h-9 before:w-[55px] before:rounded-md before:border before:border-base-200 before:bg-base-100 before:opacity-90 before:shadow-sm [&_li]:z-10 [&_li]:w-20 [&_li]:px-2">
        <li>
            <label ref="tab1">Spells</label>
        </li>
        <li>
            <label ref="tab1">Runes</label>
        </li>
        <li><label ref="tab1">Notes</label></li>
    </ul>
</template>

<style scoped></style>
