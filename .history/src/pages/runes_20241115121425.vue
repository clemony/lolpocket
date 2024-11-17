<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import { useRuneStore } from '@/stores/runeStore'
const ds = useDataStore()
</script>
<template>
    <div class="flex size-full items-center justify-center gap-8">
        <icon icon="qlementine-icons:check-tick-16" />
        <icon icon="teenyicons:tick-outline" />
    </div>
</template>
<style scoped></style>
