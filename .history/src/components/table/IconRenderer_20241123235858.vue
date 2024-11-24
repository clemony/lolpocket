<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { ContextMenuTrigger } from 'radix-vue'

const ps = usePocketStore()
const props = defineProps<{
    params: {
        api
        node
        icon
    }
}>()

const api = props.params.api

function select(e) {
    e.target.checked ? api.selectAllFiltered() : api.deselectAll()
}
</script>

<template>
    <div class="grid size-full place-items-center">
        <icon :icon="props.params.icon" />
    </div>
</template>

<style scoped></style>
