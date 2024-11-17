<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
</script>

<template>
    <Menubar
        class="absolute z-[999] w-full border-l-0 bg-base-100/80 pl-0 pr-4"
        data-tauri-drag-region>
        <MenubarMenu></MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
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
        <Grow data-tauri-drag-region />

        <MenubarMenu></MenubarMenu>

        <MenubarMenu>
            <WindowButtons />
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
