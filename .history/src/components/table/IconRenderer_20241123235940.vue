<script setup lang="ts">
const props = defineProps<{
    params: {
        icon
    }
}>()
</script>

<template>
    <div class="grid size-full place-items-center">
        <icon :icon="props.params.icon" />
    </div>
</template>

<style scoped></style>
