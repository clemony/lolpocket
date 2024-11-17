<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore()
const route = useRoute()
const pocket = ref(ps.getPocket(route.params.pocketKey))
</script>

<template>
    <Menubar
        class="absolute z-[999] w-full border-l-0 bg-base-100/80 pl-0 pr-4"
        data-tauri-drag-region>
        <MenubarMenu>
            <MenubarTrigger class="mr-16">Pocket</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>Dashboard</MenubarTrigger>
            <MenubarContent>
                <MenubarItem>
                    New Tab
                    <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>New Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Share</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Print</MenubarItem>
            </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
            <MenubarTrigger>Champions</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
            <MenubarTrigger>Items</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
            <MenubarTrigger>Runes</MenubarTrigger>
        </MenubarMenu>
        <Grow data-tauri-drag-region />
        <MenubarMenu>
            <MenubarTrigger class="mx-5">
                {{ pocket.name }}

                <div class="grid size-7 place-items-center rounded-full px-3">
                    <icon :icon="pocket.icon" />
                </div>
            </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
            <WindowButtons />
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
