<script setup lang="ts">

</script>

<template>
<div v-for="column in columns" :key="column.colId" class="flex items-center">
    <input type="checkbox" :checked="column.isVisible"
        @change="toggleColumnVisibility(column.colId, $event.target.checked)" />
    <label>{{ column.headerName }}</label>
</div>
</template>

<style scoped></style>