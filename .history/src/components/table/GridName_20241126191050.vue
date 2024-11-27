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
        class="max-w-inherit pt-0.5px relative flex h-full w-full items-center justify-start self-center justify-self-start pl-0.5 pr-px"
        @click.stop
        type="dropdown"
        :pocket="pocket">
        <Button
            variant="ghost"
            class="m-0 h-[calc(100%+6px)] w-full rounded-md px-1 hover:bg-transparent hover:shadow-inner hover:ring-1 hover:ring-base-300">
            <PocketIcon
                :pocket="pocket"
                class="size-14 rounded-lg [&_svg]:p-3"
                iconClass="rounded-lg" />

            <span class="max-w-[70%] truncate text-left">
                {{ pocket.name }}
            </span>
        </Button>
    </PocketMenu>
</template>

<style scoped></style>
