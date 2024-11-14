<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
const props = defineProps<{
    badge?: string
    array?: any
}>()
</script>

<template>
    <Button
        variant="ghost"
        size="sm"
        class="flex w-full items-center justify-start"></Button>
</template>

<style scoped></style>
