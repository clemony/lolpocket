<script setup lang="ts"></script>

<template>
    <Menubar class="absolute z-[999] w-full">
        <MenubarMenu class="">
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

        <MenubarMenu class="top-1 mr-5 py-1">
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
            <span class="" />
            <WindowButtons />
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
