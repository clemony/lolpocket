<script setup lang="ts"></script>

<template>
    <Menubar class="absolute z-[999] w-full">
        <MenubarMenu class="w-full">
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
        <MenubarMenu class="grow"></MenubarMenu>
        <MenubarMenu class="px-2 py-1">
            <Button
                variant="outline"
                class="relative h-7 w-full max-w-36 items-center justify-start justify-self-end bg-base-100/60 px-2 hover:cursor-text">
                <icon
                    icon="teenyicons:search-outline"
                    class="size-4 shrink-0 text-base-content/80" />

                <span
                    class="align-end grow px-1 pt-0.5 text-left text-base-content/80">
                    Search
                </span>
                <DropdownMenuShortcut>⌘ K</DropdownMenuShortcut>
            </Button>
        </MenubarMenu>
    </Menubar>
</template>

<style scoped></style>
