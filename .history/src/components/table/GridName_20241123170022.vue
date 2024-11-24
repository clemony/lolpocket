<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { pocketMenu } from '@/components/menu/content/pocketMenu'
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
    <Dropdown class="w-full justify-self-start" :menu="pocketMenu">
        <template #1>
            <PocketIcon
                :pocket="pocket"
                class="size-14 rounded-lg [&_svg]:p-3"
                iconClass="rounded-lg" />
        </template>
        <template #2>
            <span class="grow truncate text-left">{{ pocket.name }}</span>
        </template>
    </Dropdown>
</template>

<style scoped></style>
