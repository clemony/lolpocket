<script setup lang="ts">
import { ref, watch } from 'vue'
import { usePocketStore } from '../Stores/pocketStore'

const ps = usePocketStore()
</script>

<template>
<Nmenu />
</template>

<style scoped></style>
