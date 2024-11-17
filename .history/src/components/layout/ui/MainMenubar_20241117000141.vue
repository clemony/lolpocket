<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
</script>

<template>
    <Menubar class="absolute z-[999] w-full pl-0" data-tauri-drag-region>
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
            <WindowButtons class="mr-6" />
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
