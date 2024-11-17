<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import { useRuneStore } from '@/stores/runeStore'
const ds = useDataStore()
</script>
<template>
    <div class="grid size-full place-items-center gap-8">
        <icon icon="qlementine-icons:check-tick-16" />
    </div>
</template>
<style scoped></style>
