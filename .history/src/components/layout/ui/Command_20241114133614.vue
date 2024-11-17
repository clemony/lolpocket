<script setup lang="ts">
const searchQuery = ref('')
</script>

<template>
    <div class="w-full rounded-2xl p-0">
        <SearchBox
            class="h-16 w-full overflow-hidden"
            inputClass="rounded-lg pl-8 text-lg leading-8 align-baseline"
            iconClass="p-3"
            @update:search="(v) => (searchQuery = v)" />
    </div>
</template>

<style scoped></style>
