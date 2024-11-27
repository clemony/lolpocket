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
    <PocketMenu
        class="max-w-inherit relative flex h-full w-full items-center self-center justify-self-start"
        @click.stop
        type="dropdown"
        :pocket="pocket">
        <Button variant="ghost" class="mx-1 h-full w-full rounded-lg">
            <PocketIcon
                :pocket="pocket"
                class="size-14 rounded-lg [&_svg]:p-3"
                iconClass="rounded-lg" />

            <span class="truncate text-left">{{ pocket.name }}</span>
        </Button>
    </PocketMenu>
</template>

<style scoped></style>
