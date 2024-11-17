<script setup lang="ts"></script>

<template>
    <Menubar class="absolute z-[999] w-full">
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

            <Button
                variant="outline"
                class="relative max-h-9 w-full items-center justify-start justify-self-end bg-base-100/60 px-2 hover:cursor-text">
                <icon
                    icon="teenyicons:search-outline"
                    class="text-base-content/80" />

                <span
                    class="align-end grow px-2 pt-0.5 text-left text-base-content/80">
                    Search...
                </span>
                <DropdownMenuShortcut>⌘ K</DropdownMenuShortcut>
            </Button>
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
