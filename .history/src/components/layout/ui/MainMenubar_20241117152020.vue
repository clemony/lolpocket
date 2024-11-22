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
        class="absolute z-[999] h-12 w-full border-l-0 bg-base-100/80 pl-0 pr-4"
        data-tauri-drag-region>
        <MenubarMenu>
            <MenubarTrigger class="ml-3 mr-16">
                <div
                    class="flex aspect-square size-7 items-center justify-center rounded-md bg-neutral text-neutral-content/90 shadow-sm">
                    <span class="mt-1px !text-xs font-bold">LP</span>
                </div>
                <span
                    class="mt-px text-lg font-semibold text-base-content underline-offset-4 opacity-80 group-hover/lol:underline">
                    lolpockets
                </span>
                <icon
                    icon="teenyicons:caret-vertical-small-outline"
                    class="ml-auto !size-5" />
            </MenubarTrigger>
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
            <!--             <MenubarTrigger class="mx-5">
                {{ pocket.name }}

                <div class="grid size-7 place-items-center rounded-full px-3">
                    <icon :icon="pocket.icon" />
                </div>
            </MenubarTrigger> -->
        </MenubarMenu>

        <MenubarMenu>
            <WindowButtons />
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
