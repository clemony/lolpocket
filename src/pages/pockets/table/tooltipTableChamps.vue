<script setup lang="ts">
import type { Champion } from '../../../stores/dataStore';

const props = defineProps<{
    champions: {
        champion: Champion[]
    }
    currentChampion: Champion[]
}>();
</script>

<template>
    <ul class='p-2 !list-disc'>
        <li v-for="champion in champions.champion">
            {{ champion.name }}
        </li>
    </ul>
</template>

<style scoped></style>