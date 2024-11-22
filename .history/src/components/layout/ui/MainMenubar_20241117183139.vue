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
        class="absolute z-[999] w-full bg-base-100/[97%] pl-0 pr-4"
        data-tauri-drag-region>
        <MenubarMenu>
            <div class="join flex w-[18rem] items-center gap-2 pl-1 pr-6">
                <div
                    class="ml-2 flex aspect-square size-8 shrink-0 items-center justify-center rounded-md bg-neutral text-neutral-content/90 shadow-sm">
                    <span class="mt-1px !text-xs font-bold">LP</span>
                </div>
                <SearchButton class="h-7" />
            </div>
        </MenubarMenu>

        <Grow data-tauri-drag-region />

        <MenubarMenu>
            <MenubarTrigger>
                <span class="underline-offset-4 hover:underline">
                    lolpockets
                </span>
            </MenubarTrigger>
            <MenubarContent>
                <MenuWindowButtons />
            </MenubarContent>
        </MenubarMenu>

        <!-- <MenubarMenu>
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
        </MenubarMenu> -->
        <Grow data-tauri-drag-region />
        <MenubarMenu>
            <!--             <MenubarTrigger class="mx-5">
                {{ pocket.name }}

                <div class="grid size-7 place-items-center rounded-full px-3">
                    <icon :icon="pocket.icon" />
                </div>
            </MenubarTrigger> -->
        </MenubarMenu>

        <Grow class="min-w-6 max-w-20" />
        <MenubarMenu>
            <UserButton />
        </MenubarMenu>
        <MenubarMenu>
            <WindowButtons
                class="ml-0 odd:hidden [&_:first-child]:hidden [&_:last-child]:flex [&_:nth-child(2)]:hidden" />
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
