<script setup lang="ts">
import type { Champion } from '@/Stores/dataStore'

const props = defineProps<{
    champions: {
        champion: Champion[]
    }
    currentChampion: Champion[]
}>()
</script>

<template>
<ul class="!list-disc p-2">
    <li v-for="champion in champions.champion">
        {{ champion.name }}
    </li>
</ul>
</template>

<style scoped></style>
