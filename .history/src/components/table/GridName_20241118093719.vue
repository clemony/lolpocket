<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
const ps = usePocketStore()
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
        class="justify-content-start flex size-full items-center justify-start justify-items-start overflow-x-hidden [&_p]:hidden">
        <PocketButton left :pocket="pocket" class="w-full">
            <template #left>
                <PocketIcon />
            </template>
        </PocketButton>
    </div>
</template>

<style scoped></style>
