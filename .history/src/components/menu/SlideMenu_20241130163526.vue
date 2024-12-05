<script setup lang="ts">
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
watch(
    () => isOutside.value,
    (newVal) => {
        console.log(newVal)
    }
)
</script>

<template>
    <ul
        ref="target"
        class="mt-6 flex h-9 items-center px-1 before:absolute before:h-9 before:w-[55px] before:rounded-md before:border before:border-base-200 before:bg-base-100 before:opacity-90 before:shadow-sm [&_li]:z-10 [&_li]:w-20 [&_li]:px-2">
        <li>
            <label>Spells</label>
        </li>
        <li>
            <label>Runes</label>
        </li>
        <li><label>Notes</label></li>
    </ul>
</template>

<style scoped></style>
