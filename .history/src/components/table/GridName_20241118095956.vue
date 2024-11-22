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
        <DropdownButton class="w-full">
            <template #1>
                <PocketIcon :pocket="pocket" />
            </template>
            <template #2>
                {{ pocket.name }}
            </template>

            <DdPocket :pocketKey="pocket.key" :type="'Pocket Info'" />
        </DropdownButton>
    </div>
</template>

<style scoped></style>
