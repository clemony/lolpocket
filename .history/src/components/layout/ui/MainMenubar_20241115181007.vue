<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
</script>

<template>
    <Menubar
        class="absolute z-[999] w-full pl-0 shadow-cham"
        data-tauri-drag-region>
        <MenubarMenu>
            <WindowButtons class="mr-6" />
        </MenubarMenu>

        <MenubarMenu>
            <div class="flex w-[18rem] items-center justify-start gap-5 px-4">
                <div
                    class="flex aspect-square h-[19px] w-[20px] shrink-0 items-center justify-center rounded-md bg-neutral text-neutral-content/90 shadow-sm">
                    <span class="mt-1px !text-xs font-bold">LP</span>
                </div>
                <span class="mt-px text-lg font-bold opacity-80">
                    lolpockets
                </span>
            </div>
        </MenubarMenu>
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

        <MenubarMenu>
            <Button
                variant="outline"
                class="relative h-7 w-full max-w-44 items-center justify-start border-base-300 bg-base-100/60 px-2 hover:cursor-text">
                <icon
                    icon="teenyicons:search-outline"
                    class="-mt-px size-[11px] shrink-0 text-base-content/80" />

                <span
                    class="align-end grow px-1 pt-px text-left text-base-content/80">
                    Search
                </span>
                <DropdownMenuShortcut>⌘ K</DropdownMenuShortcut>
            </Button>
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
