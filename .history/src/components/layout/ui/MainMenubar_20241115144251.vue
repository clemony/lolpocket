<script setup lang="ts"></script>

<template>
    <Menubar class="absolute z-[999] w-full">
        <MenubarMenu>
            <Button
                variant="ghost"
                class="max-w- flex shrink-0 flex-nowrap items-center gap-3 !border-0 !ring-0 focus:!border-0 focus:!outline-0 focus:!ring-1 focus:!ring-base-200">
                <div
                    class="flex aspect-square size-6 shrink-0 items-center justify-center rounded-md bg-neutral text-neutral-content/90 shadow-sm">
                    <span class="mt-2px !text-xs font-bold">LP</span>
                </div>
                <div class="flex text-left leading-tight">
                    <h3>lolpockets</h3>
                </div>
            </Button>
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
        <Grow />

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
        <MenubarMenu>
            <WindowButtons class="ml-6" />
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
