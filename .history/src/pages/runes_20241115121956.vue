<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useDataStore } from '@/stores/dataStore'
import { useRuneStore } from '@/stores/runeStore'
const ds = useDataStore()
</script>
<template>
    <div class="flex size-full items-center justify-center gap-8 *:size-6">
        <icon icon="qlementine-icons:check-tick-16" />
        <icon icon="teenyicons:tick-outline" />
        <icon icon="streamline:check" />
        <icon icon="la:check" />
        <icon icon="mynaui:check" />
        <icon icon="iconoir:check" />
        <icon icon="radix-icons:check" />
    </div>
</template>
<style scoped></style>
