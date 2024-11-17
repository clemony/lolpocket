<script setup lang="ts">
const searchQuery = ref('')
</script>

<template>
    <div class="w-full rounded-2xl p-0">
        <SearchBox
            class="h-16 w-full focus-within:outline-none focus-within:ring-1 focus-within:ring-neutral/30 hover:ring-1 hover:ring-neutral/40"
            inputClass="rounded-[1rem] pl-14 text-lg pt-1.5 align-baseline"
            iconClass="p-5 left-0"
            @update:search="(v) => (searchQuery = v)" />
    </div>
</template>

<style scoped></style>
