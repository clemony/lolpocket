<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
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
<div
    class='flex items-center justify-start size-full [&_p]:hidden justify-items-start justify-content-start overflow-x-hidden'>
    <PocketButton left :pocket="pocket" class=' w-full' :size="32" :padding="10" />
</div>
</template>

<style scoped></style>