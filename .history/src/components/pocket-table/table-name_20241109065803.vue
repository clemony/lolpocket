<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore();
const props = defineProps<{
    params?: {
        data: {
            key: string
            bgColor: string
            iconColor: string
            icon: string
            name: string
            items: {}
            pinned: boolean
        }
        api: any
        node: any
    }
}>()
const pocket = ref(ps.getPocket(props.params.data.key))
</script>

<template>
<div class='grid items-center justify-start px-1 size-full [&_p]:hidden'>
    <PocketButton iconOrder :pocket="pocket" />
</div>
</template>

<style scoped></style>