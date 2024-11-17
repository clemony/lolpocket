<script setup lang="ts">
const props = defineProps<{
    nav?
}>()
</script>

<template>
    <MainMenubar />

    <div class="flex size-full justify-center">
        <slot name="content" class="" />
    </div>
</template>

<style scoped></style>
