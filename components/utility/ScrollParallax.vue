<script setup lang="ts">
const props = defineProps<{
    axis: string
}>()

const target = ref()
const targetScroll = computed(() => {
    const { isScrolling, directions } = useScroll(target)
    return { isScrolling, directions }
})
const targetIsVisible = useElementVisibility(target)
</script>
<template>
    <div ref="target" class=""></div>
</template>
<style scoped></style>
