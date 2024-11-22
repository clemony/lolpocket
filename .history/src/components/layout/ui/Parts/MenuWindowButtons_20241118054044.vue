<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'

const appWindow = getCurrentWindow()

document
    .getElementById('titlebar-minimize')
    ?.addEventListener('click', () => appWindow.minimize())
document
    .getElementById('titlebar-maximize')
    ?.addEventListener('click', () => appWindow.toggleMaximize())
document
    .getElementById('titlebar-close')
    ?.addEventListener('click', () => appWindow.close())

const target = ref()
</script>
<template>
    <MenubarItem class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar class="h-10 w-10 rounded-lg">
                <AvatarImage
                    :src="userData.user.avatar"
                    :alt="userData.user.name" />
                <AvatarFallback class="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div class="grid flex-1 pt-[2px] text-left text-sm">
                <h4 class="truncate !font-semibold">
                    {{ userData.user.name }}
                </h4>
                <span class="truncate text-base">
                    {{ userData.user.tag }}
                </span>
            </div>
        </div>
    </MenubarItem>
    <MenubarItem>
        <icon icon="qlementine-icons:settings-16" />
        Settings
        <MenubarShortcut>
            <icon icon="lucide:arrow-big-up" class="opacity-80" />
            S
        </MenubarShortcut>
    </MenubarItem>
    <MenubarItem
        id="titlebar-minimize"
        ref="minimize"
        alt="minimize"
        @click="appWindow.minimize()">
        <icon icon="teenyicons:minus-small-outline" />
        Minimize Window
        <MenubarShortcut>⌘</MenubarShortcut>
    </MenubarItem>

    <MenubarItem
        id="titlebar-maximize"
        ref="maximize"
        alt="maximize"
        @click="appWindow.toggleMaximize()">
        <icon icon="mynaui:maximize-one" class="!size-[13px]" />
        Maximize Window
        <MenubarShortcut>⌘</MenubarShortcut>
    </MenubarItem>
    <MenubarItem>
        <icon icon="radix-icons:enter" />
        Log out
    </MenubarItem>
    <MenubarItem
        id="titlebar-close"
        ref="close"
        data-tip="close"
        @click="appWindow.close()">
        <icon icon="teenyicons:x-small-outline" />
        Quit App
        <MenubarShortcut>⌘ Q</MenubarShortcut>
    </MenubarItem>
</template>
<style scoped></style>
