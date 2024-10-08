<script setup lang="ts">
defineProps({
    pocket: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <VDropdown theme="detail" class="">
        <button :style="{ backgroundColor: pocket.bgColor }"
            class="grid p-3 rounded-full shadow-sm place-items-center size-10 icon-color" @click.stop>
            <icon :style="{ color: pocket.iconColor }" :icon="`${pocket.icon}`" class="size-full" />
        </button>

        <template #popper>
            <ColorPicker />
        </template>
    </VDropdown>
</template>

<style scoped></style>
