<script setup lang="ts"></script>

<template>
    <MenubarMenu>
        <MenubarContent>
            <MenubarSeparator />

            <MenubarItem>
                <icon icon="ph:at" />
                Account
                <MenubarShortcut class="flex gap-1">
                    <icon icon="lucide:arrow-big-up" class="opacity-80" />
                    A
                </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
                <icon icon="qlementine-icons:settings-16" />
                Settings
                <MenubarShortcut>
                    <icon icon="lucide:arrow-big-up" class="opacity-80" />
                    S
                </MenubarShortcut>
            </MenubarItem>

            <MenubarSeparator />
            <MenubarItem class="gap-4 !text-sm font-medium">
                <icon
                    icon="qlementine-icons:on-off-16"
                    class="size-5 stroke-2" />
                Quit
                <MenubarShortcut>⌘ Q</MenubarShortcut>
            </MenubarItem>
        </MenubarContent>
    </MenubarMenu>
</template>

<style scoped></style>
