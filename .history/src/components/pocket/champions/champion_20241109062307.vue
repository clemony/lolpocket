<script setup lang="ts">
import { Champion } from 'types'
import { clean } from '@lib/utils'
import { useChampStore } from '@stores/champStore'
const cs = useChampStore();
const props = defineProps<{
    champion: Champion

}>()
</script>

<template></template>

<style scoped></style>