<!-- ActionCellRenderer.vue -->
<template>
    <button @click="performAction(params.data)">Edit</button>
</template>

<script setup>
const props = defineProps();
const params = props.params;

const performAction = (data) => {
    console.log("Performing action on:", data);
};
</script>