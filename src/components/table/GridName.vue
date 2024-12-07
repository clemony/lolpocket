<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { getPocket } from '@utils/pocketUtilities'
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
const pocket = ref(getPocket(props.params.data.key))
</script>

<template>
    <PocketMenu
    class=' w-inherit mx-1 inset-0'
        contentClass=" flex h-full w-full max-w-[99%] items-center justify-start self-center justify-self-start pr-px"
        @click.stop
        type="dropdown"
        :pocket="pocket">
        <Button
            variant="ghost"
            class="ml-px mt-px  flex h-[calc(100%+8px)] grow w-full! rounded-lg px-1 hover:ring-1 hover:ring-b3/40">
            <PocketIcon
                :pocket="pocket"
                class="size-14 rounded-lg [&_svg]:p-3"
                iconClass="rounded-lg" />

            <span class="w-full! grow truncate text-left">
                {{ pocket.name }}
            </span>
        </Button>
    </PocketMenu>
</template>

<style scoped></style>
